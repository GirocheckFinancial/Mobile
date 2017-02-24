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
            flex: 1,
            height: '22%',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'center'
            },
            style: {
                'background-color': '#024d86',
                color: 'white'
            },
            items: [
                {
                    layout: {
                        type: 'hbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                        {
                            html: '$',
                            style: {
                                'font-size':'23px',
                                'font-weight':'normal',
                                'margin-right':'1px'
                            }
                        },
                        {
                            html: '9',
                            style: {
                                'font-size':'32px',
                                'margin-top': '10px',
                                'margin-right':'2px'
                            }
                        },
                        {
                            html: '38',
                            style: {
                                'font-size':'23px',
                                'margin-top': '0px',
                                'font-weight':'normal'
                            }
                        }
                    ]
                },
                {
                    html: 'Available Balance',
                    style: {
                        'margin-top': '10px',
                        'font-size':'13px' 
                    }
                }
            ]
        }
        // ,{
        //    xtype: 'mainTabPanel'
        // }
    ]
});
