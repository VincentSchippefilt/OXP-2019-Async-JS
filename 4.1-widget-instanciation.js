odoo.define('new_widget', function (require) {
	var Widget = require('web.Widget');

	var MyWidget = Widget.extend({
		template: "my_template"
	});

	var x = new MyWidget();
	x.appendTo('#somewhere');
});
