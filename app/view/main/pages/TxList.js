Ext.define('GirocheckMobile.view.main.pages.TxList', {
    extend: 'Ext.dataview.List',
    alias: 'widget.txList',
    xtype: 'txList',
    id: 'txList',
    requires: [
        'Ext.plugin.ListPaging',
        'GirocheckMobile.store.TxStore',
        'Ext.plugin.PullRefresh'
    ],
    config: {
        loadingText:i18n.txlist.loadingText,
        emptyText: i18n.txlist.emptyText,
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
                noMoreRecordsText: i18n.txlist.noMoreRecordsText
            },
            {
                xclass: 'Ext.plugin.PullRefresh',
                pullText: i18n.txlist.pullText
            }
        ]
    }
});