Ext.define('GirocheckMobile.model.LocalModel', {
    extend: 'Ext.data.Model',
    requires: ['Ext.data.identifier.Uuid'],
    alternateClassName: 'GirocheckMobile.model.LocalModel',
    config: {
        idProperty: 'idModel',
        identifier: 'uuid',
        fields: [
            {name: 'id', type: 'int'},
            { name: 'deviceId', type: 'string', defaultValue:'hey default' } 
        ]
    }
});

