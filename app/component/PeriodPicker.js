Ext.define('GirocheckMobile.component.PeriodPicker', {
    extend: 'Ext.ActionSheet',
    xtype: 'periodPicker',
    MONTH_IN_MILLIS: 30 * 24 * 60 * 60 * 1000,
    config: {
        hideOnMaskTap: true,
        hidden: true,
        enter: 'bottom',
        cls: 'periodPicker',
        items: [
            {
                xtype: 'component',
                cls: 'periodPickerHeader',
                html: i18n.periodPicker.selectPeriod
            },
            {
                xtype: 'fieldset',
                cls: 'periodPickerFieldset',
                items: [{
                    itemId: 'periodStart',
                    xtype: 'baseDateField',
                    cls: 'centered-label',
                    value: new Date(),
                    label: i18n.periodPicker.from
                }]
            },
            {
                xtype: 'fieldset',
                cls: 'periodPickerFieldset',
                items: [{
                    itemId: 'periodEnd',
                    xtype: 'baseDateField',
                    cls: 'centered-label',
                    value: new Date(),
                    label: i18n.periodPicker.to
                }]
            },
            {
                xtype: 'segmentedbutton',
                docked: 'bottom',
                defaults: {
                    height: 50,
                    flex: 1
                },
                items: [
                    {
                        xtype: 'button',
                        itemId: 'periodPickerAccept',
                        text: i18n.periodPicker.accept,
                        ui: 'confirm',
                        cls: 'mobileapp-button'
                    }, {
                        xtype: 'button',
                        itemId: 'periodPickerCancel',
                        ui: 'decline',
                        text: i18n.periodPicker.cancel
                    }
                ]
            }
        ]
    },
    initialize: function () {
        this.callParent();
        var me = this;
        me.down('#periodStart').setValue(new Date((new Date).getTime() - 30 * 24 * 60 * 60 * 1000));

        me.down('#periodPickerCancel').addListener({
            tap: { fn: me.onHide, scope: me }
        });
    },
    getValues: function (view) {
        var me = this,
            startDate = me.down('#periodStart'),
            endDate = me.down('#periodEnd'),
            values = {};

        if (!endDate || !startDate) {
            Ext.toast(i18n.periodPicker.requiredValue, 3000);
            return null;
        }

        var diff = (endDate || new Date()).getValue().getTime() - (startDate || new Date()).getValue().getTime();

        if (diff < 0) {
            Ext.toast(i18n.periodPicker.incorrect, 3000);
            return null;
        }

        if (diff > me.MONTH_IN_MILLIS) {
            Ext.toast(i18n.periodPicker.lessThan1Month, 3000);
            return null;
        }

        var periodStart = me.down('#periodStart').getFecha();
        var periodEnd = me.down('#periodEnd').getFecha();

        Global.setStartDate(periodStart);
        Global.setEndDate(periodEnd);

        values = { startDate: periodStart, endDate: periodEnd };
        this.hide();
        return values;
    },
    onHide: function (index) {
        this.hide();
    }
});