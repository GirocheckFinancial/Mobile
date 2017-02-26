/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define( 'GirocheckMobile.store.BaseStore', {
    extend: 'Ext.data.Store',
    config: {
        storeId: 'baseStore',
        pageSize: 20,
        loadingMask: true,
        loadingMaskIgnoreURLs: null,
        loadingText: null,
        useStartUrl: false,
        model: null,
        extraParams: {
        },
        proxy: {
            timeout: 70000,
            url: '',
            actionMethods: {
                read: 'GET'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
//                'Content-Type': 'application/json; charset=utf-8'
            },
            type: 'ajax',
            reader: {
                type: 'json',
                rootProperty: 'data',
                messageProperty: 'status'
            }
        },
        listeners: {
            beforeload: function( store, operation, eOpts ){
                this.onBeforeLoad( store, operation, eOpts );
            },
            load: function( me, records, successful, operation, eOpts ){
                this.onLoad( me, records, successful, operation, eOpts );
            }
        }
    },
    loadMask: function( url ){
        var me = this;
        if ( me.getLoadingMaskIgnoreURLs() && url && me.getLoadingMaskIgnoreURLs().indexOf( url ) !== -1 ) {
            return false;
        }
        return this.getLoadingMask();
    },
    // onBeforeLoad: function( store, operation, eOpts ){
    //     var me = this,
    //             extraParams = me.getExtraParams(),
    //             params = operation.getParams();
        
    //     for ( var key in extraParams )
    //         params[key] = extraParams[key];
   
    //     if ( !operation.getUrl() ) {
    //         operation.setUrl( store.getProxy().getUrl() );
    //     }
        
    //     operation.config.loadingMask = typeof operation.config.loadingMask !== 'undefined' ? operation.config.loadingMask : this.getLoadingMask();
    //     if ( operation.config.loadingMask && this.loadMask( operation.getUrl() ) ) {
    //         Loading.start( { showloading: 1 } );
    //     }

    //     operation.setUrl( this.getUseStartUrl() ? operation.getUrl() : WS.HOST + WS.VERSION + '/' + operation.getUrl() );


    //     var headers = store.getProxy().getHeaders() || { };
    //     headers['TOKEN'] = Ext.getStore('localStore').getValue('token');
    //  //   if ( operation.config.isJson ) {
    //         operation.setParams( Ext.JSON.encode( params ) );
    //         headers['Content-Type'] = 'application/json; charset=utf-8';
    //  //   } else {
    //  //       operation.setParams( params );
    //  //       headers['Content-Type'] = 'application/x-www-form-urlencoded';
    //  //   }

    //     store.getProxy().setHeaders( headers );
    // },
    onLoad: function( me, records, successful, operation, eOpts ){
 
        if ( operation.config.loadingMask ) {
            Loading.stop();
        }
        if ( !successful ) {
            if(operation.error && operation.error.status == 400){
                Ext.toast(i18n.msg.verify_format,3000);
            }else{
                Ext.Msg.alert(
                'Error',
                 i18n.msg.notify_error
                );
            }
            
            operation._response = { };
            operation._response.success = false;
   
            return;
        }

        Util.processResponse( operation.getResponse().responseText, operation );
    }
} );

