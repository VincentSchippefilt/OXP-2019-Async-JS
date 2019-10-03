odoo.define('master_detail_widget', function (require) {

    // require ...
    var concurrency = require('web.concurrency');

    return Widget.extend({
        // ...
        init: function () {
            this.loadDetailsMutex = new concurrency.Mutex();
        },
        showDetails: function (ev) {
            var id = ev.target.dataset.id;
            var loadData = this._rpc.bind(this, {/*...*/ id: id });
            await this.loadDetailsMutex.exec(loadData);
            this.id = id;
            this.render();
        },
        navigateTo() {
            // ...
        }
    });
});
