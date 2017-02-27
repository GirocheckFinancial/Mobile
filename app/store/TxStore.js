Ext.define('GirocheckMobile.store.TxStore', {
    extend: 'Ext.data.Store',
    alias: 'store.txstore',
    autoLoad: true,

    //From Base Store
    pageSize: 4,// 20,
    loadingMask: true,
    loadingMaskIgnoreURLs: null,
    loadingText: null,
    useStartUrl: false,
    model: null,

    //From abstract store
    buffered: true,
    clearOnPageLoad: false,
    searchParams: null,
    autoLoad: true,

    requires: [
        'GirocheckMobile.model.TxModel'
    ],
    config: {
        storeId: 'txstore',
        model: 'GirocheckMobile.model.TxModel',
        proxy: {
            timeout: 15000,
            url: 'http://demo2769655.mockable.io/test2',
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'items',
                totalProperty: 'total'
            }
        }
    },
    load: function (store) {
        var me = this; 
        me.getProxy().setExtraParams(Global.getDateRange());
        me.callParent(arguments);
    } 
});
