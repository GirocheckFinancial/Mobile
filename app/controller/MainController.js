/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GirocheckMobile.controller.MainController', {
    extend: 'Ext.app.ViewController',
    alternateClassName: 'AuthController',
    alias: 'controller.mainController', 
    goTo: function (btn, b, c) {
        Ext.Viewport.hideMenu('left'); 
        if (btn.config.page) {
            Ext.getCmp('mainNavView').push(Ext.create(btn.config.page));
        }
    },
    doReplaceCard: function (btn) { 
        var me = btn.up(),
            valid = true,
            newCardNumber = me.down('#newCard').getValue();

        if (!newCardNumber) return;

        var obj = {
            clientId: Global.getClientId(),
            cardNumber: newCardNumber
        };

        Request.load({
            url: 'gen/replaceCard',
            method: 'POST',
            jsonData: obj,
            success: function (response) {
                Ext.getCmp('mainNavView').pop();
                Ext.toast('Your Card has beed replaced', 4000);
            }
        });
    },
    doUpdateProfile: function (btn) {
        var me = btn.up(),
            valid = true,
            profilePhone = me.down('#profilePhone').getValue(),
            profileEmail = me.down('#profileEmail').getValue(),
            profileUsername = me.down('#profileUsername').getValue(),
            retypePassword = me.down('#retypePassword').getValue(),
            newPassword = me.down('#newPassword').getValue()
        profileError = me.down('#profileError');

        var obj = {
            username: me.down('#profileUsername').getValue(),
            email: me.down('#profileEmail').getValue(),
            phone: me.down('#profilePhone').getValue(),
            password: me.down('#newPassword').getValue(),
            retypePassword: me.down('#retypePassword').getValue(),
            clientId: Global.getClientId()
        }

        if (!this.validateProfile(obj, profileError)) return;

        Request.load({
            url: 'gen/updateProfile',
            method: 'POST',
            jsonData: obj,
            success: function (response) {
                Ext.getCmp('mainNavView').pop();
                Ext.toast('Your profile has been updated', 4000);
            }
        });
    },
    validateProfile: function (obj, profileError) {
        var valid = true;

        if (!obj.phone || obj.phone < 10) {
            profileError.setHtml('Invalid Phone Number');
            valid = false;
        }

        if (!obj.email || obj.email.indexOf('@') < 0 || obj.email.indexOf('.') < 0) {
            profileError.setHtml('Invalid Email Address');
            valid = false;
        }

        if (!obj.username) {
            profileError.setHtml('Invalid Username');
            valid = false;
        }

        if (Ext.getCmp('newPasswordFieldset').el.isVisible()) {
            if (!obj.password || !obj.retypePassword || obj.password !== obj.retypePassword) {
                profileError.setHtml('Invalid Password');
                valid = false;
            }
        }

        if (valid) {
            profileError.setHtml('');
        }
        return valid;
    },
    onLogout: function () {
        Ext.Viewport.hideMenu('left');
        Global.setToken(null);
        var authTabPanel = Ext.getCmp('authTabPanel');
        Ext.getCmp('main').setActiveItem(authTabPanel);
    }
});
