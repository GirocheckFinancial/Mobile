/* 
 /* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('GirocheckMobile.util.Utils', {
    alternateClassName: 'Util',
    statics: {
        animate: function() {
//            try {
//                if (Ext.os.is.iOS)
//                    return true;
//                if (Ext.os.is.Android /*&& parseFloat(Ext.device.Device.version) >= 4.2*/)
//                    return false;
//            } catch (err) {
//                console.log('ERROR ANIMATE: ' + err.message);
//            
            return false;
        },
        vibrate: function(time) {
            if (navigator.notification)
                navigator.notification.vibrate(time ? time : 1000);
        },

        isObjectEmpty: function(obj) {
          if (obj) {
            for (var prop in obj) {
              return false;
            }
          }
          return true;
        },

        processResponse: function(responseRaw, operation) {
           // alert(responseRaw);
            var responseJson = Ext.JSON.decode(responseRaw);
            var resp = operation;
            if (resp) {
                if (resp._response) {
                    resp = resp._response;
                }
                resp.code = responseJson.status;
                 
                resp.success = (responseJson.status === 100);
                resp.data = responseJson.data;
             //   TruckerBK.Global.setLabel(responseJson.label);
          
            }

            switch (responseJson.status) {
                case 100:
                case 403:
                    return responseJson.data;
                    
                case 400:
                    // Ext.Msg.alert(
                    //         i18n.msg.invalid_data,
                    //         i18n.msg.verify_format
                    //         );
                    break;
                case 409:
                // Ext.Msg.alert(
                //             i18n.msg.usuario_en_uso,
                //             i18n.msg.usuario_no_disponible
                //             );
                    break;
                case 503:
                    // Ext.Msg.alert(
                    //         "Version Error",
                    //         i18n.msg.out_of_date
                    //         );
                    break;
                case 500:
                case 502:
                default:
                    // Ext.Msg.alert(
                    // 'Error',
                    //  i18n.msg.notify_error
                    // );
                    break;
               
            }
         //   Loading.stop();
        },
        openNewWindow: function(url) {
            window.open(url, '_system', 'location=yes');
        },
	      cutText: function(text, num) {
	        if (text.length > num) {
	            return text.substring(0, num - 3) + '...';
	        } else {
	            return text;
	        }
        },

        formatAmount: function(amount){   
            var str = "";
            if(amount < 0){
                str =  "-$" + Math.abs(amount);
            }else{
                str =  "+$" + amount;
            } 
            return str;
        }
    }
});

