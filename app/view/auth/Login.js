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
                xtype: 'container',
                items: [{
                    xtype: 'baseformpanel',
                    scrollable: null,
                    items: [{
                        xtype: 'fieldset',
                        margin: '20 0 0 0',
                        items: [{
                            xtype: 'baseTextField',
                            cls: 'loginfield',
                            itemId: 'userName',
                            name: 'user',
                            title: 'Username', //i18n.login.usuario,
                            placeHolder: 'Username'//i18n.login.enter_user
                        }]
                    }, {
                        xtype: 'fieldset',
                        margin: '10 0 0 0',
                        items: [{
                            xtype: 'passwordField',
                            labelWidth: 120,
                            cls: 'loginfield',
                            itemId: 'password',
                            name: 'password',
                            label: 'Password'// i18n.login.password
                            //value: 'this is just for dev'
                        }]
                    }, {
                        layout: {
                            type: 'hbox',
                            align:'center'
                        },
                        defaults:{
                            margin: '10 0 0 0',
                            style:{
                                font:'normal 0.9em/1.23077em helvetica, arial, sans-serif'
                            }
                        },
                        items: [
                             {
                                xtype: 'link',
                                url: 'http://google.com',
                                html: 'Forgot Password' 
                            },
                            {
                            flex:1
                            },{
                            xtype: 'togglefield',
                            itemId: 'rememberMe',
                            cls:'rememberme',
                            labelWidth: 110, 
                            label: 'Remember Me',// i18n.login.recordar,
                            value: 0
                        }
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
                        defaults:{
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
                            style:{
                                'background-color':'#000000'
                            },
                            listeners:{
                                tap:'onRegister'
                            }
                        }
                        ]
                    }

                    ]
                } 
                ]
            }
        ], 
        control: {
            '#rememberMe': {
                change: 'onRememberMeChange'
            } 
        }
    }, 
    onRememberMeChange: function (me, newValue, oldValue, eOpts) {
        me.el.dom.getElementsByClassName('x-thumb-wrap-el')[0].style['background-color'] = me.getValue() ? '#148c7e' : '#C0C0C0';

        //   Ext.getStore('localStore').updateData({'rememberme':(newValue === 1 ? true : false)});

    }
});