Ext.define('GirocheckMobile.component.BasePage', {
    extend: 'Ext.Container',
    xtype: 'basepage',
    cls: 'basepage',
    config: {
        padding: '10px 10px 0 10px',
        layout: 'vbox',
        scrollable: true
    },
    destroy: function () {
        var me = this;
        me.titleOrg = null;
        me.callParent(arguments);
    }
});