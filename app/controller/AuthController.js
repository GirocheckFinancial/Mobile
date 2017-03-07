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
    requires: ['GirocheckMobile.store.LocalStore'],


    doLogin: function (loginButton) {
        var me = this,
            view = me.getView(),
            main = view.up(),
            navView = main.down('mainNavView'),
            userName = loginButton.up().up().down('#loginUser').getValue(),
            password = loginButton.up().up().down('#loginPassword').getValue();

        //http://69.42.101.181:8095/FrontMobile/webresources/v1/
        Request.load({
            url: 'auth/login',
            method: 'POST',
            jsonData: { 'username': userName, 'password': password },
            success: function (response) {
                Util.afterLogin(response);
            }
        });
    },

    onRegister: function () {
        var me = this,
            view = me.getView();
        view.push(Ext.create('GirocheckMobile.view.auth.Register'));
        //TODO move this to a method in the navigation bar
        view.getNavigationBar().setStyle({ display: 'block' });
    },

    doRegister: function (registerButton) {
        var view = registerButton.up();

        var phone = view.down('#phone').getValue();
        var email = view.down('#email').getValue();
        var ssn = view.down('#ssn').getValue();
        var user = view.down('#user').getValue();
        var password = view.down('#password').getValue();
        var card = view.down('#card').getValue();

        var obj = {
            username: user,
            password: password,
            ssn: ssn,
            email: email,
            phone: phone,
            cardNumber: card
        };

        Request.load({
            url: 'gen/register',
            method: 'POST',
            jsonData: obj,
            success: function (response) {
                Util.afterLogin(response);
            }
        });
    },

    onBackToLogin: function () {
        this.getView().getNavigationBar().setStyle({ display: 'none' })
    }

});
