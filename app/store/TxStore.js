Ext.define('GirocheckMobile.store.TxStore', {
    extend: 'GirocheckMobile.store.AbstractBaseStore',
    alias: 'store.txstore',
    autoLoad: true,
    requires: [
        'GirocheckMobile.model.TxModel'
    ],
    config: {
        storeId: 'txstore',
        model: 'GirocheckMobile.model.TxModel',
        proxy: {
            url: 'http://demo2769655.mockable.io/test2',
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'items',
                totalProperty: 'total'
            }
        }
    }
});
