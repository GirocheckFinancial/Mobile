Ext.define('GirocheckMobile.view.auth.Register', {
    extend: 'GirocheckMobile.component.BasePage',
    xtype: 'register',
    requires: [
        'GirocheckMobile.component.BaseFormPanel',
        'GirocheckMobile.component.Link',
        'GirocheckMobile.component.BaseButton',
        'GirocheckMobile.field.PasswordField',
        'Ext.field.Toggle',
        'Ext.data.identifier.Uuid'
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
                xtype: 'textfield',
                margin: '2'
            },
        },
        items: [
            {
                title: 'Personal Information',
                items: [{
                    id: 'phone',
                    name: 'phone',
                    placeHolder: 'Telephone'
                },
                {
                    id: 'email',
                    name: 'email',
                    placeHolder: 'Email'//i18n.login.enter_user
                },
                {
                    id: 'ssn',
                    name: 'ssn',
                    placeHolder: 'SSN'//i18n.login.enter_user
                }]
            },
            {
                title: 'Credentials',
                items: [{
                    id: 'user',
                    name: 'user',
                    placeHolder: 'Username' 
                }, {
                    id: 'password',
                    name: 'password',
                    placeHolder: 'Password' 
                }, {
                    id: 'pin',
                    name: 'pin', 
                    placeHolder: 'PIN (optional)',
                    listeners: {
                        focus: function (field, e, eOpts) {
                            if (Ext.getCmp('register').doFocus) { 
                                Ext.getCmp('register').doFocus = false;
                            } else {
                                Ext.getCmp('phone').focus(); 
                                setTimeout(function () { 
                                    Ext.getCmp('register').doFocus = true; 
                                    Ext.getCmp('pin').focus();
                                }, 300);
                            }
                        }
                    }
                }]
            },
            {
                title: 'Credit Card',
                items: [{
                    id: 'card',
                    name: 'card',
                    //title: 'Username', //i18n.login.usuario,
                    placeHolder: 'Card Number',
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
                flex: 1,
                xtype: 'panel',
                html: '.'
            }, {
                id: 'registerAcceptButton',
                 margin: '0 0 10 0',
                xtype: 'basebutton',
                text: 'Accept',
                iconCls: 'pictos pictos-check2',
                listeners: {
                    tap: 'doLogin'
                }
            }

        ]
    }
});