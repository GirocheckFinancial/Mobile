Ext.define('GirocheckMobile.view.auth.TermsAndConditions', {
    extend:'GirocheckMobile.component.BaseViewPage',
    xtype: 'termsAndConditions', 
    config: {
        title: i18n.termsAndConditions.title,
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
               html: '<div style="padding:10px; text-align:justify;">' + i18n.termsAndConditions.text + '<br><br>'
            }  
        ]
    } 
});