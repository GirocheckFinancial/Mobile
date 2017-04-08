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
        title: i18n.profile.title,
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
            title: i18n.profile.personalInformation,
            margin: '5 0 0 0',
            defaults: {
                xtype: 'textfield',
                margin: '5'
            },
            items: [
                {
                    xtype: 'baseTextField',
                    placeHolder: i18n.profile.username,
                    fieldId: 'profileUsername',
                    name: 'username',
					readOnly: true,
                    hint:i18n.profile.usernameHint
                }, {
                    xtype: 'baseTextField',
                    fieldId: 'profilePhone',
                    placeHolder:i18n.profile.telephone,
                    name:'phone',
                    hint: i18n.profile.telephoneHint,
                    minLength: 10,
                    regExp: /^[0-9]*$/,
                    regExtErrorMsg: i18n.profile.emailRegexHint
                },
                {
                    xtype: 'baseTextField',
                    fieldId: 'profileEmail',
                    name:'email',
                    placeHolder:i18n.profile.email,
                    hint: i18n.profile.emailHint,
                    regExp: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    regExtErrorMsg: i18n.profile.emailRegexHint
                }]
        },

        {
            id: 'changePasswordFieldset',
            items: [{
                html: i18n.profile.changePassword,
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
                    placeHolder:i18n.profile.previousPassword, 
                    hint: i18n.profile.previousPasswordHint 
                },
                {
                    xtype: 'passwordField',
                    fieldId: 'passwordField',
                    name: 'password' 
                },
                {
                    xtype: 'passwordField',
                    fieldId: 'rePassword',
                    placeHolder:i18n.profile.retypePassword,
                    equalToField: 'passwordField' 
                }]
        },
        {
            flex: 1,
            xtype: 'panel'
        }, {
            margin: '0 0 10 0',
            xtype: 'basebutton',
            text: i18n.profile.accept,
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
 
        this.callParent(arguments);
    },
    initialize: function (panel) {
        var me = this; 
        me.down('#changePasswordFieldset').el.on('click', function () {
            me.down('#newPasswordFieldset').el.toggle();
        }); 
    }
}); 
