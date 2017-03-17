Ext.define('GirocheckMobile.view.auth.TermsAndConditions', {
    extend: 'GirocheckMobile.component.BasePage',
    xtype: 'termsAndConditions', 
    config: {
        title: 'Terms And Conditions',
        padding: '10px 10px 0 10px',
        cls: 'login',
        id: 'forgotPassword',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },

        items: [
            {
                width: '100%',
                html: '<div style="text-align:center"><br><h3>tHESE ARE OUTR TERMS<h3><br>' +
                '<span>Please enter the following information, so we can identify your account,' +
                ' and send you an Access Code by Email or SMS that you can use to login' +
                ' and reset your password.</span></div>'
            }  
        ]
    } 
});