/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('GirocheckMobile.view.auth.RegisterFormPanel', {
    extend: 'Ext.panel.Panel', //'GirocheckMobile.component.BaseFormPanel',
    xtype: 'registerFormPanel',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'GirocheckMobile.field.BaseTextField',
        'GirocheckMobile.field.EmailField',
        'GirocheckMobile.component.BaseButton'
    ],
    config: {
        //  form: {
        defaults: {
            xtype: 'fieldset',
            collapsible: true,
            defaults: {
                xtype: 'textfield'
            }
        },
        items: [{
            title: 'Personal Information',
            items: [
                {
                    itemId: 'Phone',
                    name: 'phone',
                    title: 'Phone',
                    //   placeHolder: 'Phone',
                    required: true
                },
                {
                    itemId: 'email',
                    name: 'email',
                    title: 'Email',
                    //   placeHolder: 'Email',
                    required: true
                }, {
                    itemId: 'ssn',
                    name: 'ssn',
                    title: 'SSN',
                    //  placeHolder: 'SSN',
                    required: true
                }
            ]
        },
        {
            title: 'Login Information',
            items: [
                {
                    itemId: 'userName',
                    name: 'user',
                    title: 'Username', //i18n.login.usuario,
                    //   placeHolder: 'Username'//i18n.login.enter_user
                },
                {
                    itemId: 'Password',
                    name: 'passw',
                    //  placeHolder: 'Password'
                },
                {
                    itemId: 'pin',
                    name: 'pin',
                    xtype: 'baseTextField',
                    //  placeHolder: 'PIN (optional)',
                    required: true
                }
            ]
        },
        {
            title: 'Card Information',
            items: [
                {
                    itemId: 'card',
                    name: 'card',
                    title: 'Card'
                }
            ]
        },


        {
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                xtype: 'spacer'
            },
            {
                ui: 'decline',
                text: 'Cancel',
                handler: function () {

                }
            }, {
                ui: 'confirm',
                text: 'Save',
                handler: function () {

                }
            }, {
                xtype: 'spacer'
            }]
        }


        ]
        // , dockedItems: [{
        //     dock: 'bottom',
        //     xtype: 'basebutton',
        //     text: 'Accept',
        //     iconCls: 'pictos pictos-check2',
        //     listeners: {
        //         tap: 'doRegister'
        //     }
        // }
        // ]
        // }
    },
    initialize: function () {
    }
});