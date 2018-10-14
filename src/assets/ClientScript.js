var sdk;
var Xrm;
if('parent' in window && 'Xrm' in window.parent) {
    var Xrm = window.parent['Xrm'] || {};
    sdk = Xrm.sdk || {} ;
}

(function() {

    var currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName;
    var message = currentUserName + ' running your java script code ';

    this.formOnLoad = function(executionContext) {
        var formContext = executionContext.getFormContext();
        formContext.ui.setFormNotification(message,"INFO",)
    }

    //onAttributeChange

    this.formOnSave = function() {
        Xrm.Navigation.openAlertDialog({text:'Hello.. am done with Save '});
    }


})(sdk)