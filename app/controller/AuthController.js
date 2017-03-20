/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GirocheckMobile.controller.AuthController', {
    extend: 'Ext.app.ViewController',
    alternateClassName: 'AuthController',
    alias: 'controller.authController',

    doLogin: function (loginButton) {
        var me = this,
            view = me.getView(),
            main = view.up(),
            navView = main.down('mainNavView'),
            userName = loginButton.up().up().down('#loginUser').getValue(),
            password = loginButton.up().up().down('#loginPassword').getValue();

        if (!userName || !password) return;

        //http://69.42.101.181:8095/FrontMobile/webresources/v1/
        Request.load({
            url: 'auth/login',
            //params:'username=' + userName + '&password='+ password,
            method: 'POST',
            jsonData: { 'username': userName, 'password': password },
            success: Util.afterLogin
        });
    },

    onRegister: function () {
        var me = this,
            view = me.getView();
        view.push(Ext.create('GirocheckMobile.view.auth.Register'));
        //TODO move this to a method in the navigation bar
        // view.toggleToolBar(true);
        // view.getNavigationBar().setStyle({ display: 'block' });
    },

    doRegister: function (registerButton) {
        var view = registerButton.up(),
            acceptTerms = view.down('#acceptTerms');

        if (!acceptTerms.getValue()) {
            Ext.create('Ext.tip.ToolTip', {
                target: me.el,
                anchor: 'bottom',
                html: 'You need to accept our Terms and Conditions'
            }).show();
            return;
        }

        if (!view.validate()) return;

        Request.load({
            url: 'gen/register',
            method: 'POST',
            jsonData: view.getValues(),
            success: Util.afterLogin
        });
    },
    onBackToLogin: function () {
        Ext.getCmp('authTabPanel').toggleToolBar(false);
    },

    onForgotPassword: function () {
        var me = this,
            view = me.getView();
        view.push(Ext.create('GirocheckMobile.view.auth.ForgotPassword'));
        view.toggleToolBar(true);
    },

    doForgotPassword: function (btn) {
        var view = btn.up(),
            profileError = view.down('#profileError'),
            codeField = view.down('#code'),
            firstTime = !view.down('#securityCodeFieldset').el.isVisible();

        if (firstTime) {
            if (!view.validate()) return;
        } else {
            var codeVal = codeField.getValue();
            if (!codeVal || !/^[0-9]{6}$/.test(codeVal)) {
                Ext.toast('Invalid Access Code', 3000);
                return;
            }
        }

        var obj = view.getValues();

        Request.load({
            url: 'gen/forgotPassword',
            method: 'POST',
            jsonData: obj,
            success: firstTime ? this.fpFirstTimeCallBack : this.fpSecondTimeCallBack
        });
    },
    fpSecondTimeCallBack:function(){
        Global.setRegisteredUsingAccessCode(true);
        Util.afterLogin();
    },
    fpFirstTimeCallBack: function (response) {
        for (var i = 0; i < 6; i++) {
            Ext.getCmp('forgotPassword').items.items[i].el.toggle();
        }
        Ext.getCmp('fpAcceptButton').setText('Accept');
    },
    onAcceptTerms: function (me, newValue, oldValue, eOpts) {
        var view = me.up().up(),
            btn = view.down('#registerAcceptButton');
        if (me.getValue()) {
            btn.removeCls('mobileapp-button-disabled');
            btn.addCls('mobileapp-button');
        } else {
            btn.removeCls('mobileapp-button');
            btn.addCls('mobileapp-button-disabled');
        }
    }
});
