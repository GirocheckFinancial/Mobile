Ext.define( 'GirocheckMobile.store.AbstractBaseStore', {
    extend: 'GirocheckMobile.store.BaseStore',
    config: {
        pageSize:20,
        buffered: true,
        clearOnPageLoad: false,
        searchParams:null,
        autoLoad: false,
      // proxy: {
      //     url:'jornada/list' //WS.jornada.list
      //  },
        reader: {
                totalProperty: 'totalPages'
            }
    },
    removeAll: function(){
        var me = this;
        me.setLoadingMask( true );
        me.setExtraParams({});
        me.currentPage = 1;
        me.callParent( arguments );
    },
    // onBeforeLoad: function( store, operation, eOpts ){
    //     var me = this,
    //     params = operation.getParams();

    //     // if(TruckerBK.Utils.isObjectEmpty(params)){
    //     //     var sParams = me.getSearchParams();
  
    //     //      for ( var key in sParams )
    //     //          params[key] = sParams[key];

    //     // }else{
    //         me.setSearchParams(params);
    //     // }
        
    //     params['firstResult'] = ( operation.getPage() - 1 ) * operation.getLimit();
    //     params['maxResult'] = operation.getLimit();

    //     operation.setParams( params );

    //     me.callParent( arguments );
    //     me.setLoadingMask( false );
    // },
    onLoad: function( me, records, successful, operation, eOpts ){
        var me = this;

        me.setExtraParams( { } );

        me.callParent( arguments );
    }
} );