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

        if(!me.validate())return;

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
        var view = btn.up();

        if (!view.validate()) return;

        var obj = view.getValues();
        obj['clientId'] = Global.getClientId();
 
        if (!Ext.getCmp('newPasswordFieldset').el.isVisible()) {
            delete obj.password;
            delete obj.rePassword;
        }

        Request.load({
            url: 'gen/updateProfile',
            method: 'POST',
            jsonData: obj,
            success: function (response) {
                Ext.getCmp('mainNavView').pop();
                Ext.toast('Your profile has been updated', 4000); 
            }
        });
        
        Global.setProfileInfo(obj);
    },
    onLogout: function () {
        Ext.Viewport.hideMenu('left');
        Global.setToken(null);
        var authTabPanel = Ext.getCmp('authTabPanel');
        Ext.getCmp('main').setActiveItem(authTabPanel);
    }
});
