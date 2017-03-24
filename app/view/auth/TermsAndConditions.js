Ext.define('GirocheckMobile.view.auth.TermsAndConditions', {
    extend:'GirocheckMobile.component.BaseViewPage',
    xtype: 'termsAndConditions', 
    config: {
        title: 'Terms And Conditions',
        padding: '10px 10px 0 10px',
        cls: 'login',
        id: 'termsAndConditions',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        items: [
            {
                width: '100%',
               html: '<div style="padding:10px; text-align:justify;">The VoltCash Prepaid Mastercard is issued by Metabank®, Member FDIC, pursuant to license by Mastercard International Incorporated.<br><br>' +
            'For the complete Terms and Conditions applicable to the use of your card and your use of this App, tap <a href="http://www.voltcash.com/tcs">here</a> to be displayed within your mobile browser.<br><br>' +
            'If you are unable to access the Internet, please contact customer service at 1-800-249-3042, option 4 for technical support.<br><br>' +
            'Standard data rates, fees, and charges may apply.<br><br>'
            }  
        ]
    } 
});