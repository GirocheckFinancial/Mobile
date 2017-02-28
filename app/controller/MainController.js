/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('GirocheckMobile.controller.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.mainController',

    doLogin: function (loginButton) {
        var me = this,
            view = me.getView(),
            navView = view.down('mainNavView'),
            userName = loginButton.up().up().down('#userName').getValue(),
            password = loginButton.up().up().down('#password').getValue();

        //http://69.42.101.181:8095/FrontMobile/webresources/v1/
        Request.load({
            url: 'auth/login',
            method: 'POST',
            jsonData: { 'username': userName, 'password': password },
            success: function (response) {
              
                Ext.getStore('txstore').load();
                view.setActiveItem(navView); 
            }
        });
    }

});
