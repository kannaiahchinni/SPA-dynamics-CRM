import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AstService } from './ast-service.service';
import { XrmIntegrationService } from './xrm-integration.service';

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
  message: string = '';
  search = new FormControl('', );
  xrm: any = null;
  result:any = [];

  constructor(private astService: AstService, private xrmService: XrmIntegrationService) { }

  ngOnInit() {
    const parentXrm = this.xrmService.getParentXrm();
    if (parentXrm !== null) {
      this.parentEntityId = parentXrm.Page.data.entity.getId();
    } else {
      this.parentEntityId = 'No Xrm Entity found ';
    }
  }

  getXrmObject() {
    if (('parent' in window) && 'Xrm' in window.parent && this.xrm == null) {
      this.message = ' parent and xrm found here ';
      this.xrm = window.parent['Xrm'];
    }

    this.xrm.WebApi.retrieveMultipleRecords('lead', '', 50).then(
      function success(data) {
         this.result = data.entities || [] ;
        }, 
      function errorf(error) { 
        console.log(error);
       });
  }

  getASTJSON() {
    this.astService.getASTJSON(this.textAreaControl.value).subscribe(data => {
      this.output = data;
      console.log(this.output);
      this.keys = Object.keys(this.output);
      console.log(this.keys);
    }, error => {
      console.log(error);
    });
  }
}
