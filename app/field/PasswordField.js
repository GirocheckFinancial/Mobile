Ext.define('GirocheckMobile.field.PasswordField', {
    extend: 'GirocheckMobile.field.BaseTextField',
    xtype: 'passwordField',
    config: {
        placeHolder: 'Password',
        inputType: 'password',
        minLength: 8,
        regExp: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/, 
        hint: 'Password must to contain at least one <br>UpperCase letter and one number <br> And be at least 8 characters long'
    },
    validate:function(){ 
        var me = this;
        if(me.up('#newPasswordFieldset') && !me.up('#newPasswordFieldset').el.isVisible()){
            return true;
        }

        return this.callParent(arguments);
    }
});