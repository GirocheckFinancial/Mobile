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
        host: 'http://localhost:8085', //'http://69.42.101.181:8085',
        middleUrl: '/FrontMobile/',
        version:'v1',
        startDate: null,
        endDate: null,
        clientId: null,
        token: null
    },
    constructor: function (config) {
        this.initConfig(config);
    },
    geTxParams: function () {
        var me = this;
        return { startDate: me.getStartDate(), endDate: me.getEndDate(), clientId:me.getClientId() };
    },
    getUrlPrefix: function () {
        var me = this;
        return me.getHost() + me.getMiddleUrl() + me.getVersion() + '/';
    },
    setLoginInfo: function (clientId, token) {
        var me = this; 
        me.setClientId(clientId);
        me.setToken(token);
    },
    getLoginInfo: function (clientId, token) {
        var me = this; 
        var resp = {
            clientId: me.getClientId(),
            token: me.getToken()
        };

        return resp;
    }
});

