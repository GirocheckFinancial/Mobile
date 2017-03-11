Ext.define('GirocheckMobile.store.LocalStore', {
    extend: 'Ext.data.Store',
    alias: 'store.localStore',
    requires: [
        'GirocheckMobile.model.LocalModel',
        'GirocheckMobile.model.BaseModel',
        'Ext.data.proxy.LocalStorage'
    ],
    config: {
        autoLoaded: true,
        autoLoad: true,
        autoSave: true,
        autoSync:true,
        model: 'GirocheckMobile.model.LocalModel',
        storeId: 'localStore',
        proxy: {
            type: 'localstorage',
            id: 'localStore'
        }
    }, 
    getValue: function (attr) {
        var me = this;
        if (me.getCount() > 0) {
            return me.getAt(0).get(attr);
        } else {
            return null;
        }
    },
    getValues: function () {
        var me = this;
        if (me.getCount() > 0) {
            return me.getAt(0);
        } else {
            return null;
        }
    }
});
