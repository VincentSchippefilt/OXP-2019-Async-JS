odoo.define('master_detail_widget', function (require) {

    // require ...

    return Widget.extend({
        template: 'master_detail_template',
        events: {
            'click tr': 'showDetails',
            'click button.navigateTo': 'navigateTo'
        },
        showDetails: async function (ev) {
            this.id = ev.target.dataset.id;
            this.data = await this._rpc({/*...*/ id: this.id });
            this.render();
        },
        navigateTo: function (ev) {
            this.do_action('open_record_details',
                {
                    recordId: this.id,
                    target: 'new'
                });
        }
    });
});