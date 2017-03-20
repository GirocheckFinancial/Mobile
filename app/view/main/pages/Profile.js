/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('GirocheckMobile.view.main.pages.Profile', {
    extend: 'GirocheckMobile.component.BaseViewPage',
    xtype: 'profile',
    id: 'profile',
    config: {
        title: 'Profile',
        doFocus: false
    },
    scrollable: true,
    requires: [
        'GirocheckMobile.controller.MainController',
        'GirocheckMobile.field.BaseTextField',
        'GirocheckMobile.field.PasswordField',
    ],
    controller: 'mainController',
    defaults: {
        xtype: 'fieldset',
        margin: '20 0 0 0'
    },
    items: [
        {
            title: 'Personal Information',
            margin: '5 0 0 0',
            defaults: {
                xtype: 'textfield',
                margin: '5'
            },
            items: [
                {
                    xtype: 'baseTextField',
                    placeHolder: 'Username',
                    fieldId: 'profileUsername',
                    name: 'username',
                    hint: 'Enter your Username',
                    minLength: 6,
                    regExp: /^[a-zA-Z0-9]*$/,
                    regExtErrorMsg: 'Username must to contain letters and numbers and have at least 6 characters.'
                }, {
                    xtype: 'baseTextField',
                    fieldId: 'profilePhone',
                    placeHolder: 'Telephone',
                    name:'phone',
                    hint: 'Enter telephone number used when registering <br> VoltCash, include country code <br> (1 if in USA) with no dashes.',
                    minLength: 10,
                    regExp: /^[0-9]*$/,
                    regExtErrorMsg: 'Enter just digits' 
                },
                {
                    xtype: 'baseTextField',
                    fieldId: 'profileEmail',
                    name:'email',
                    placeHolder: 'Email',
                    hint: 'Enter your e-mail address. <br> This will be used for password recovery',
                    regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    regExtErrorMsg: 'Invalid email format' 
                }]
        },

        {
            id: 'changePasswordFieldset',
            items: [{
                html: 'Change Password',
                width: '100%',
                style: {
                    'color': 'gray',
                    'text-align': 'center'
                }
            }
            ]
        },
        {
            title: '',
            id: 'newPasswordFieldset',
            margin: '10 0 0 0',
            hidden: true,
            defaults: {
                xtype: 'passwordField',
                margin: '5'
            },
            items: [ 
                {
                    xtype: 'passwordField',
                    fieldId: 'oldPassword',
                    placeHolder: 'Previous Password', 
                    hint: 'Please enter your previous Password.',
                    hidden:true
                },
                {
                    xtype: 'passwordField',
                    fieldId: 'passwordField',
                    name: 'password' 
                },
                {
                    xtype: 'passwordField',
                    fieldId: 'rePassword',
                    placeHolder: 'Retype Password',
                    equalToField: 'passwordField' 
                }]
        },
        {
            flex: 1,
            xtype: 'panel'
        }, {
            margin: '0 0 10 0',
            xtype: 'basebutton',
            text: 'Accept',
            iconCls: 'pictos pictos-check2',
            listeners: {
                tap: 'doUpdateProfile'
            }
        }
    ],
     onActivate: function (newActiveItem, mainNavView, oldActiveItem, eOpts) {
        var me = this;  
        var profileInfo = Global.getProfileInfo();
        me.down('#profileUsername').setValue(profileInfo.username);
        me.down('#profilePhone').setValue(profileInfo.phone);
        me.down('#profileEmail').setValue(profileInfo.email);

        if(!Global.getRegisteredUsingAccessCode()){
            me.down('oldPassword').show();
        }
        this.callParent(arguments);
    },
    initialize: function (panel) {
        var me = this; 
        me.down('#changePasswordFieldset').el.on('click', function () {
            me.down('#newPasswordFieldset').el.toggle();
        }); 
    }
}); 
