/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('GirocheckMobile.field.EmailField', {
    extend: 'GirocheckMobile.field.BaseTextField',
    xtype: 'emailField', 
    config: {
        //regExp: new RegExp('/^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,4})$/'),
        regExp: /\S+@\S+\.\S+/,
        maxLength:50,
        component: {
            type: 'email'
        }
    },
    validate: function(options) {
        var me = this,
                options = options || {},
                valid = options.parentValid !== undefined ? options.parentValid : true;


        if (!me.getReadOnly() && valid && this.getValue()) {
            valid = this.getRegExp().test(this.getValue());
          }

        if(!valid){
            Ext.toast(i18n.validation.invalid_email ,1000);
            return false;
        }

        options.parentValid = valid;
        return me.callParent([options]);
    }
});

