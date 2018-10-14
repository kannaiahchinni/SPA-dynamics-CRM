import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class XrmIntegrationService {

  private static xrmParent: any = null;
  private static xrmParentChecked = false;
  private xrmApi:any = null;
  

  constructor() {
    //
  }



  checkXrmObject() {
    if (('parent' in window) && 'Xrm' in window.parent && this.xrmApi == null) {
      this.xrmApi = window.parent['Xrm'];
    }
  }

  getParentXrm(): any {
     if ( !XrmIntegrationService.xrmParentChecked && XrmIntegrationService.xrmParent === null ) {
       if (('parent' in window ) && 'Xrm' in window.parent) {
          XrmIntegrationService.xrmParent = window.parent['Xrm'];
       }
       XrmIntegrationService.xrmParentChecked = true;
     }
     return XrmIntegrationService.xrmParent;
  }


  isGuideEmpty(value) {
    return value == null || value === undefined ||
      value === 'undefined' || value.length === 0 ||
      value ===  '00000000-0000-0000-0000-000000000000';
  }

  getLeads(type) {
      let filterQuery = '';
  }


}
