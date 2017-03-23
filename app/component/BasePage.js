Ext.define('GirocheckMobile.component.BasePage', {
    extend: 'Ext.Container',
    xtype: 'basepage',
    cls: 'basepage',
    config: {
        padding: '10px 10px 0 10px',
        layout: 'vbox',
        scrollable: true
    },
    destroy: function () {
        var me = this;
        me.titleOrg = null;
        me.callParent(arguments);
    },
    validate: function () {
        var me = this,
            valid = true;

        me.query('baseTextField').forEach(function (field) {
            valid = valid && field.validate();
        });
        return valid;
    },
    getValues: function () {
        var me = this,
            obj = {};
        me.query('textfield').forEach(function (field) {
            if (field.isVisible()) {
                obj[field.getName()] = field.getValue();
            }
        });

        return obj;
    }
});