import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AstService } from './ast-service.service';
import { XrmIntegrationService } from './xrm-integration.service';
import { TableComponent } from './table/table.component';
import { WidgetComponent } from './widget/widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ADR Workbench';
  textAreaControl = new FormControl('', );
  output: any;
  program: any;
  keys: any;
  parentEntityId: any;
  message = '';
  search = new FormControl('', );
  xrm: any = null;
  result = {};
  leadStatus = [0, 1, 2, 3, 4];
  activityFields: any;
  activityTableName = 'activitypointer';
  leadFields: any;
  activityFilter = 'activitytypecode eq \'phonecall\'';
  leadFilter = 'statecode eq ';

  constructor(private astService: AstService, private xrmService: XrmIntegrationService) {
    this.leadFields = {
      'fullname': 'fullname',
      'statecode': 'statecode@OData.Community.Display.V1.FormattedValue',
      'companyname': 'companyname',
      'jobtitle': 'jobtitle',
      'leadsourcecode': 'leadsourcecode@OData.Community.Display.V1.FormattedValue'
    };
    this.activityFields = {
      'activitytypecode': 'activitytypecode@OData.Community.Display.V1.FormattedValue',
      'statecode': 'statecode@OData.Community.Display.V1.FormattedValue',
      'subject': 'subject',
      'prioritycode': 'prioritycode@OData.Community.Display.V1.FormattedValue',
      'scheduledend': 'scheduledend@OData.Community.Display.V1.FormattedValue'
    };
   }

  ngOnInit() {
    const parentXrm = this.xrmService.getParentXrm();
    if (parentXrm !== null) {
      this.parentEntityId = 'Gor Xrm Object ';
       // this.getXrmObject();
    } else {
      this.parentEntityId = 'No Xrm Entity found ';
    }
  }

  showCountValue(count) {
    console.log(count);
  }

  /*getXrmObject() {
    if (('parent' in window) && 'Xrm' in window.parent && this.xrm == null) {
      this.message = ' parent and xrm found here ';
      this.xrm = window.parent['Xrm'];
      this.xrmService.setXrmApi(this.xrm);
    }

    this.leadStatus.forEach(element => {
      const thiz = this;
      this.xrmService.getEntityData(element, '', '', '').then(function success(data) {
        thiz.result[element] = data.entities;
      }, function error(data) {
         console.log(error);
      });
    });
}*/
}
