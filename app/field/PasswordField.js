Ext.define('GirocheckMobile.field.PasswordField', {
    extend: 'GirocheckMobile.field.BaseTextField',
    xtype: 'passwordField',
    config: {
        placeHolder:i18n.passwordField.password,
        inputType: 'password',
        minLength: 8,
        regExp: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
        hint: i18n.passwordField.passwordHint,
    },
    validate: function () {
         var me = this,
            config = me.config,
            textfield = me.down('textfield'),
            val = textfield.getValue();

        if (me.up('#newPasswordFieldset') && !me.up('#newPasswordFieldset').el.isVisible()) {
            return true;
        }

        if (config.equalToField) { //Just for password fields
            if (me.up().down('#' + config.equalToField).getValue() != val) {
                me.showTip(i18n.passwordField.passwordRegexHint);
                return false;
            }
        }

        return this.callParent(arguments);
    }
});