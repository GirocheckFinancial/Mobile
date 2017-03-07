Ext.define('GirocheckMobile.view.auth.Login', {
    extend: 'GirocheckMobile.component.BasePage',
    xtype: 'login',
    requires: [
        'GirocheckMobile.component.BaseFormPanel',
        'GirocheckMobile.component.Link',
        'GirocheckMobile.component.BaseButton',
        'GirocheckMobile.field.PasswordField',
        'Ext.field.Toggle',
        'Ext.data.identifier.Uuid'
    ],

    config: {
        title: 'Login',
        cls: 'login',
        items: [

            {
                flex: 1,
                layout: {
                    type: 'vbox',
                    pack: 'center',
                    align: 'stretch'
                },
                items: [{
                    xtype: 'image',
                    src: 'resources/images/vc-logo.jpg',
                    //  margin: '20 0 40',
                    height: 100
                }]
            },
            {
                height: 50,
                hidden: true,
                html: 'Invalid Credentials',
                style: { color: 'red', width: '100%', 'text-align': 'center' }
            },
            {
                xtype: 'container',
                items: [{
                    xtype: 'baseformpanel',
                    scrollable: null,
                    defaults: {
                        xtype: 'fieldset',
                        margin: '10 0 0 0',
                        defaults: {
                            xtype: 'textfield',
                            cls: 'loginfield'
                        }
                    },
                    items: [ 
                        {
                            items: [{
                                id: 'loginUser',
                                name: 'user',
                                placeHolder: 'Username',
                                value:'a'
                            }]
                        }, {
                            items: [{
                                inputType: 'password',
                                id: 'loginPassword',
                                name: 'password',
                                placeHolder: 'Password',
                                value:'a'
                            }]
                        }, {
                            xtype: 'panel',
                            layout: {
                                type: 'hbox',
                                align: 'center'
                            },
                            defaults: {
                                margin: '10 0 0 0',
                                style: {
                                    font: 'normal 0.9em/1.23077em helvetica, arial, sans-serif'
                                }
                            },
                            items: [
                                {
                                    xtype: 'link',
                                    url: 'http://google.com',
                                    html: 'Forgot Password'
                                },
                                {
                                    flex: 1
                                }
                                // , {
                                //     xtype: 'togglefield',
                                //     id: 'usePin',
                                //     cls: 'rememberme',
                                //     labelWidth: 110,
                                //     label: 'Use PIN', 
                                //     value: 0,
                                //     listeners: {
                                //         change: 'onRememberMeChange'
                                //     }
                                // }
                            ]
                        },

                        {
                            xtype: 'container',
                            margin: '20 0 0 0',
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'stretch'
                            },
                            defaults: {
                                margin: '0 0 5 0',
                                iconAlign: 'center'
                            },
                            items: [{
                                itemId: 'loginButton',
                                xtype: 'basebutton',
                                text: 'Login',
                                iconCls: 'fa fa-sign-in',
                                listeners: {
                                    tap: 'doLogin'
                                }
                            },
                            {
                                xtype: 'basebutton',
                                cls: 'registerButton',
                                text: 'Register',
                                iconCls: 'pictos pictos-lightning',
                                style: {
                                    'background-color': '#000000'
                                },
                                listeners: {
                                    tap: 'onRegister'
                                }
                            }
                            ]
                        }

                    ]
                }
                ]
            }
        ]
        // ,
        // listeners: {
        //     activate: 'onLoginPageActivate' 
        // },
    }
});