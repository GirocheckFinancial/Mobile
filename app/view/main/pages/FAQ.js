Ext.define('GirocheckMobile.view.main.pages.FAQ', {
    extend: 'GirocheckMobile.component.BaseViewPage',
    xtype: 'faq',
    config: {
        title: 'FAQ',
        padding: '10px 10px 0 10px',
        cls: 'login',
        id: 'faq',
        layout: {
            type: 'vbox',
            align: 'stretch'
        },
        items: [
            {
                width: '100%',
                html: '<div><br><h1  style="text-align:center">Frequently asked questions<h1><br><br>' +
                '<b>Question #1: </b> <br>Lorem ipsum sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br>' +
                '<b>Question #2: </b> <br>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br><br>' +
                '<b>Question #3: </b> <br>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <br><br>' +
                '<b>Question #4: </b> <br>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br><br>'
            }]
    }
});