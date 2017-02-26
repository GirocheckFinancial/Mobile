Ext.define('GirocheckMobile.model.TxModel', {
    extend:'Ext.data.Model',
    config: {
        fields: [
            {name: 'name', type: 'string'} 
        ],
        validations: [
//            {type: 'presence', name: 'subTotalAmount'}
            //{type: 'presence', name: 'receiptEmailSMS'},
            //{type: 'format', name: 'receiptEmailSMS', matcher: /([0-9]{6,10})|(^([a-zA-Z0-9_.\-+])+@(([a-zA-Z0-9\-])+\.)+[a-zA-Z0-9]{2,4}$)/}
        ]
    },
    validate: function(options) {
//        var errors = this.callParent(arguments),
//                subTotalAmount = this.get('subTotalAmount');
//
//        if (options && options.transactionToRefundModel) {
//            var refundableAmount = TruckerBK.Format.extractDigits(options.transactionToRefundModel.get('refundableAmount'));
//            if (subTotalAmount > refundableAmount) {
//                errors.add({
//                    field: 'subTotalAmount',
//                    message: 'The amount enter to refund is bigger than the refundable amount'
//                });
//            }
            // var addressErrors = errors.filter('field', /firstName|lastName|line1|line2|city|state|postalCode/);
            //errors.removeAll(addressErrors.items);
//        }
//
//        return errors;
    },
    save: function(options, scope) {
//        var me = this,
//                success = options.success;
//
//        Ext.apply(options, {
//            success: function(record, operation) {
//                var ticket = me.getTicket();
//
//                if (ticket) {
//                    ticket.save({
//                        success: function() {
//                            Ext.callback(success, scope, [record, operation]);
//                        }
//                    });
//                }
//            }
//        });
//
//        me.callParent([options, scope]);
    },
    copy: function(newId) {
//        var me = this,
//                idProperty = me.getIdProperty(),
//                raw = Ext.apply({}, me.raw),
//                data = Ext.apply({}, me.data);
//
//        delete raw[idProperty];
//        delete data[idProperty];
//
//        return new me.self(null, newId, raw, data);
    }
});