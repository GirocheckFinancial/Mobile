/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('GirocheckMobile.utils.Static', {
    alternateClassName: 'Static',
    singleton: true,
    alias: 'widget.Static',
    config: {
        mainMenu: null
    },
    constructor: function(config) {
        this.initConfig(config);
    },
    createGetMainMenu:function(v){
       if(this.getMainMenu() == null){ 
          this.setMainMenu( Ext.create('GirocheckMobile.component.MainMenu') );
       }
       return this.getMainMenu();
    },
    updateMainManuName:function(name){
      this.createGetMainMenu().down('#menuName').setText(name);
    }
});

