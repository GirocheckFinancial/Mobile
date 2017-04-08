Ext.define('GirocheckMobile.field.CardField', {
    extend: 'GirocheckMobile.field.BaseTextField',
    xtype: 'cardField',
    config: {
        inputType: 'password',
        regExp: /^[0-9]{16}$/,
        regExtErrorMsg: i18n.cardField.cardRegexHint,
        placeHolder: i18n.cardField.card,
        hint: i18n.cardField.cardHint
    }
});