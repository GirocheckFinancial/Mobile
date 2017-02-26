Ext.define('GirocheckMobile.view.main.TransactionListItem', {
    extend: 'GirocheckMobile.component.BaseListItem',
    xtype: 'txlistitem',
    requires: [
        'GirocheckMobile.component.BaseListItem'
    ],
   config: {
       info: {
            tpl: [ 
                '<div class="emptyItem" style="margin:10px!important">Empty Label</div>',

            //     '<tpl if="emptyLabel">',
            //     '<div class="emptyItem" style="margin:10px!important">{emptyLabel}</div>',
            //     '<tpl else>',
            //     '<div class="item">',
            //     '<div class="title">12-4-1988</div>',
            //     '<div class="subtitle">4',
            //     '<tpl if="porviajes === true"> Viajes'  ,
            //     '<tpl else> Horas',
            //     '</tpl>',
            //     ' X 2 dolares</div>',
            //     '</div>',
            //   //  '<tpl if="amount">',
            //     '<div class="plainbadge" style="margin-top:10px!important">23.56</div>',
            //   //  '</tpl>' 
            //   '</tpl>' 
            ],
      },
        itemType: 'standard'
    } 
});

		