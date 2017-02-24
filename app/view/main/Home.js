/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('GirocheckMobile.view.main.Home', {
    extend: 'Ext.Container',
    xtype: 'home',
    requires: [
    ],
    items: [
        {
            html: 'home',
            flex:1,
            height:'25%',
            style:{
                'background-color':'#024d86'
            }
        }
        // ,{
        //    xtype: 'mainTabPanel'
        // }
    ]
});
