Ext.define('GirocheckMobile.view.main.MainNavView', {
    extend: 'Ext.navigation.View',
    xtype: 'mainNavView',
    id: 'mainNavView',
    requires: [
        'GirocheckMobile.view.main.pages.Home',
        'GirocheckMobile.view.main.pages.Profile',
        'GirocheckMobile.controller.MainController',
        'GirocheckMobile.view.main.pages.ReplaceCard',
        'GirocheckMobile.view.main.pages.FAQ',
        'GirocheckMobile.view.main.pages.Contact',
        'GirocheckMobile.view.auth.TermsAndConditions'
    ],
    controller: 'mainController',
    initialize: function () {
        var me = this;
        me.callParent(arguments);
        me.toolBar = me.down('toolbar');

        Ext.Viewport.setMenu(Static.createGetMainMenu(), {
            side: 'left',
            reveal: true
        });

        me.down('#searchButton').addListener({
            tap: { fn: me.showPeriodPicker, scope: me }
        });
    },
    config: {
        fullscreen: true,
        items: [
            { xtype: 'home' }
        ],
        navigationBar: {
            height: '40px',
            style: {
                'background-color': '#023159'
            },
            items: [
                {
                    id: 'leftMenu',
                    xtype: 'button',
                    iconCls: 'list',
                    ui: 'plain',
                    cls: 'bar-bottom',
                    iconCls: 'pictos pictos-list',
                    style: {
                        'background-color': '#023159'
                    },
                    handler: function () {
                        if (Ext.Viewport.getMenus().left.isHidden()) {
                            Ext.Viewport.showMenu('left');
                        }
                        else {
                            Ext.Viewport.hideMenu('left');
                        }
                    }
                },
                {
                    xtype: 'button',
                    id: 'searchButton',
                    cls: 'bar-bottom',
                    iconCls: 'pictos pictos-search',
                    align: 'right',
                    style: {
                        'background-color': '#023159',
                        'margin-right': '10px'
                    }
                },
                {
                    xtype: 'button',
                    id: 'more-options',
                    cls: 'bar-button-more',
                  //  iconCls: 'fa fa-ellipsis-v',
                    align: 'right',
                    width: '30px',
                    style: {
                        'background-color': '#078241',
                        'padding': '0 0 0 10px',
                        'height': '100%',
                        'border-radius': '0'
                    }
                }
            ]
        }
    }, 
    showPeriodPicker: function () {
        var me = this;

        if (me.picker == null) {
            me.picker = Ext.create('GirocheckMobile.component.PeriodPicker');

            me.picker.down('#periodPickerAccept').addListener({
                tap: {
                    fn: function (cmp, event, eOpts) {
                        var values = cmp.up().up().getValues();

                        if (values) {
                            values.page = 1;
                            values.start = 0;
                            this.down('txList').getStore().load();  //{ params: values }
                            Ext.getCmp('dateRangeLabel').setHtml( Util.getDateRangeLabel());
                    }

                    }, scope: me
                }
            });
        }

        Ext.Viewport.add(me.picker).show();
    }
});
