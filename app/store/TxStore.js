Ext.define('GirocheckMobile.store.TxStore', {
    extend: 'Ext.data.Store',
    alias: 'store.txstore',
    autoLoad: true,

    //From Base Store
    pageSize: 10,// 20,
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
    listeners: {
        // beforeload: function (store, operation, eOpts) {
        //     this.onBeforeLoad(store, operation, eOpts);
        // },
        load: function (me, records, successful, operation, eOpts) {
            this.onLoad(me, records, successful, operation, eOpts);
        }
    },
    config: {
        storeId: 'txstore',
        model: 'GirocheckMobile.model.TxModel',
        proxy: {
            timeout: 15000,
          //   url:  'http://demo2769655.mockable.io/test2',
           url: Global.getUrlPrefix() + 'tx/history', //'http://demo2769655.mockable.io/test2',
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
        var params = Global.geTxParams(); 
        me.getProxy().setExtraParams(params);
        me.callParent(arguments);
    },
    onLoad: function (me, records, successful, operation, eOpts) {
        // var responseRaw = operation.getResponse().responseText;
        // var responseJson = Ext.JSON.decode(responseRaw);
//   debugger;
        // var resp = operation;
        // if (resp) {
        //     if (resp._response) {
        //         resp = resp._response;
        //     }
        //     resp.code = responseJson.status;

        //     resp.success = (responseJson.status === 100);
        //     resp.data = responseJson.data;
        // } 
        // me.callParent(arguments);
    }
});
