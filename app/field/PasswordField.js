Ext.define('GirocheckMobile.field.PasswordField', {
    extend: 'GirocheckMobile.field.BaseTextField',
    xtype: 'passwordField',
    config: {
    	labelWidth: 180,
        component: {
            type: 'password'
        }
    }
});