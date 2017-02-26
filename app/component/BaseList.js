Ext.define('GirocheckMobile.component.BaseList', {
    extend: 'Ext.List',
    xtype: 'baselist',
    config: {
        enableMasked: false,
       // masked: { xtype: 'loadmask',message: 'loading' },
        deleteable: true,
        cls: 'mobileapp-list',
        emptyText: 'No item(s) to show',
        margin: '10 0 10 0',
        height: '100%',
        infinite: true,
        scrollable: true,
        disableSelection: true,
        deferEmptyText: true,
        itemHeight: 60,
        autoHeight: true,
        moreElements:true,
        listeners: {
            itemtap: function(me, index, target, record, e, eOpts) {
                    
                    // var me = this,
                    //         now = Date.now();
                    // if (now < me.lastTapTimestamp + 1500) {
                    //     me.lastTapTimestamp = now;
                    //     return;
                    // }
                    // me.lastTapTimestamp = now;
                    
                    // me.fireEvent('lockedtap', me, index, target, record, e, eOpts);
                }
            },
            afterrender: function(){ 
            }
    },
    onBeforeLoad: function() {
        var me = this,
                enableMasked = me.getEnableMasked();

        if (enableMasked && me.isPainted()) {
            var loadingText = me.getLoadingText();

            this.setMasked({
                xtype: 'loadmask',
                message: loadingText
            });
        }

        this.hideEmptyText();
    },
    onLoad: function(store, record) {
        var me = this;

        me.hasLoadedStore = true;
        me.setMasked(false);

         me.getStore().add({emptyLabel:'No more elements.'});
          this.setHeight((this.getItemHeight() + 1.4) *1);

        // if (!record || record.length === 0) {
        //     if(me.getMoreElements()){
        //         me.getStore().add({emptyLabel:'No more elements.'});
        //         me.setMoreElements(false);
        //     }
        // }else{
        //     me.setMoreElements(true);  
        // }

        this.refreshHeight();
    },
    refreshScroller: function(scroller) {
        // if (!scroller) {
        //     scroller = this.container.getScrollable().getScroller();
        // }
        // scroller.scrollTo(0, scroller.position.y + 1);
        // scroller.scrollTo(0, scroller.position.y - 1);
    },
    refreshHeight: function() {

        if (this.getAutoHeight()) {
            this.setHeight((this.getItemHeight() + 1.4) * this.getStore().data.length);
        }
    },
    doRefresh: function() {
        var me = this;

        me.callParent();
        me.refreshScroller();
    }
});