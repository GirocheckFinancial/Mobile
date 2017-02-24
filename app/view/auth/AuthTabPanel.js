Ext.define('GirocheckMobile.view.auth.AuthTabPanel', {
    extend: 'GirocheckMobile.component.NavigationView',// extend: 'GirocheckMobile.component.TabPanel',
    xtype: 'authTabPanel',
    requires: [
        'GirocheckMobile.view.auth.Login',
        // 'TruckerBK.view.auth.RegisterView'
    ],
    initialize: function () {
        // hide nestedlist toolbar
        this.getToolbar().hide();
    },
    config: {
        fullscreen: true,
        navigationBar: false,
        items: [{
            xtype: 'login',
            title: 'Login',
          //  iconCls: 'fa fa-sign-in'
        }
            // ,{ 
            //     html:'register here',
            //     title: 'Register',
            //     iconCls: 'pictos pictos-compose'
            // }
        ]
    },
    initialize: function () {
        var me = this;

        this.callParent(arguments);
    },
    onLockedTap: function (tab, event, indexTab) {
        var me = this;
        /*
                if (indexTab !== 2) {
                    me.down('baseNavigationView').reset();
                }
                */
    },
    onDeactivate: function () {
        /*
        var me = this,
                subscribeTab = me.down('#subscribeTab');

        if (subscribeTab) {
            if (Ext.getStore('localStore').getValue('showSubscribe') === false) {
                me.remove(subscribeTab);
            }
        }
        */
    }
});
