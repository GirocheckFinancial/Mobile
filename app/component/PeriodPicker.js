Ext.define('GirocheckMobile.component.PeriodPicker', {
    extend:'Ext.ActionSheet',
    xtype: 'periodPicker',
    MONTH_IN_MILLIS:30 * 24 * 60 * 60 * 1000,
    config: {
         hideOnMaskTap : true,
        hidden        : true,
        enter         : 'bottom',
        cls:'periodPicker', 
        items:[
                {
                    xtype  : 'component',  
                    cls:'periodPickerHeader',
                    html   : 'Select Period'
                },
                {
                    xtype: 'fieldset',
                    cls:'periodPickerFieldset',
                    items: [{
                    itemId: 'periodStart',
                    xtype:'baseDateField',
                    cls:'centered-label',
                    value:new Date(),
                    label:'From:'
                 }]
                },
              {
                    xtype: 'fieldset',
                    cls:'periodPickerFieldset',
                    items: [{
                    itemId: 'periodEnd',
                    xtype:'baseDateField',
                    cls:'centered-label',
                    value:new Date(),
                    label:'To:'
                 }]
                },
                 {
                     xtype: 'segmentedbutton',
                     docked:'bottom',
                     defaults:{
                            height : 50,
                            flex:1
                     },
                     items:[
                      {
                        xtype:'button',
                        itemId:'periodPickerAccept',
                        text:'Accept',
                        ui: 'confirm',
                        cls: 'mobileapp-button'
                     },{
                        xtype:'button',
                        itemId:'periodPickerCancel',
                        ui: 'decline',
                        text:'Cancel'
                      }
                 ]
                } 
            ]
    },
    initialize: function() {
        this.callParent();   
         var me = this; 
         me.down('#periodStart').setValue(new Date( (new Date).getTime() - 30 * 24 * 60 * 60 * 1000));
  
          me.down( '#periodPickerCancel' ).addListener( {
                    tap: { fn: me.onHide, scope: me }
            });     
    },
    getValues:function(view){
         var me = this, 
         startDate = me.down('#periodStart'),
         endDate = me.down('#periodEnd'),
         values = {};

         if(!endDate || !startDate){
             Ext.toast('Required Value.', 3000);
             return null;
         }

         var diff = (endDate || new Date()).getValue().getTime() - (startDate || new Date()).getValue().getTime();
 
         if(diff < 0){
             Ext.toast('Incorrect date range.', 3000);
             return null;
         }

         if(diff > me.MONTH_IN_MILLIS){
             Ext.toast('Date Renge must to be less than one month.', 3000);
             return null;
         }

         var periodStart = me.down('#periodStart').getFecha();
         var periodEnd = me.down('#periodEnd').getFecha();

         Global.setStartDate(periodStart);
         Global.setEndDate(periodEnd);

         values = {startDate:periodStart, endDate:periodEnd };
         this.hide();
         return values;
    },
    onHide:function(index){
        this.hide();
    }
} );