odoo.define('demo.widgets', function (require) {
    'use strict';

    var ajax = require('web.ajax');
    var QWeb = require('web.core').qweb;
    var Widget = require('web.Widget');

    var widgetAsync = Widget.extend({
        template: 'firstAsyncTemplate',
        willStart: function () {
            let prom = ajax.loadXML('/async_demo/static/src/xml/async_loaded.xml', QWeb);
            return Promise.all([
                this._super.apply(this, arguments),
                prom
            ]);
        },
    });

    return widgetAsync;
});

