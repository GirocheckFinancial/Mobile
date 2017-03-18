/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('GirocheckMobile.utils.Global', {
    alternateClassName: 'Global',
    singleton: true,
    alias: 'widget.global',
    config: {
       // host:'http://localhost:8085',
        // host:'http://69.42.101.181:8085',
          host:'https://mobile.girocheck.net:8999',
        middleUrl: '/FrontMobile/',
        version: 'v1',
        startDate: null,
        endDate: null,
        clientId: null,
        token: null,
        username: null,
        phone: null,
        email: null
    },
    constructor: function (config) {
        this.initConfig(config);
    },
    geTxParams: function () {
        var me = this;
        return { startDate: me.getStartDate(), endDate: me.getEndDate(), clientId: me.getClientId() };
    }, 
    getUrlPrefix: function () {
        var me = this; 
        return me.getHost() + me.getMiddleUrl() + me.getVersion() + '/';
    },
    setLoginInfo: function (response) {
        var me = this; 
        me.setClientId(response.clientId);
        me.setToken(response.token);
        me.setEmail(response.clientEmail);
        me.setPhone(response.clientPhone);
        me.setUsername(response.mobileClientUserName);
    },
    getLoginInfo: function (clientId, token) {
        var me = this;
        var resp = {
            clientId: me.getClientId(),
            token: me.getToken()
        }; 
        return resp;
    }, 
     getProfileInfo: function (clientId, token) {
        var me = this;
        var resp = {
            email: me.getEmail(),
            phone: me.getPhone(),
            username:me.getUsername()
        }; 
        return resp;
    },
    setProfileInfo: function (info) {
        var me = this;  
        me.setEmail(info.email);
        me.setPhone(info.phone);
        me.setUsername(info.username);
    }
});

