Ext.define('GirocheckMobile.i18n.I18N', {
    alternateClassName: 'i18n',
    alias: 'widget.gloi18nbal',
    requires: [
       'GirocheckMobile.i18n.locales.defaultLocale',
       'GirocheckMobile.i18n.locales.en'
    ],
    singleton: true,
    constructor: function(config) {
        var lang = window.navigator.userLanguage || window.navigator.language
 
        if(lang==='undefined'){ //don't care about region
            lang = 'defaultLocale';
        }else{
            lang = lang.substring(0,2);
             if(lang != 'en'){
                lang = 'defaultLocale';
             } 
        } 
        return Ext.create('GirocheckMobile.i18n.locales.' + lang, config);
    }
});