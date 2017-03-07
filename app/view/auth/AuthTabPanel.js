Ext.define('GirocheckMobile.view.auth.AuthTabPanel', {
    extend: 'Ext.navigation.View',// extend: 'GirocheckMobile.component.TabPanel',
    xtype: 'authTabPanel',
    requires: [
        'GirocheckMobile.view.auth.Login',
        'GirocheckMobile.view.auth.Register',
        'GirocheckMobile.controller.AuthController'
    ],
    controller: 'authController',
    // initialize: function () {
    //     // hide nestedlist toolbar
    //     this.getToolbar().hide();
    // },
    config: {
        fullscreen: true,
        title: {
            title: 'mytitle',
            style: {
                'text-align': 'left'
            }
        },
        
        navigationBar: {
            // hidden: true,
            height: '40px',
            defaultBackButtonText:'',
            style: {
                'background-color': '#023159',
                'color': 'white',
                display:'none'
            },
            //backButton:{hidden:true, align:'left'},
            listeners: {
                back: 'onBackToLogin'
            },
            items: [
                // {
                //     xtype: 'button',
                //     // cls: 'bar-bottom',
                //     align: 'left',
                //     text: 'Clear',
                //     // style: {
                //     //     'background-color': '#023159',
                //     //       'color': '#023159'
                //     // }
                // }
            ]
        },
        // navigationBar: false,
        items: [{
            // xtype: 'register'
            xtype: 'login'
        }
        ]
    },
    initialize: function () {
        var me = this;

        this.callParent(arguments);
    }
});
