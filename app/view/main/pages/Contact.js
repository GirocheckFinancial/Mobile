Ext.define('GirocheckMobile.view.main.pages.Contact', {
    extend: 'GirocheckMobile.component.BaseViewPage',
    xtype: 'contact',
    config: {
        title: 'Contact',
        padding: '10px 10px 0 10px',
        cls: 'login',
        id: 'contact',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [
            {
                width: '100%',
                html: '<div><br><h2  style="text-align:center">Girocheck Financial Inc<h2><br><br><br>' +
                '<b>Phone Number: </b>(305) 225-5059 <br><br>' +
                '<b>Email: </b> support@girocheck.com <br><br>' +
                '<b>Website: </b>http://www.girocheck.com<br><br>' +
                '<b>Address: </b>703 Nw 62nd Ave Ste 230 Miami, Florida 33126-4686 United States'
            }]
    }
});