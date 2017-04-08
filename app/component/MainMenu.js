Ext.define('GirocheckMobile.component.MainMenu', {
    extend: 'Ext.Menu',
    xtype: 'mainMenu',
    requires: [
        'GirocheckMobile.controller.MainController'
    ],
    controller: 'mainController',
    config: {
        width: 250,
        scrollable: 'vertical',
        layout: 'vbox',
        items: [
            {
                itemId: 'menuName',
                xtype: 'button',
                text: '',
                iconCls: 'user',
                cls: ['menu-button-header', 'menu-button-top']
            },
            {
                xtype: 'button',
                text: i18n.profile.title,
                iconCls: 'fa fa-angle-right',
                iconAlign: 'right',
                cls: ['menu-button'],
                page: 'GirocheckMobile.view.main.pages.Profile',
                listeners: {
                    tap: 'goTo'
                }
            },
            {
                xtype: 'button',
                text: i18n.replaceCard.title,
                iconCls: 'fa fa-angle-right',
                iconAlign: 'right',
                page: 'GirocheckMobile.view.main.pages.ReplaceCard',
                cls: ['menu-button'],
                listeners: {
                    tap: 'goTo'
                }
            },
            {
                xtype: 'button',
                text:i18n.mainMenu.logout,
                iconCls: 'fa fa-angle-right',
                iconAlign: 'right',
                cls: ['menu-button-bottom', 'menu-button-down'],
                listeners: {
                    tap: 'onLogout'
                }
            },
            {
                height: 20,
                cls: 'menu-space'
            },
            {
                xtype: 'button',
                text:i18n.contact.title,
                iconCls: 'fa fa-angle-right',
                iconAlign: 'right',
                page: 'GirocheckMobile.view.main.pages.Contact',
                cls: ['menu-button', 'menu-button-top', 'menu-button-header'],
                listeners: {
                    tap: 'goTo'
                } 
            },
            {
                xtype: 'button',
                text:i18n.mainMenu.legal,
                iconCls: 'fa fa-angle-right',
                iconAlign: 'right',
                page:'GirocheckMobile.view.auth.TermsAndConditions',
                cls: ['menu-button'],
                listeners: {
                    tap: 'goTo'
                },
            },
            {
                xtype: 'button',
                text: i18n.faq.title,
                iconCls: 'fa fa-angle-right',
                iconAlign: 'right',
                page: 'GirocheckMobile.view.main.pages.FAQ',
                cls: ['menu-button-bottom', 'menu-button-down'],
                listeners: {
                    tap: 'goTo'
                }
            },
            {
                xtype: 'spacer'
            },
            {
                height: 70,
                html: '<a href="">Girocheck Financial Inc</a><br>',
                cls: 'menu-lebel'
            }
        ]
    }
});