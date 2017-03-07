Ext.define('GirocheckMobile.model.BaseModel', {
    extend: 'Ext.data.Model',
    config: {
        idProperty: 'idModel',
        fields: [
            'idModel',
            {name: 'id', type: 'int'},
            {name: 'status', type: 'String'},
            {name: 'statusMessage', type: 'String'}  
        ]
       
    }
});

