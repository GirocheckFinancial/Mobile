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
        title: 'Register',
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
                title: 'Credentials',
                items: [
                    {
                        xtype: 'baseTextField',
                        placeHolder: 'Username',
                        fieldId: 'user',
                        name: 'username',
                        hint: 'Enter your Username',
                        minLength: 6,
                        regExp: /^[a-zA-Z0-9]*$/,
                        regExtErrorMsg: 'Username must to contain letters and numbers and have at least 6 characters.'
                    },
                    {
                        xtype: 'passwordField',
                        fieldId: 'password' 
                    },
                    {
                        xtype: 'passwordField',
                        fieldId: 'rePassword',
                        placeHolder: 'Retype Password',
                        equalToField: 'password' 
                    }]
            },
            {
                title: 'Personal Information',
                items: [
                    {
                        xtype: 'baseTextField',
                        fieldId: 'phone',
                        placeHolder: 'Telephone',
                        hint: 'Enter telephone number used when registering <br> VoltCash, include country code <br> (1 if in USA) with no dashes.',
                        minLength: 10,
                        regExp: /^[0-9]*$/,
                        regExtErrorMsg: 'Enter just digits' 
                    },
                    {
                        xtype: 'baseTextField',
                        fieldId: 'email',
                        placeHolder: 'Email',
                        hint: 'Enter your e-mail address. <br> This will be used for password recovery',
                        regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        regExtErrorMsg: 'Invalid email format' 
                    },
                    {
                        xtype: 'baseTextField',
                        fieldId: 'ssn',
                        placeHolder: 'SSN / ITIN',
                        hint: 'Enter your Social Security Number or ITIN <br> used when registering VoltCash.',
                        regExp: /^[0-9]*$/,
                        inputType: 'password',
                        regExtErrorMsg: 'Enter just digits' 
                    }]
            },
            {
                title: 'Credit Card',
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
                        label: 'I accept the',
                        listeners: {
                            change: 'onAcceptTerms'
                        }
                    },
                    {
                        xtype: 'panel',
                        id: 'readTerms',
                        html: '<span id="readTermsLink">Terms and Conditions</span>',
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
                text: 'Register',
                iconCls: 'pictos pictos-check2',
                qtip: "This is a tip",
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