odoo.define('master_detail_widget', function (require) {

    // require ...
    var concurrency = require('web.concurrency');

    return Widget.extend({
        // ...
        init: function () {
            this.detailDP = new concurrency.DropPrevious();
        },
        showDetails: function (ev) {
            var id = ev.target.dataset.id;
            await this.detailDP.add(this._rpc(this, {/*...*/ id: id }));
            this.id = id;
            this.render();
        },
        navigateTo() {
            // ...
        }
    });
});
