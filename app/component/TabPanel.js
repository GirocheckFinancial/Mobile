Ext.define( 'GirocheckMobile.component.TabPanel', {
    extend: 'Ext.TabPanel',
    alternateClassName: 'GirocheckMobile.TabPanel',
    xtype: 'baseTabPanel',
    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        tabBar: {
            defaults: { flex: '1' },
            layout: {
                align: 'stretch'
            }
        },
        layout: {
            animation: {
                type: 'fade',
                duration: 100,
                easing: 'ease-out'
            }
        },
        control: {
//            'tabbar > tab': {
//                tap: 'onTap'
//            }
        },
        listeners: {
            activeitemchange: function( container, value, oldValue, opts ){ 
            }
        }
    },
    onTap: function( tab, event, eOpts ){
        // var me = this,
        //         tabbar = tab.getParent(), 
        //         indexTab = tabbar.items.findIndex( 'id', tab.id ),
        //         now = Date.now();
        
        // if ( now < me.lastTapTimestamp + 1500 ) {
        //     me.lastTapTimestamp = now;
        //     return false;
        // }
        // me.lastTapTimestamp = now;
 
        // tab.getParent().fireEvent( 'lockedtap', tab, event, indexTab );
        
    }
} );
