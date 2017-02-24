Ext.define('GirocheckMobile.component.BaseButton', {
    extend: 'Ext.Button',
    xtype: 'basebutton',
    config: { 
         cls: 'mobileapp-button', 
        // iconMask: true,
        iconAlign: 'center',
        // iconCls: 'pictos pictos-check2', // 'stats-bars',
        height: 52,
        listeners: {
            tap: function(me, event, eOpts) {
                var me = this,
                        now = Date.now();
                // Keep the user from multiple clicks
                if (now < me.lastTapTimestamp + 1500) {
                    me.lastTapTimestamp = now;
                    return;
                }
                me.lastTapTimestamp = now;
                me.fireEvent('lockedtap', me, event, eOpts);
            }
        }
    },
    initialize: function() {
        this.callParent();
        //Sencha Touch Issue is not overriding IconCls
        //this.setIconCls('right-arrow2');
    }
});