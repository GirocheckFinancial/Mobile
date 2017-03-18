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
                Ext.getCmp('authTabPanel').pop();
                Static.updateMainManuName(response.clientName);
                Ext.getCmp('authTabPanel').toggleToolBar(false);
            }
        },
        formatDate:function(date){
            if(!date)return "";

            var y = date.substring(0,4);
            var m = date.substring(4,6);
            var d = date.substring(6);
            return m + '/' + d + '/' + y;
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

