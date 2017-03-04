/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GirocheckMobile.controller.AuthController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.authController',

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

                Ext.getStore('txstore').load();
                main.setActiveItem(navView);
            }
        });
    },

    onRegister: function () {
        var me = this,
            view = me.getView();

        view.push(Ext.create('GirocheckMobile.view.auth.Register'));

        view.getNavigationBar().setStyle({ display: 'block' });
    },

    onBackToLogin: function () {
        this.getView().getNavigationBar().setStyle({ display: 'none' })
    },

    onRememberMeChange: function (me, newValue, oldValue, eOpts) {
        var userName = me.up().up().down('#userName');
        var password = me.up().up().down('#password');
        var pin = me.up().up().down('#loginPin'); 
    },

    setBalance: function (balance) {
        if (balance) {

        }
    }

});
