Ext.define('GirocheckMobile.field.BaseTextField', {
    extend: 'Ext.container.Container',
    xtype: 'baseTextField',
    layout: 'hbox',
    requires: ['Ext.tip.ToolTip'],
    margin: 2,
    tip: null,
    config: {
        fieldId: null,
        placeHolder: null,
        hint: null,
        inputType: null,
        required: true,
        regExp: null,
        regExtErrorMsg: null,
        minLength: null,
        equalToField:null,
        value:null
    },
    initialize: function () {
        var me = this,
            config = me.config;

        me.add({
            xtype: 'textfield',
            id: config.fieldId,
            name: config.name || config.fieldId,
            placeHolder: config.placeHolder,
            inputType: config.inputType || 'text',
            flex: 1,
            value: config.value
        });

        if (config.hint) {
            me.add({
                xtype: 'button',
                text: '<spam class="hint">?</spam>',
                margin: '3 0 0 0',
                //  width:2,
                style: {
                    'background-image': 'none',
                    'border': 'none'
                },
                listeners: {
                    tap: function () {
                        me.showTip();
                    }
                }
            });
        }

        me.callParent(arguments);
    },
    showTip: function (text) {
        var me = this;
        if (text) {
            me.createTip(text).show();
        } else {
            if (!me.tip) {
                me.tip = me.createTip(me.config.hint);
            }
            me.tip.show();
        }
    },
    createTip: function (text) {
        var me = this;
        return Ext.create('Ext.tip.ToolTip', {
            target: me.el,
            anchor: 'bottom',
            html: text || me.config.hint
        });
    },
    validate: function () { 
        var me = this,
            config = me.config,
            textfield = me.down('textfield'),
            val = textfield.getValue();

        if (config.required && !val) {
            me.showTip('Required Field');
            return false;
        } 
        
        if(config.equalToField){ //Just for password fields
            if(me.up().down('#' + config.equalToField).getValue() != val){
                 me.showTip("Password fields don't match");
                 return false;
            }
        }

        if (config.minLength && val.length < config.minLength) {
            me.showTip('Enter at least ' + config.minLength + ' characters');
            return false;
        }

        if (config.regExp && !config.regExp.test(val)) {
            me.showTip(config.regExtErrorMsg || config.hint);
            return false;
        }  
        return true;
    }
});