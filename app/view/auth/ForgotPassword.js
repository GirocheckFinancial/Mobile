Ext.define('GirocheckMobile.view.auth.ForgotPassword', {
    extend: 'GirocheckMobile.component.BasePage',
    xtype: 'forgotPassword',
    requires: [
        'GirocheckMobile.component.BaseButton',
        'GirocheckMobile.field.CardField'
    ],
    config: {
        title: i18n.forgotPassword.title,
        padding: '10px 10px 0 10px',
        cls: 'login',
        id: 'forgotPassword',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        items: [
            {
                width: '100%',
                html: '<div style="text-align:center"><br>' + i18n.forgotPassword.header + '</div>'
            },
            {
                xtype: 'fieldset',
                margin: '5 0 0 0',
                title: '',
                defaults: { 
                    margin: '2',
                    width: '100%'
                },
                items: [
                    {
                        xtype: 'cardField',
                        fieldId: 'fpCard',
                        name: 'cardNumber' 
                    }, 
                    {
                        xtype: 'baseTextField',
                        fieldId: 'maskSSN',
                        placeHolder: i18n.forgotPassword.ssn,
                        hint:i18n.forgotPassword.ssnHint,
                        regExp: /^[0-9]{4}$/,
                        regExtErrorMsg: i18n.forgotPassword.ssnRegexHint, 
                    }]
            },
            {
                xtype: 'fieldset',
                margin: '5 0 0 0',
                title: i18n.forgotPassword.reciveBy,
                width: '100%',
                layout: 'hbox',
                defaults: {
                    xtype: 'radiofield',
                    width: '50%',
                    labelAlign: 'right'
                },
                items: [{
                    name: 'sendBy',
                    label: i18n.forgotPassword.email,
                    value: 'email',
                    id: 'sendByEmail',
                    checked: true
                }, {
                    name: 'sendBy',
                    label: i18n.forgotPassword.sms,
                    id: 'sendBySms',
                    value: 'sms'
                }]
            },
            {
                width: '100%',
                hidden: true,
                html: '<div style="text-align:center"><br><h3>' + i18n.forgotPassword.weJustSent + '</span></div>'
            },
            {
                xtype: 'fieldset',
                id: 'securityCodeFieldset',
                hidden: true,
                margin: '5 0 0 0',
                title: '',
                items: [{
                    id: 'code',
                    name: 'code',
                    placeHolder: i18n.forgotPassword.securityCode,
                    xtype: 'textfield',
                    margin: '2',
                    width: '100%'
                }]
            },
             {
                xtype: 'fieldset',
                id:'resetPasswordFieldset',
                title: i18n.forgotPassword.resetPassword,
                hidden: true,
                margin: '5 0 0 0', 
                defaults: {
                    xtype: 'textfield',
                    margin: '2',
                    width: '100%'
                },
                items: [
                    {
                        xtype: 'passwordField',
                        fieldId: 'fpPassword' 
                    },
                    {
                        xtype: 'passwordField',
                        fieldId: 'fpRePassword',
                        placeHolder: i18n.forgotPassword.retypePassword,
                        equalToField: 'fpPassword' 
                    }]
            },
            {
                flex: 1,
                html: ''
            },
            {
                html: '',
                id: 'profileError',
                cls: 'errorField'
            },
            {
                id: 'fpAcceptButton',
                margin: '20 0 10 0',
                xtype: 'basebutton',
                text: i18n.forgotPassword.sendmeAccessCode,
                iconCls: 'pictos pictos-check2',
                listeners: {
                    tap: 'doForgotPassword'
                }
            }

        ]
    },
    getValues: function () {
        var me = this;

        return {
            cardNumber: me.down('#fpCard').getValue(),
            maskSSN: me.down('#maskSSN').getValue(),
            code: me.down('#code').getValue(),
            sendBy: me.down('#sendByEmail').isChecked() ? 'email' : 'sms'
        }
    }
});