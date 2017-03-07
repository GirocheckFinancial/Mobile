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
                Global.setLoginInfo(response.clientId, response.token);
                Ext.getStore('txstore').load();

                var balance = response.balance;
                if (balance) {
                    if (balance.indexOf('.') > -1) {
                        var arrayBalance = balance.split('.');
                        Ext.getCmp('balanceAmount').setHtml(arrayBalance[0]);

                        var cents = arrayBalance[1].length == 1 ? arrayBalance[1] + '0' : arrayBalance[1];
                        Ext.getCmp('balanceCents').setHtml(cents);
                    }
                }
                Ext.getCmp('main').setActiveItem(Ext.getCmp('mainNavView'));
            }
        },

        isObjectEmpty: function (obj) {
            if (obj) {
                for (var prop in obj) {
                    return false;
                }
            }
            return true;
        },

        openNewWindow: function (url) {
            window.open(url, '_system', 'location=yes');
        },
        cutText: function (text, num) {
            if (text.length > num) {
                return text.substring(0, num - 3) + '...';
            } else {
                return text;
            }
        },

        formatAmount: function (amount) {
            var str = "";
            if (amount < 0) {
                str = "-$" + Math.abs(amount);
            } else {
                str = "+$" + amount;
            }
            return str;
        }
    }
});

