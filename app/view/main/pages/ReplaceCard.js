/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('GirocheckMobile.view.main.pages.ReplaceCard', {
    extend: 'GirocheckMobile.component.BaseViewPage',
    xtype: 'replaceCard',
    id: 'replaceCard',
    config: {
        title: 'Replace Card',
        doFocus: false
    },
    scrollable: true,
    requires: [
        'GirocheckMobile.controller.MainController',
        'GirocheckMobile.field.BaseTextField'
    ],
    controller: 'mainController',
    items: [
        {
            xtype: 'fieldset',
            margin: '20 0 0 0',
            items: [ 
            { 
                xtype: 'baseTextField',
                    fieldId: 'newCard',
                    name: 'card',
                    inputType: 'password',
                    regExp: /^[0-9]{16}$/,
                    regExtErrorMsg: 'Credit Card number must to contain 16 digits',
                    placeHolder: 'New Card Number',
                    hint: 'Please enter your new VoltCash Card number',}
            ]
        },
        {
            flex: 1,
            xtype: 'panel' 
        }, {
            id: 'replaceCardAcceptButton',
            margin: '0 0 10 0',
            xtype: 'basebutton',
            text: 'Accept',
            iconCls: 'pictos pictos-check2',
            listeners: {
                tap: 'doReplaceCard'
            }
        }
    ]
});
