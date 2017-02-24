/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('GirocheckMobile.utils.Request', {
    extend: 'Ext.data.Connection',
    alternateClassName: 'Request',
    singleton: true,
    autoAbort: false,
    constructor: function(config) {
        var me = this;
        me.callParent(arguments);
        me.on(Ext.apply(me.submitEvents, {scope: me}));
    },
    submitEvents: {
        beforerequest: "onBeforerequest",
        requestcomplete: "onRequestcomplete",
        requestexception: "onRequestexception"
    },
    load: function(config) {
        var me = this;
        var obj = {
            // headers: {
            //    'TOKEN':  Ext.getStore('localStore').getValue('token')// TruckerBK.Global.getToken()
            // },
            method: config.method || 'GET',//'POST',
            url: config.url,
            params: config.params,
            jsonData: config.jsonData,
            callback: config.callback,
            success: config.success,
            failure: config.failure,
            scope: config.scope,
            loadingMask: config.loadingMask || false,
            loadingText: config.loadingText,
            processResponse: config.processResponse || false
        };
        
        // if(config.params){
        //     obj['headers']['Content-Type'] = 'application/x-www-form-urlencoded';
        // }else{
        //     obj['headers']['Content-Type']  = 'application/json; charset=utf-8'; 
        // }
        
        me.request(obj);
    },

    onBeforerequest: function(conn, options, eOpts) {
        
        if (options.url.indexOf('http') !== 0) {
            options.url = WS.HOST + WS.VERSION + '/' +  options.url;
        }

        if (options.loadingMask) {
            Loading.start({showloading: 1});
        }
    },
    onRequestcomplete: function(conn, response, options, eOpts) { 
        // if (options.loadingMask) {
        //     Loading.stop();
        // }
        // TruckerBK.Utils.processResponse(response.responseText, response);
    },
    onRequestexception: function(conn, response, options, eOpts) {
        alert('error ' + response);
     //   Ext.toast(i18n.msg.notify_error ,4000); 
    }
});