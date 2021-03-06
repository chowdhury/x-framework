

    /* $ hooks */

    var _oldhide = $.fn.hide;
    /** @ignore */
    $.fn.hide = function(speed, callback) {
        var res = _oldhide.apply(this,arguments);
        //$(this).trigger('hide');
        return res;
    };

    var _oldshow = $.fn.show;
    /** @ignore */
    $.fn.show = function(speed, callback) {
        var res = _oldshow.apply(this, arguments);
        if ($(this).find('[data-component]').length) XF.trigger('xf:loadChildComponents', this);
        return res;
    };

    var _oldhtml = $.fn.html;
    /** @ignore */
    $.fn.html = function(a) {
        var res = _oldhtml.apply(this, arguments);
        if ($(this).find('[data-component]').length) XF.trigger('xf:loadChildComponents', this);
        return res;
    };

    var _oldappend = $.fn.append;
    /** @ignore */
    $.fn.append = function() {
        var res = _oldappend.apply(this, arguments);
        if ($(this).find('[data-component]').length) XF.trigger('xf:loadChildComponents', this);
        return res;
    };

    var _oldprepend = $.fn.prepend;
    /** @ignore */
    $.fn.prepend = function() {
        var res = _oldprepend.apply(this, arguments);
        if ($(this).find('[data-component]').length) XF.trigger('xf:loadChildComponents', this);
        return res;
    };

    $.fn.animationEnd = function (callback) {
        var animationEndEvents = 'webkitAnimationEnd oAnimationEnd msAnimationEnd animationend';

        $(this).one(animationEndEvents, callback);

        return this;
    };

