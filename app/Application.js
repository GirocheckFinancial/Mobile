/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('GirocheckMobile.Application', {
    extend: 'Ext.app.Application',

    name: 'VoltCash',

    requires: [
        'GirocheckMobile.i18n.I18N',
        'GirocheckMobile.utils.Request',
        'GirocheckMobile.utils.UUIDGenerator',
        'GirocheckMobile.util.Utils',
        'GirocheckMobile.utils.Global',
        'GirocheckMobile.utils.Static'
    ],

    stores: [
        // TODO: add global / shared stores here 
    ],

    launch: function () {  
    }, 
    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
