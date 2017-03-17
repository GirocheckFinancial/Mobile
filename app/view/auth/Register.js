Ext.define('GirocheckMobile.view.auth.Register', {
    extend: 'GirocheckMobile.component.BasePage',
    xtype: 'register',
    requires: [
        'GirocheckMobile.component.BaseButton',
        'GirocheckMobile.field.PasswordField',
        'Ext.field.Checkbox',
        'GirocheckMobile.field.CheckBoxField',
        'GirocheckMobile.view.auth.TermsAndConditions'
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
                title: 'Credentials',
                items: [{
                    id: 'user',
                    name: 'user',
                    placeHolder: 'Username'
                }, {
                    id: 'password',
                    name: 'password',
                    placeHolder: 'Password',
                    inputType: 'password'
                }, {
                    id: 'rePassword',
                    name: 'rePassword',
                    placeHolder: 'Retype Password',
                    inputType: 'password'
                }]
            },
            {
                title: 'Personal Information',
                items: [{
                    id: 'phone',
                    name: 'phone',
                    placeHolder: 'Telephone',
                    value: '1234567890'
                },
                {
                    id: 'email',
                    name: 'email',
                    placeHolder: 'Email',
                    value: 'roberto.rodriguez@girocheck.com'
                },
                {
                    id: 'ssn',
                    name: 'ssn',
                    placeHolder: 'SSN',
                    value: '201120388'
                }]
            },
            {
                title: 'Credit Card',
                items: [{
                    id: 'card',
                    name: 'card',
                    placeHolder: 'Card Number',
                    value: '5448353884071541',
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
                xtype:'panel',
                layout:{
                    type:'hbox',
                    pack:'left'
                },
                padding: '10px 0px 10px 15px',
                items:[
                    {
                        xtype: 'checkBoxField',
                        id:'acceptTerms',
                        labelAlign: 'right',
                        label: 'I have read the',
                        listeners:{
                            change:'onAcceptTerms'
                        }
                    },
                    {
                        xtype:'panel',
                        id:'readTerms',
                        html:'<span id="readTermsLink">Terms and Conditions</span>',
                        align:'left',
                        style:{'text-decoration':'underline', 'padding-top':'3px'},
                        listeners:{
                            'onReadTerms':function(){
                                debugger;
                            }
                        }
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
                cls:'mobileapp-button-disabled',
                text: 'Register',
                iconCls: 'pictos pictos-check2',
                // hidden:true,
                listeners: {
                    tap: 'doRegister'
                }
            } 

        ] 
    },
    listeners:{
        activate:function(){
           document.getElementById('readTermsLink').addEventListener('click',
            function(e, b,c){
               Ext.getCmp('authTabPanel').push(Ext.create('GirocheckMobile.view.auth.TermsAndConditions')); 
        })
        }
    } 
});