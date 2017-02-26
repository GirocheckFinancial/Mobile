Ext.define('GirocheckMobile.component.BaseListItem', {
    extend: 'Ext.dataview.component.ListItem', 
    config: {
        layout: {
            type: 'hbox',
            pack: 'start',
            align: 'center'
        },
        info: {
            xtype: 'component',
            itemId: 'info',
            flex: 1
        },
        itemType: null, 
        control: { 
        }
    },
     initialize: function() { 
        var me = this;
        me.callParent(arguments);

        me.add(me.getInfo());
    },
    updateRecord: function(newValue) { 
    } 
});