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
        host:'http://69.42.101.181:8095',
        middleUrl:'/FrontMobile/webresources/',
        version:'v1',
        startDate:null,
        endDate:null, 
    },
    constructor: function(config) {
        this.initConfig(config);
    },
    getDateRange: function(){
        var me = this;
        return {startDate:me.getStartDate(), endDate:me.getEndDate()};
    },
    getUrlPrefix: function(){
        var me = this;
        return me.getHost() + me.getMiddleUrl() + me.getVersion() + '/';
    }
});

