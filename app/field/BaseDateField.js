/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('GirocheckMobile.field.BaseDateField', {
    extend: 'Ext.field.DatePicker',
    xtype: 'baseDateField',  
    value: new Date(),
    picker: {
        yearFrom: 2000
        // slotOrder: ['day','month','year'],
    },

    config: {
        label: 'Date',
        name: 'date',
        dateFormat: 'm/d/Y',
        picker: {
            yearFrom: 2000,
            slotOrder: ['month','day','year'] 
        }
    }, 
    getFecha: function () {
        var d = this.getValue(); 
        if(d){
            return (d.getYear() % 1900 + 1900) + (d.getMonth() + 1) + d.getDate()
        } 
    } 
});

