Ext.define('GirocheckMobile.field.CheckBoxField', {
    extend: 'Ext.field.Checkbox',
    xtype: 'checkBoxField',
    config: { 
        cls: 'base-field',
        value:false,
        listeners: {
            check: function() {
                this.setValue(true);
            },
            uncheck: function() {
                this.setValue(false);
            }
        }
    } 
});


