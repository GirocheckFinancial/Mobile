Ext.define('GirocheckMobile.store.TxStore', {
    extend: 'Ext.data.Store',
    alias: 'store.txstore',
    autoLoad: true,

    //From Base Store
    pageSize:40,
    loadingMask: true,
    loadingMaskIgnoreURLs: null,
    loadingText: null,
    useStartUrl: false,
    model: null,

    //From abstract store
    buffered: true,
    clearOnPageLoad: false,
    searchParams: null,
    autoLoad: false,

    requires: [
        'GirocheckMobile.model.TxModel'
    ], 
    config: {
        storeId: 'txstore',
        model: 'GirocheckMobile.model.TxModel',
        proxy: {
            timeout: 15000, 
            url:null, //'http://demo2769655.mockable.io/test2',
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'items',
                totalProperty: 'total'
            }
        }
    },
    load: function () {
        var me = this,
        proxy =  me.getProxy(),
        params = Global.geTxParams();

        proxy.setExtraParams(params);
        proxy.setUrl(Global.getUrlPrefix() + 'tx/history');
          
        var headers = proxy.getHeaders() || {};
        headers['TOKEN'] = Global.getToken();
        headers['LANG'] = Global.getLang();
        proxy.setHeaders(headers);

        me.callParent(arguments);
    } 
});
