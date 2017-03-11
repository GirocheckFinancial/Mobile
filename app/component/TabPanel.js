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
        } 
    } 
} );
