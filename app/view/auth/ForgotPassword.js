Ext.define('GirocheckMobile.view.auth.ForgotPassword', {
    extend: 'GirocheckMobile.component.BasePage',
    xtype: 'forgotPassword',
    requires: [
        'GirocheckMobile.component.BaseFormPanel',
        'GirocheckMobile.component.BaseButton'
    ],
    config: {
        title: 'Forgot Password',
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
                html: '<div style="text-align:center"><br><h3>We are here to help you<h3><br>' +
                '<span>Please enter the following information, so we can identify your account,' +
                ' and send you an Access Code by Email or SMS that you can use to login' +
                ' and reset your password.</span></div>'
            },
            {
                xtype: 'fieldset',
                margin: '5 0 0 0',
                title: '',
                defaults: {
                    xtype: 'textfield',
                    margin: '2',
                    width: '100%'
                },
                items: [{
                    id: 'fpCard',
                    name: 'cardNumber',
                    placeHolder: 'Credit Card Number',
                    value: '1111111111111111'
                }, {
                    id: 'maskSSN',
                    name: 'maskSSN',
                    placeHolder: 'Las 4 digits of the SSN',
                    value: '0388'
                }]
            },
            {
                xtype: 'fieldset',
                margin: '5 0 0 0',
                title: 'Receive Access Code by:',
                width: '100%',
                layout: 'hbox',
                defaults: {
                    xtype: 'radiofield',
                    width: '50%',
                    labelAlign: 'right'
                },
                items: [{
                    name: 'sendBy',
                    label: 'Email',
                    value: 'email',
                    id: 'sendByEmail',
                    checked: true
                }, {
                    name: 'sendBy',
                    label: 'SMS Text',
                    id: 'sendBySms',
                    value: 'sms'
                }]
            },
            {
                width: '100%',
                hidden: true,
                html: '<div style="text-align:center"><br><h3>We just sent you a 6 digits Access Code.' +
                ' You can access with that code in the next 30 minutes.</span></div>'
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
                    placeHolder: 'Security Code',
                    xtype: 'textfield',
                    margin: '2',
                    width: '100%'
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
                text: 'Send me Access Code',
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