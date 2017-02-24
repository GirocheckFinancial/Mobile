Ext.define('GirocheckMobile.component.MainMenu', {
    extend:'Ext.Menu',
    xtype: 'mainMenu',
    config: {
       width: 250,
            scrollable: 'vertical',
            layout:'vbox',
            items: [
                {
                    itemId:'menuName',
                    xtype: 'button',
                    text: '',
                    iconCls:'user',
                    cls:['menu-button','menu-button-top']
                },
                 {
                    xtype: 'button',
                    text: 'Logout',
                    iconCls:'exit',
                    cls:['menu-button','menu-button-arrow','menu-button-down'],
                    handler:function(){
                        Ext.Viewport.hideMenu('left'); 
                    }
                },
                {
                    xtype: 'button',
                    text: 'Settings',
                    iconCls:'settings',
                    cls:['menu-button','menu-button-top']
                },
               {
                    xtype: 'button',
                    text: 'Categories',
                    cls:['menu-button','menu-button-arrow','menu-button-middle'],
                    handler:function(){
                        Ext.Viewport.hideMenu('left'); 
                    }
                    
                },
                {
                    xtype: 'button',
                    text: 'Reparation Types',
                    cls:['menu-button','menu-button-arrow','menu-button-down'],
                    handler:function(){ 
                    }
                },
                {
                    xtype: 'button',
                    text: 'Contact',
                    iconCls:'telegram',
                    cls:['menu-button','menu-button-arrow','mtop-30'],
                    handler:function(){ 
                    }
                },
                 {
                    xtype:'spacer'
                },
                 
              {
                    html: '<p>Powered By</p><a href="http://simplebookkeeping.org">SimpleBookKeeping.org</a>',
                    cls:'menu-lebel'                
                } 
            ]
    }
} );