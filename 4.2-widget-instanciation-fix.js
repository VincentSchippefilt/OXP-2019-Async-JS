odoo.define('new_widget', function (require) {
	// require...

	var MyWidget = Widget.extend({
		template: "my_template"
	});

	var MyAction = AbstractAction.extend({
		start: function () {
			var myWidgetInstance = new MyWidget();
			var prom = myWidgetInstance.appendTo('#somewhere'),
			return Promise.all([
				prom,
				this._super.apply(this, arguments)
			])
		}
	});

	core.action_registry.add('my_action', MyAction);
});
