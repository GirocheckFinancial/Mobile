Ext.define('GirocheckMobile.field.BaseTextField', {
    extend: 'Ext.field.Text',
    // xtype: 'baseTextField',
    // config: {
    //     title: null,
    //     subtitle: null,
    //     autoComplete: false,
    //     autoCorrect: false,
    //     autoCapitalize: false,
    //     labelWidth: 'auto',
    //     labelWidth: 150,
    //     inputCls: 'base-input-field',
    //     cls: 'base-field',
    //     required: false,
    //     requiredCls: '',
    //     /*
    //      * An input mask regular expression that will be used to filter the field value after a keyup event get fired. 
    //      */
    //     maskRe: null,
    //     /*
    //      * Regular Expression to validate the field's value. 
    //      */
    //     validateRegExp: null,
    //     idRecord: '',
    //     previousValue: '',
    //     defaultValue: '',
    //     listeners: {
    //         keyup: function(field, event) {
    //             this.doEventKeyUp(field, event);
    //         },
    //         clearicontap: function(field, event) {
    //             this.removeCls('invalidField');
    //             this.setPreviousValue('');
    //         },
    //         focus: function(field, e, eOpts) {
    //             this.doFocus(field, e, eOpts);
    //         },
    //         blur: function(field, e, eOpts) {
    //             this.doBlur(field, e, eOpts);
    //         }
    //     }
    // },
    // initialize: function() {
    //     var me = this;
    //     var label = '<div class="textitem">';
    //     if (me.getTitle() || me.getLabel()) {
    //         label += '<div class="title">' + (me.getTitle() || me.getLabel()) + '</div>';
    //     }
    //     if (me.getSubtitle()) {
    //         label += '<div class="subtitle">' + me.getSubtitle() + '</div>';
    //     }
    //     label += '</div>';
    //     me.setLabel(label);

    //    // me.getComponent().input.dom.setAttribute("spellcheck", "false");
    //     me.callParent(arguments);
    // },
    // doEventKeyUp: function(field, event) {
    //     var me = this;
    //     //code = event.browserEvent.charCode|| event.browserEvent.keyCode || event.browserEvent.which;
    //     //type = event.browserEvent.type;                
    //     //var key = String.fromCharCode(code);
    //     if (me.getMaskRe() && !me.getMaskRe().test(me.getValue())) {
    //         me.setValue(me.getPreviousValue());
    //         return false;
    //         //event.preventDefault();
    //         //event.stopPropagation();
    //     }
    //     me.setPreviousValue(me.getValue());
    // },
    // updateField: function(title, subtitle, value) {
    //     var label = '<div class="item">' +
    //             '<div class="title">' + title + '</div>' +
    //             '<div class="subtitle">' + subtitle + '</div>' +
    //             '</div>';
    //     this.setLabel(label);
    //     this.updateValues(value);
    // },
    // updateValues: function(value, id) {
    //     this.setValue(value.trim());
    //     this.setDefaultValue(value.trim());
    //     this.setIdRecord(id);
    // },
    // validate: function(options) {
    //     var me = this,
    //             options = options || {},
    //             valid = options.parentValid !== undefined ? options.parentValid : true;
    //     if (!me.getReadOnly() && valid) {
    //         if (me.getRequired() && (!me.getValue() || me.getValue().length === 0)) {
    //             Ext.toast(me.config.title + i18n.validation.es_requerido ,1000);
    //             valid = false;
    //         } 

    //         if (valid && me.getValidateRegExp() && !me.getValidateRegExp().test(me.getValue())) {
    //             Ext.toast(i18n.msg.verify_format,1000);
    //             valid = false;
    //         }
    //     }

    //   /*  if (valid) {
    //      //   me.removeCls('invalidField');
    //     } else {
    //      //   me.addCls('color-red');
    //     }  */
    //     return valid;
    // },
    // //Utils methods as a workaround the issue of the keyboard going over the fields
    // getScrollableContainer: function() {
    //     var me = this;
    //     var max = 10;
    //     var scrollableContainer = me.getParent();
    //     while (max-- >= 0 && !scrollableContainer.getScrollable()) {
    //         scrollableContainer = scrollableContainer.getParent();
    //     }
    //     return scrollableContainer.getScrollable() ? scrollableContainer : null;
    // },
    // doFocus: function(field, e, eOpts) {
    //     var me = this,
    //             scrollableContainer = me.getScrollableContainer();

    //      if(me.config.delegateOnFocus){
    //         me.fireEvent('delegateOnFocus');
    //     }

    //     if (scrollableContainer) {
    //         //Ext.defer(function(){scrollableContainer.getScrollable().getScroller().setDisabled(false);},100);            
    //         if (Ext.os.is.Android) {
    //             if (me.getReadOnly())
    //                 return;
    //             var screenHeight = (window.innerHeight > 0) ? window.innerHeight : screen.height;
    //             var ost = me.element.dom.offsetTop;

    //             if ((screenHeight - ost) > 350)
    //                 return;

    //             Ext.defer(function() {
    //                 var scrollableContainer = me.getScrollableContainer();
    //                 if (scrollableContainer) {

    //                     if (!scrollableContainer.scrollerPositionBeforeShowKeyBoard) {
    //                         scrollableContainer.scrollerPositionBeforeShowKeyBoard = {
    //                             x: scrollableContainer.getScrollable().getScroller().position.x,
    //                             y: scrollableContainer.getScrollable().getScroller().position.y
    //                         };
    //                     }


    //                     scrollableContainer.getScrollable().getScroller().addListener({
    //                         scrollend: {fn: function(me, x, y, eOpts) {
    //                                 //Avoiding issue when we call the scrollTo with animation,
    //                                 //the scroll always go back to its initial position
    //                                 scrollableContainer.getScrollable().getScroller().scrollTo(0, ost);
    //                                 scrollableContainer.animating = false;
    //                             }, scope: me, single: true}
    //                     });

    //                     var animation = {
    //                         duration: 200
    //                     };
    //                     scrollableContainer.animating = true;
    //                     scrollableContainer.getScrollable().getScroller().scrollTo(0, ost, animation);
    //                 }
    //             }, 150);
    //         }
    //     }

    // },
    // doBlur: function(field, e, eOpts) {
    //     var me = this,
    //             scrollableContainer = me.getScrollableContainer();

    //    // me.validate();
    //     if (scrollableContainer) {
    //         //scrollableContainer.getScrollable().getScroller().setDisabled(true);


    //         if (Ext.os.is.Android) {
    //             Ext.defer(function() {
    //                 var scrollableContainer = me.getScrollableContainer();

    //                 if (scrollableContainer && scrollableContainer.scrollerPositionBeforeShowKeyBoard) {
    //                     if (scrollableContainer && !scrollableContainer.animating) {
    //                         var animation = {
    //                             duration: 200
    //                         };
    //                         scrollableContainer.getScrollable().getScroller()
    //                                 .scrollTo(
    //                                         scrollableContainer.scrollerPositionBeforeShowKeyBoard.x,
    //                                         scrollableContainer.scrollerPositionBeforeShowKeyBoard.y,
    //                                         animation);
    //                         scrollableContainer.scrollerPositionBeforeShowKeyBoard = null;
    //                     }
    //                 }
    //             }, 200);
    //         }
    //     }
    //     if(me.config.delegateOnBlur){
    //         me.fireEvent('delegateOnBlur');
    //     }
        
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