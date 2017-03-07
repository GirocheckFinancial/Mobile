/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('GirocheckMobile.view.main.Main', {
    extend: 'Ext.Container',
    requires: [
        'GirocheckMobile.view.auth.AuthTabPanel',
        'GirocheckMobile.view.main.MainNavView',
        'GirocheckMobile.store.TxStore' 
    ],
    xtype: 'base',
    id: 'main', 
    config: {
        xtype: 'container',
        itemId: 'baseContainer',
        layout: {
            type: 'card',
            animation: {
                type: 'fade',
                duration: 150,
                easing: 'ease-out'
            }
        },
        items: [
            {
                xtype: 'authTabPanel'
            },
            {
                xtype: 'mainNavView'
            }

        ]
    }
});
