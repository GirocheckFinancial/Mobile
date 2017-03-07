Ext.define('GirocheckMobile.model.TxModel', {
    extend:'Ext.data.Model',
    config: {
        fields: [
            {name: 'date', type: 'string'},
            {name: 'amount', type: 'string'},
            {name: 'description', type: 'string'}
        ] 
    } 
});