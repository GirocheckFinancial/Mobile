Ext.define('GirocheckMobile.component.BaseFormPanel', {
    extend: 'Ext.Container',
    xtype: 'baseformpanel',
    requires: [
        'Ext.form.Panel',
        'Ext.Label',
        'Ext.Img',
        'Ext.Toast'
    ],
    config: {
        layout: 'vbox',
        disabled: true,
        cls: 'mobileapp-form-panel',
        readOnly: false,
        form: {
            xtype: 'formpanel',
            scrollable: null,
            flex: 1
        },
        listeners: {
            activate: function() {
                var me = this;
                Ext.defer(function() {
                    me.setDisabled(false);
                }, 1000);
            }
        } 
    },
    updateReadOnly: function(readOnly) {
        var me = this,
                fields = me.query('formpanel fieldset textfield');

        Ext.each(fields, function(field) {
            field.reset();
            if (!field.getReadOnly())
                field.setReadOnly(readOnly);
        });
    },
    applyForm: function(config) {
        return Ext.factory(config, 'Ext.form.Panel', this.getForm());
    },
    updateForm: function(newValue, oldValue) {
        var me = this;

        if (oldValue) {
            me.remove(oldValue);
        }

        if (newValue) {
            me.insert(0, newValue);
            me.updateReadOnly(me.getReadOnly());
        }
    },
    clearErrors: function() {
        var me = this;
        Ext.each(me.down('formpanel').getFieldsArray(), function(field) {

            field.removeCls('invalidField');
        }, this);
    },
    validate: function() {
        var me = this,
                valid = true;

        Ext.each(me.down('formpanel').getFieldsArray(), function(field) {
           if(valid && typeof field.validate === 'function' && !field.validate()) {
                valid = false; 
           }
        }, this);

        if (!valid)
         //   TruckerBK.Utils.vibrate();
        return valid;
    }
});