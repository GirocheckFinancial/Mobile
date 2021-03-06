Ext.define('GirocheckMobile.view.auth.AuthTabPanel', {
    extend: 'Ext.navigation.View',
    xtype: 'authTabPanel',
    id: 'authTabPanel',
    requires: [
        'GirocheckMobile.view.auth.Login',
        'GirocheckMobile.view.auth.Register',
        'GirocheckMobile.controller.AuthController'
    ],
    controller: 'authController',
    config: {
        defaultBackButtonText: i18n.navigationView.back,
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
            defaultBackButtonText: '',
            style: {
                'background-color': '#201747',
                'color': 'white',
                display: 'none'
            },
            //backButton:{hidden:true, align:'left'},
            listeners: {
                back: 'onBackToLogin'
            }
        },
        items: [{
           //   xtype: 'register'
            xtype: 'login'
            //  xtype:'forgotPassword'
        }
        ]
    },
    initialize: function () {
        var me = this;

        this.callParent(arguments);
    },
    toggleToolBar: function (show) {
        this.getNavigationBar().setStyle({ display: (show ? 'block' : 'none') })
    }
});
