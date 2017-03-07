Ext.define('GirocheckMobile.view.main.MainNavView', {
    extend: 'GirocheckMobile.component.NavigationView',
    xtype: 'mainNavView',
    id: 'mainNavView',
    requires: [
        'GirocheckMobile.component.NavigationView',
        'GirocheckMobile.view.main.pages.Home'
    ],
    initialize: function () {
        this.callParent();

        var me = this;

        me.down('#searchButton').addListener({
            tap: { fn: me.showPeriodPicker, scope: me }
        });
    },
    config: {
        defaultBackButtonText: '',
        titleLeft: true,
        layout: {
            type: 'card',
            animation: {
                duration: 150,
                easing: 'ease-out',
                type: 'slide',
                direction: 'left'
            }
        },
        items: [
            { xtype: 'home' }
        ],

        autoDestroy: false,

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
                    },
                    handler: function () {
                        var me = this;
                        // if( me.getIconCls() == 'stats-bars'){
                        //     TruckerBK.APP.fireEvent('showGraph');
                        // }
                    }
                },
                {
                    xtype: 'button',
                    id: 'more-options',
                    cls: 'bar-button-more',
                    iconCls: 'fa fa-ellipsis-v',
                    align: 'right',
                    width: '30px',
                    style: {
                        //  'background-color': '#023159',
                        'background-color': '#078241',
                        'padding': '0 0 0 10px',
                        'height': '100%',
                        'border-radius': '0'
                    },
                    handler: function () {
                        var me = this;
                        // if( me.getIconCls() == 'stats-bars'){
                        //     TruckerBK.APP.fireEvent('showGraph');
                        // }
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
                        }

                    }, scope: me
                }
            });
        }

        Ext.Viewport.add(me.picker).show();
    }
});
