Ext.define('GirocheckMobile.field.CheckBoxField', {
    extend: 'Ext.field.Checkbox',
    xtype: 'checkBoxField',
    config: {
        title: null,
        subtitle: null,
        labelWidth: '220px',
        cls: 'base-field',
        idRecord: '',
        defaultValue: 'true',
        listeners: {
            check: function() {
                this.setValue('true');
            },
            uncheck: function() {
                this.setValue('false');
            }
        }
    },
    // initialize: function() {       
    //     var me = this;
    //     var label = '<div class="item">';
    //     if (me.getTitle() || me.getLabel()) {
    //         label += '<div class="title">' + (me.getTitle() || me.getLabel()) + '</div>';
    //     }
    //     if (me.getSubtitle()) {
    //         label += '<div class="subtitle">' + me.getSubtitle() + '</div>';
    //     }
    //     label += '</div>';
    //     me.setLabel(label);
    //    // me.updateValues(me.getValue);
    //     me.callParent(arguments);
    // },
    // updateValues: function(value, id) {
    //     if (value && value === 'true') {
    //         this.check();
    //     } else {
    //         this.uncheck();
    //     }
    //     this.setDefaultValue(value);
    //     this.setIdRecord(id);
    // },
    // validate: function() {
    //     return true;
    // },
    // replaceLabel:function(title, subtitle){
    //     var me = this; 
    //     var label = '<div class="item">' +
    //             '<div class="title">' + title + '</div>' +
    //             '<div class="subtitle">' + subtitle + '</div>' +
    //             '</div>';
    //     me.setLabel(label);
    // }
});


