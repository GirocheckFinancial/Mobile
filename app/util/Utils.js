/* 
 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('GirocheckMobile.util.Utils', {
    alternateClassName: 'Util',
    statics: {
        afterLogin: function (response) {
            if (response) {
                Global.setLoginInfo(response);
            }

            Ext.getStore('txstore').load();
            var balance = Global.getBalance();

            if (balance) {
                if (balance.indexOf('.') > -1) {
                    var arrayBalance = balance.split('.');
                    Ext.getCmp('balanceAmount').setHtml(arrayBalance[0]);

                    var cents = arrayBalance[1].length == 1 ? arrayBalance[1] + '0' : arrayBalance[1];
                    Ext.getCmp('balanceCents').setHtml(cents);
                }else{
                    Ext.getCmp('balanceAmount').setHtml(balance);
                    Ext.getCmp('balanceCents').setHtml('00');
                }
            }
            Ext.getCmp('main').setActiveItem(Ext.getCmp('mainNavView'));
            Ext.getCmp('authTabPanel').pop();
            Static.updateMainManuName(Global.getClientName());
            Ext.getCmp('authTabPanel').toggleToolBar(false);

        },
        formatAmount: function (amount, debitOrCredit) {
            return (debitOrCredit == 'D' ? '-' : '+') + '$' + amount;
        },
        formatDate: function (date) {   //  MM/dd/yyyy
            if (!date) return "";

            var y = date.substring(0, 4);
            var m = date.substring(4, 6);
            var d = date.substring(6);
            return m + '/' + d + '/' + y;
        },
        formatOutputDate: function (d) {   ///yyyyMMdd
            if (d) {
                var y = d.getYear() % 1900 + 1900;
                var m = d.getMonth() + 1;
                m = m < 10 ? '0' + m : m;
                var d = d.getDate();
                d = d < 10 ? '0' + d : d;
                return y + '' + m + '' + d
            }
        },
        initializeDateRange: function () {
            var me = this,
                today = new Date(),
                monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);

            Global.setStartDate(me.formatOutputDate(monthAgo));
            Global.setEndDate(me.formatOutputDate(today));
        },
        getDateRangeLabel: function () {
            if (!Global.getStartDate()) {
                Util.initializeDateRange();
            }

            return i18n.utils.from + this.formatDate(Global.getStartDate()) + i18n.utils.to + this.formatDate(Global.getEndDate());
        }
    }
});

