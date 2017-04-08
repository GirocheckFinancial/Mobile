 
Ext.define('GirocheckMobile.view.main.pages.ReplaceCard', {
    extend: 'GirocheckMobile.component.BaseViewPage',
    xtype: 'replaceCard',
    id: 'replaceCard',
    config: {
        title: i18n.replaceCard.title,
        doFocus: false
    },
    scrollable: true,
    requires: [
        'GirocheckMobile.controller.MainController',
        'GirocheckMobile.field.BaseTextField',
        'GirocheckMobile.field.CardField'
    ],
    controller: 'mainController',
    items: [
        {
            xtype: 'fieldset',
            margin: '20 0 0 0',
            items: [
                {
                    xtype: 'cardField',
                    fieldId: 'newCard',
                    name: 'card',
                    placeHolder: i18n.replaceCard.newCardNumber
                }
            ]
        },
        {
            flex: 1,
            xtype: 'panel'
        }, {
            id: 'replaceCardAcceptButton',
            margin: '0 0 10 0',
            xtype: 'basebutton',
            text: i18n.replaceCard.accept,
            iconCls: 'pictos pictos-check2',
            listeners: {
                tap: 'doReplaceCard'
            }
        }
    ]
});
