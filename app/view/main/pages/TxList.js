Ext.define('GirocheckMobile.view.main.pages.TxList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.txList',
    xtype: 'txList',
    id:'txList',
    requires: [
        'Ext.plugin.ListPaging',
        'GirocheckMobile.store.TxStore',
        'Ext.plugin.PullRefresh'
    ],
    config: {
        loadingText: 'Performing search...<br>This may take up to 1 minute.',
        emptyText: 'No results found.', 
        flex: 1,
        height: '100%',
        // infinite: true,
        scrollable: true,
        disableSelection: true,
        deferEmptyText: true,
        //  itemHeight: 60,
        autoHeight: true,
        moreElements: true,
        store: 'txStore',
        itemTpl: new Ext.XTemplate(
            '<div>' +
            '<p class="itemDate">{[Util.formatDate(values.date)]}</p>' +
            '<table style="margin:4px 0px 4px 0px">' +
            '<tr><td style="width:100%"><p class="itemDesc">{description}</p></td>' +
            '<td width="40px"><p class=<tpl if="debitOrCredit == \'C\'">itemAmountPossitive<tpl else>itemAmountNegative</tpl>>{[Util.formatAmount(values.amount, values.debitOrCredit)]}</p></td></tr>' +
            '</div>' +
            '</div>'
        ),
        onItemDisclosure: false,
        plugins: [
            {
                xclass: 'Ext.plugin.ListPaging',
                autoPaging: true,
                noMoreRecordsText: 'No more records' 
            },
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullText: 'Pull down to refresh'
            }
        ] 
    }
});