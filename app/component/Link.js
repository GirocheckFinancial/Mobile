Ext.define('GirocheckMobile.component.Link', {
    extend: 'Ext.Component',
    xtype: 'link',
    config: {
        cls: 'link',
        url: null,
        style: 'font-size: 0.75em;'
    },
    initElement: function() {
        var me = this;

        me.callParent();

        me.element.on({
            scope: me,
            tap: 'onLinkTap'
        });
    },
    onLinkTap: function() {
      //  TruckerBK.Utils.openNewWindow(this.getUrl());
    }
});