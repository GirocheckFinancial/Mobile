Ext.define('GirocheckMobile.view.auth.Register', {
    extend: 'GirocheckMobile.component.BasePage',
    xtype: 'register',
    requires: [
        'GirocheckMobile.component.BaseButton',
        'GirocheckMobile.field.PasswordField',
        'Ext.field.Checkbox',
        'GirocheckMobile.field.CheckBoxField',
        'GirocheckMobile.view.auth.TermsAndConditions',
        'GirocheckMobile.field.BaseTextField',
        'GirocheckMobile.field.CardField'
    ],
    config: {
        title: i18n.register.title,
        cls: 'login',
        id: 'register',
        doFocus: false,
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        defaults: {
            xtype: 'fieldset',
            margin: '5 0 0 0',
            defaults: {
                xtype: 'textfield'
            },
        },
        items: [
            {
                title: i18n.register.credentials,
                items: [
                    {
                        xtype: 'baseTextField',
                        placeHolder: i18n.register.username,
                        fieldId: 'user',
                        name: 'username',
                        hint: i18n.register.usernameHint,
                        minLength: 6,
                        regExp: /^[a-zA-Z0-9]*$/,
                        regExtErrorMsg: i18n.register.usernameRegexHint
                    },
                    {
                        xtype: 'passwordField',
                        fieldId: 'password' 
                    },
                    {
                        xtype: 'passwordField',
                        fieldId: 'rePassword',
                        placeHolder: i18n.register.retypePassword,
                        equalToField: 'password' 
                    }]
            },
            {
                title: i18n.register.personalInformation,
                items: [
                    {
                        xtype: 'baseTextField',
                        fieldId: 'phone',
                        placeHolder:i18n.register.telephone,
                        hint:i18n.register.telephoneHint,
                        minLength: 10,
                        regExp: /^[0-9]*$/,
                        regExtErrorMsg:i18n.register.telephoneRegexHint
                    },
                    {
                        xtype: 'baseTextField',
                        fieldId: 'email',
                        placeHolder: i18n.register.email,
                        hint: i18n.register.emailHint,
                        regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        regExtErrorMsg:i18n.register.emailRegexHint 
                    },
                    {
                        xtype: 'baseTextField',
                        fieldId: 'ssn',
                        placeHolder:i18n.register.ssn ,
                        hint: i18n.register.ssnHint,
                        regExp: /^[0-9]*$/,
                        inputType: 'password',
                        regExtErrorMsg: i18n.register.ssnRegexHint 
                    }]
            },
            {
                title: i18n.register.creditCard,
                items: [{
                    xtype: 'cardField',
                    fieldId: 'card',
                    name: 'cardNumber', 
                    listeners: {
                        focus: function (field, e, eOpts) {
                            if (Ext.getCmp('register').doFocus) {
                                Ext.getCmp('register').doFocus = false;
                            } else {
                                Ext.getCmp('phone').focus();
                                setTimeout(function () {
                                    Ext.getCmp('register').doFocus = true;
                                    Ext.getCmp('card').focus();
                                }, 300);
                            }
                        }
                    }
                }]
            },
            {
                xtype: 'panel',
                layout: {
                    type: 'hbox',
                    pack: 'left'
                },
                padding: '10px 0px 10px 15px',
                items: [
                    {
                        xtype: 'checkBoxField',
                        id: 'acceptTerms',
                        labelAlign: 'right',
                        label: i18n.register.iAcceptThe,
                        listeners: {
                            change: 'onAcceptTerms'
                        }
                    },
                    {
                        xtype: 'panel',
                        id: 'readTerms',
                        html: '<span id="readTermsLink">' + i18n.register.termsAndConditions + '</span>',
                        align: 'left',
                        style: { 'text-decoration': 'underline', 'padding-top': '6px' }
                    }
                ]
            },

            {
                flex: 1,
                xtype: 'panel',
                html: '.'
            },
            {
                id: 'registerAcceptButton',
                margin: '0 0 10 0',
                xtype: 'basebutton',
                cls: 'mobileapp-button-disabled',
                text: i18n.register.register,
                iconCls: 'pictos pictos-check2', 
                listeners: {
                    tap: 'doRegister' 
                }
            }

        ]
    },
    listeners: {
        activate: function () {
            document.getElementById('readTermsLink').addEventListener('click',
                function (e, b, c) {
                    Ext.getCmp('authTabPanel').push(Ext.create('GirocheckMobile.view.auth.TermsAndConditions'));
                });
            this.up().toggleToolBar(true);
        }
    }
});