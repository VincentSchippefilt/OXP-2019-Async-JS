odoo.define('master_detail_widget', function (require) {

    // require ...

    return Widget.extend({
        template: 'master_detail_template',
        events: {
            'click tr': 'showDetails',
            'click button.navigateTo': 'navigateTo'
        },
        showDetails: async function (ev) {
            var id = ev.target.dataset.id;
            this.data = await this._rpc({/*...*/ id: id });
            this.id = id;
            this.render();
        },
        navigateTo: function () {
            this.do_action('open_record_details',
                {
                    recordId: this.id,
                    target: 'new'
                });
        }
    });
});