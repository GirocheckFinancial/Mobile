Ext.define('GirocheckMobile.view.main.TxListItem', {
    extend: 'Ext.dataview.component.ListItem',
    xtype: 'txListItem',
    requires: [
        'Ext.Img'
    ],
    config: {
        layout: {
            type: 'vbox'
        },
        name: {
            tpl: new Ext.XTemplate( [
                '<tpl if="emptyLabel">',
                '<h1 class="emptyItem" style="margin:10px!important">{name}</h1>'
            ].join(''))
        }
    },

    initialize: function () {
        var me = this;
        me.callParent(arguments);

        me.add(me.getName());
    },

    applyName: function (config) { 
        return Ext.factory(config, 'Ext.Component', this.getName());
    },

    updateName: function (newName) { 
        if (newName) {
            this.insert(0, newName);
        }
    },
    updateRecord: function (record) {
        if (!record) {
            return;
        } 
        // this.getName().setRecord(record);
        //      this.getName().apply(record);
       // this.getName().setHtml(record.get('name'));
        //  this.callParent(arguments);

    }
});