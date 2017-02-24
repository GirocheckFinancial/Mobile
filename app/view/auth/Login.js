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
        title: 'GIROCHECK',
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
                            itemId: 'User',
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
                            itemId: 'Password',
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
                            xtype: 'basebutton', 
                            text: 'Login',
                            iconCls: 'fa fa-sign-in'
                        },
                        {
                            xtype: 'basebutton',
                            cls: 'registerButton',
                            text: 'Register',
                            iconCls: 'pictos pictos-lightning',
                            style:{
                                'background-color':'#000000'
                            }
                        }
                        ]
                    }

                    ]
                },

                // {
                    
                //         layout: {
                //             type: 'hbox',
                //             align:'center'
                //         },
                //         defaults:{
                //              height:40,
                //             style:{
                //                 font:'normal 0.8rem/1.23077em helvetica, arial, sans-serif',
                //                 padding:'12px 0px 0px 0px' 
                //             }
                //         },
                //         items: [
                //             {
                //             xtype: 'link',
                //             url: 'http://google.com',
                //             html: 'Register' 
                //         },{
                //             flex:1
                //         },
                //         {
                //             xtype: 'link',
                //             url: 'http://google.com',
                //             html: 'Forgot Password' 
                //         }
                //         ]
                //     }
                //     , {
                //     xtype: 'container',
                //     height: 60,
                //     width: '100%',
                //     margin: '0 0 0 0',
                //     layout: {
                //         type: 'hbox',
                //         // pack: 'center',
                //         align: 'center'
                //     },
                //     defaults: {
                //         style:{
                //             'text-align':'center'
                //         }
                //     },
                //     items: [
                //         {
                //             xtype: 'link',
                //             url: 'http://google.com',
                //             html: 'FAQ'//i18n.login.olvido_las_credenciales
                //         },
                //         {
                //             flex:1
                //             // xtype: 'link',
                //             // url: 'http://google.com',
                //             // html: 'Forgot Password'//i18n.login.olvido_las_credenciales
                //         },
                //         {
                //             xtype: 'link',
                //             url: 'http://google.com',
                //             html: 'Contact'//i18n.login.olvido_las_credenciales
                //         }],

                // }  
                ]
            }
        ],
        listeners: {
            activate: 'onActivate',
            deactivate: 'onDeactivate'
        },
        control: {
            '#rememberMe': {
                change: 'onRememberMeChange'
            },
            '#loginButton':{
                tap:'onLogin'
            }
        }
    },
    // initialize : function () {
    //     // hide nestedlist toolbar
    //         this.getNavigationBar().hide();
    // },
    onActivate: function (newActiveItem, container, oldActiveItem, eOpts) {
        // var me = this;

        // var rememberme = Ext.getStore('localStore').getValue('rememberme');

        // me.down('#rememberMe').setValue(rememberme ? 1 : 0);

    },
    onDeactivate: function (newActiveItem, container, oldActiveItem, eOpts) {
        // var me = this;
        // TruckerBK.app.un({
        //     orientationchange: 'onOrientationChange',
        //     scope: me
        // });

        // me.down('#Password').setValue('');
        // if (me.down('#rememberMe').getValue() === 0) {
        //     me.down('#User').setValue('');
        // }

    },
    onOrientationChange: function (event) {

    },
    onLogin:function(a,b,c,d){ 

 
        // Request.load( {
        //     url: 'http://freegeoip.net/json/', 
        //     success: function( response ){ 
                 
        //         var responseText = response.responseText; 
        //         var responseJson = Ext.JSON.decode(responseText);
                 
        //         alert(responseJson.ip);

        //         var device = new Ext.device.Device();
 
        //         }});
    },
    onRememberMeChange: function (me, newValue, oldValue, eOpts) {
        me.el.dom.getElementsByClassName('x-thumb-wrap-el')[0].style['background-color'] = me.getValue() ? '#148c7e' : '#C0C0C0';

        //   Ext.getStore('localStore').updateData({'rememberme':(newValue === 1 ? true : false)});

    }
});