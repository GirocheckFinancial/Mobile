Ext.define('GirocheckMobile.component.BaseViewPage', {
    extend: 'GirocheckMobile.component.BasePage',
    xtype: 'baseViewPage',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    listeners: {
        activate: function (newActiveItem, container, oldActiveItem, eOpts) {
               this.onActivate(newActiveItem, container, oldActiveItem, eOpts);
        },
        deactivate: function (oldActiveItem, container, newActiveItem, eOpts) {
                 this.onDeactivate(newActiveItem, container, oldActiveItem, eOpts);
        }
    },
    onActivate: function (newActiveItem, mainNavView, oldActiveItem, eOpts) {
        var me = this;  
        Ext.getCmp('mainNavView').getNavigationBar().down('#leftMenu').hide(); 
        Ext.getCmp('mainNavView').getNavigationBar().down('#searchButton').hide(); 
        Ext.getCmp('mainNavView').getNavigationBar().down('#more-options').hide(); 

    },
    onDeactivate: function (newActiveItem, mainNavView, oldActiveItem, eOpts) {
        var me = this;
        Ext.getCmp('mainNavView').getNavigationBar().down('#leftMenu').show();
        Ext.getCmp('mainNavView').getNavigationBar().down('#searchButton').show();
        Ext.getCmp('mainNavView').getNavigationBar().down('#more-options').show();
     //   me.destroy();
    }
});