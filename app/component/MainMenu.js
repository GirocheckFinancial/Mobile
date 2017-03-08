Ext.define('GirocheckMobile.component.MainMenu', {
    extend: 'Ext.Menu',
    xtype: 'mainMenu',
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
                iconAlign:'right',
                cls: ['menu-button'],
                handler: function () {
                    Ext.Viewport.hideMenu('left');
                }
            },
            {
                xtype: 'button',
                text: 'Update Card',
                iconCls: 'fa fa-angle-right',
                iconAlign:'right',
                cls: ['menu-button'],
                handler: function () {
                    Ext.Viewport.hideMenu('left');
                }
            },
            {
                xtype: 'button',
                text: 'Logout', 
                iconCls: 'fa fa-angle-right',
                iconAlign:'right',
                cls: ['menu-button-bottom', 'menu-button-down'],
                handler: function () {
                    Ext.Viewport.hideMenu('left');
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
                iconAlign:'right',
                cls: ['menu-button', 'menu-button-top', 'menu-button-header'],
                handler: function () {
                    Ext.Viewport.hideMenu('left');
                }

            },
            {
                xtype: 'button',
                text: 'FAQ',
                iconCls: 'fa fa-angle-right',
                iconAlign:'right',
                cls: ['menu-button-bottom', 'menu-button-down'],
                handler: function () {
                }
            }, 
            {
                xtype: 'spacer'
            },

            {
                height: 70,
                // cls: 'menu-space',
                html: '<a href="">Girocheck Financial Inc</a><br>',
                
                cls: 'menu-lebel',

            }
        ]
    }
});