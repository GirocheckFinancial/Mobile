Ext.define('GirocheckMobile.view.main.MainNavView', {
    extend: 'GirocheckMobile.component.NavigationView',
    xtype: 'mainNavView',
    requires: [
        'GirocheckMobile.component.NavigationView',
        'GirocheckMobile.view.main.Home'
    ],
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
            height:'40px',
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
                    id: 'rightButton',
                    cls: 'bar-bottom',
                    iconCls: 'pictos pictos-search',
                    align: 'right',
                    style: {
                        'background-color': '#023159',
                        'margin-right':'10px'
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
                        'height':'100%', 
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
        },

        // control: {
        //     'titlebar': {
        //         back: 'onBack'
        //     }
        // }  
    },
    // initialize: function(){
    //     var me = this;
    //     me.callParent( arguments );
    //     me.toolBar = me.down( 'toolbar' );

    //     // Ext.Viewport.setMenu(TruckerBK.Static.createGetMainMenu(),{
    //     //     side: 'left',
    //     //     reveal: true
    //     // }); 
    // },
    // onBack: function( nav, e0pts ){
    // },
    // showMenuIcon:function(){ 
    //     this.callParent(arguments);  
    // },
    // destroy: function(){
    //     var me = this;
    //     me.toolBar = null;
    //     me.powaPinStatus = null;
    //     me.callParent( arguments );
    // },
    // setAnimationDirection: function( direction ){
    //     var me = this,
    //             layout = me.getLayout(),
    //             animation = layout.getAnimation();

    //     if ( animation ) {
    //         animation.setDirection( direction );
    //     }
    // }
});
