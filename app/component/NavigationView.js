Ext.define('GirocheckMobile.component.NavigationView', {
    extend: 'Ext.navigation.View',
    alternateClassName: 'GirocheckMobile.NavigationView',
    xtype: 'baseNavigationView',
    config: {
        animating: false,
        titleLeft: false,
        defaultBackButtonText: 'Back',
        navigationBar: {
       //     cls: 'mobileapp-titlebar',
          //  animation: TruckerBK.Utils.animate() ? true : false,
            backButton: {
               iconCls: 'arrow_left',
               xtype:'button',
               ui: "normal",
               id:'backButton'
            }
        },
        listeners: {
            activeitemchange: 'onActiveItemChange'
        }
    },
    initialize: function() {
        var me = this;
        // me.callParent(arguments);
        // me.navigationBar = me.down('titlebar');
        // me.navigationBar.backButton = me.navigationBar.down('button');
        // me.navigationBar.backButton.hide();
    },
    onBack:function(){
      //  alert('back');
    },
    showMenuIcon:function(){
        var me = this;

        // me.navigationBar.down('#leftMenu').show();
        // setTimeout(function(){
        //    me.navigationBar.backButton.hide();
        // },50);
       
    },
    onActiveItemChange: function(me, view, oldValue, eOpts) {
   
    },
    
    refreshTitle:function(title){
        if(title){
            this.navigationBar.setTitle(title);
        }else{
            this.navigationBar.setTitle(i18n.app.title);
        }
        
    },
    removeAll: function() {
        var me = this;
        me.callParent(arguments);
        //me.navigationBar.backButtonStack = [];
        //me.navigationBar.down('#rightButton').hide();
    },
    destroy: function() {
        var me = this;
        me.navigationBar = null;
        me.callParent(arguments);
    },
    reset: function() {
        var me = this;
        me.navigationBar.backButton.hide();
    },
    removeAllIcons: function() {
        var me = this;
        me.navigationBar.backButton.hide();
        me.down('#leftMenu').hide(); 
        me.down('#rightButton').hide();
    }
});
