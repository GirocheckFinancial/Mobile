/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('GirocheckMobile.view.main.pages.Home', {
    extend: 'Ext.Container',
    xtype: 'home',
    layout: 'vbox',
    fullscreen: true,
    requires: [
        'GirocheckMobile.store.TxStore',
        'GirocheckMobile.view.main.pages.TxList' 
    ], 
    items: [
        {
            layout: 'hbox',
            height: '25%',
            style: {
                'background-color': '#024d86',
                color: 'white'
            },
            items: [
                {
                    width: '30px'
                },
                {
                    flex: 1,
                    layout: {
                        type: 'vbox',
                        pack: 'center',
                        align: 'center'
                    },
                    items: [
                        {
                            layout: {
                                type: 'hbox',
                                pack: 'center',
                                align: 'center'
                            },
                            style: {
                                'margin-top': '24px'
                            },
                            items: [
                                {
                                    html: '$',
                                    style: {
                                        'font-size': '25px',
                                        'font-weight': 'normal',
                                        'margin-right': '1px'
                                    }
                                },
                                {
                                   id: 'balanceAmount',
                                    html: '0',
                                    style: {
                                        'font-size': '34px',
                                        'margin-top': '10px',
                                        'margin-right': '2px'
                                    }
                                },
                                {
                                    id: 'balanceCents',
                                    html: '00',
                                    style: {
                                        'font-size': '25px',
                                        'margin-top': '0px',
                                        'font-weight': 'normal'
                                    }
                                }
                            ]
                        },
                        {
                            html: i18n.home.availableBalance,
                            style: {
                                'margin-top': '10px',
                                'font-size': '15px'
                            }
                        }
                    ]
                },
                {
                    width: '30px',
                    cls: 'greenGradient'
                }
            ]
        },
        {
            html: i18n.home.completedTransactions,
            style: {
                margin: '15px 15px 0px 15px',
                color: 'grey', 
                'font-size': '15px',
                'padding-bottom': '7px'
            }
        }, 
        {
            id:'dateRangeLabel',
            html:'',
            style: {
                margin: '2px 15px 0px 15px',
                color: 'gray',
                'border-bottom': '1px solid #f0f0f0',
                'font-size': '11px',
                'padding-bottom': '10px'
            }
        }, 
        {
            scrollable: true,
            flex: 1,
            height: '100%',
            items: [{
                itemId: 'txList',
                xtype: 'txList',
                store: Ext.create('GirocheckMobile.store.TxStore', {}),
                style: {
                    margin: '0px 6px 0px 6px'
                }
            }]
        }
    ],
    listeners:{
        activate:function(){
            var me = this;
            me.down('#dateRangeLabel').setHtml( Util.getDateRangeLabel() );
        }
    }
});
