Ext.define('GirocheckMobile.view.main.TxList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.txList',
    xtype: 'txList',
    requires: [
        'GirocheckMobile.view.main.TxListItem',
        'Ext.plugin.ListPaging',
        'GirocheckMobile.store.TxStore'
    ],

    config: {
        //    defaultType: 'txListItem',
        loadingText: 'Performing search...<br>This may take up to 1 minute.',
        emptyText: 'No results found.',
        useComponents: true,
        store: 'txStore',
        itemTpl: new Ext.XTemplate(
            '<div>' +
            '<p class="itemDate">{date}</p>' +
            '<table style="margin:4px 0px 4px 0px">' +
            '<tr><td style="width:100%"><p class="itemDesc">{description}</p></td>' +
            '<td width="40px"><p class=<tpl if="amount &gt; 0">itemAmountPossitive<tpl else>itemAmountNegative</tpl>>{[Util.formatAmount(values.amount)]}</p></td></tr>' +
            '</div>' +
            '</div>'
        ),
        onItemDisclosure: false,
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                autoPaging: true
            }
        ]
    } 
});