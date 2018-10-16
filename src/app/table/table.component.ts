import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';
import { XrmIntegrationService } from '../xrm-integration.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()  table;
  @Input()  fields;
  @Input()  type;
  @Input() filter;
  private xrm: any;
  result = [];
  fieldList: any;
  @Output() showCount;

  constructor( private xrmService: XrmIntegrationService) {
    this.showCount = new EventEmitter();
  }

  ngOnInit() {
      this.type = !this.type && this.type !== 0 ? '' : this.type;
      this.fieldList = Object.keys(this.fields) || [];
      this.getXrmObject();
  }

  getXrmObject() {
    if (('parent' in window) && 'Xrm' in window.parent && this.xrm == null) {
      this.xrm = window.parent['Xrm'];
      this.xrmService.setXrmApi(this.xrm);
    }
    if (this.xrm === undefined ) {
      return;
    }

    /* pulling lead statuses to show on the UI */
      const thiz = this;
      this.xrmService.getEntityData(this.type, this.table, this.fieldList, this.filter).then(function success(data) {
        thiz.result = data.entities || [] ;
        // this.showCount.emit(thiz.result.length);
      }, function error(data) {
         console.log(error);
      });
  }

}
