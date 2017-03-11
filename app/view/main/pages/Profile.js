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
        'GirocheckMobile.controller.MainController'
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
            items: [{
                id: 'profileUsername',
                name: 'profileUsername',
                label: 'Username' 
            }, {
                id: 'profilePhone',
                name: 'phone',
                label: 'Telephone' 
            },
            {
                id: 'profileEmail',
                name: 'email',
                label: 'Email' 
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
            title: 'New Password',
            id: 'newPasswordFieldset',
            margin: '10 0 0 0',
             hidden: true,
            defaults: {
                xtype: 'textfield',
                inputType: 'password',
                margin: '5',
                labelWidth: 140
            },
            items: [{
                id: 'newPassword',
                label: 'New Password',
                listeners: {
                    focus: function (field, e, eOpts) {
                        if (Ext.getCmp('profile').doFocus) {
                            Ext.getCmp('profile').doFocus = false;
                        } else {
                            Ext.getCmp('retypePassword').focus();
                            setTimeout(function () {
                                Ext.getCmp('profile').doFocus = true;
                                Ext.getCmp('newPassword').focus();
                            }, 300);
                        }
                    }
                }
            },
            {
                id: 'retypePassword',
                label: 'Retype Password',
                listeners: {
                    focus: function (field, e, eOpts) {
                        if (Ext.getCmp('profile').doFocus) {
                            Ext.getCmp('profile').doFocus = false;
                        } else {
                            //    Ext.getCmp('newPassword').focus();
                            setTimeout(function () {
                                Ext.getCmp('profile').doFocus = true;
                                Ext.getCmp('retypePassword').focus();
                            }, 300);
                        }
                    }
                }
            }]
        },
        {
            xtype: 'panel',
            html: '',
            id: 'profileError',
            cls: 'errorField',
            width: '100%',
            style: {
                'text-align': 'center'
            }
        },
        {
            flex: 1,
            xtype: 'panel',
            html: '.'
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
    initialize: function (panel) {
        var me = this;
        me.down('#changePasswordFieldset').el.on('click', function () {
            me.down('#newPasswordFieldset').el.toggle();
        });

        var profileInfo = Global.getProfileInfo();
        me.down('#profileUsername').setValue(profileInfo.username);
        me.down('#profilePhone').setValue(profileInfo.phone);
        me.down('#profileEmail').setValue(profileInfo.email);
    }
}); 
