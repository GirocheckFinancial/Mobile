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
               html: 'Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br>' +
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br>' +
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br>' +
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br>'
            }  
        ]
    } 
});