Ext.define('GirocheckMobile.field.CardField', {
    extend: 'GirocheckMobile.field.BaseTextField',
    xtype: 'cardField',
    config: {
        placeHolder: 'Password',
        inputType: 'password',
        regExp: /^[0-9]{16}$/,
        regExtErrorMsg: 'Credit Card number must to contain 16 digits',
        placeHolder: 'Card Number',
        hint: 'Please enter your new VoltCash Card number'
    } 
});