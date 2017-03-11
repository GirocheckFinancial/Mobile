Ext.define('GirocheckMobile.component.Loading', {
    extend: 'Ext.LoadMask',
    alternateClassName: 'Loading',
    xtype: 'loading',
    singleton: true,
    config: {
        cls: 'loading',
        loaded: false,
        loading: false,
        hidden: true,
        hideAnimation: {
            type: 'fadeOut',
            duration: 250,
            easing: 'ease-out'
        },
        showAnimation: {
            type: 'fadeIn',
            duration: 500,
            easing: 'ease-out'
        }
    },
    start: function(params) {
        var me = this,
                params = params || {},
                //message = typeof params.message !== 'undefined' ? params.message : i18n.label.loading,
                showloading = params.showloading,
                message = /*params.message || */'',
                indicator = typeof params.indicator !== 'undefined' ? params.indicator : true;

        if (!me.getLoading()) {
            if (typeof ActivityIndicator !== 'undefined') {
                ActivityIndicator.show(message, showloading);
            } else {
                me.setMessage(message);
                me.setIndicator(indicator);
                if (!me.getLoaded()) {
                    Ext.Viewport.setMasked(me);
                    me.setLoaded(true);
                } else {
                    Ext.Viewport.mask();
                }
            }
            me.setLoading(true);
        }
    },
    stop: function() {
        var me = this;

        if (me.getLoading()) {
            Ext.defer(function() {
                if (typeof ActivityIndicator !== 'undefined') {
                    ActivityIndicator.hide();
                } else {
                    Ext.Viewport.setMasked(false);

                }
                me.setLoading(false);
            }, 800);
        }
    }
});