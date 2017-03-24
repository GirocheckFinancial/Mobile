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
                text: 'Roberto Rodriguez',
                iconCls: 'user',
                cls: ['menu-button-header', 'menu-button-top']
            },
            {
                xtype: 'button',
                text: 'Profile',
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
                text: 'Replace Card',
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
                text: 'Logout',
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
                text: 'Contact',
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
                text: 'Legal',
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
                text: 'FAQ',
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