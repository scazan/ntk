define([
	'backbone',
	'views/item/Widget',
	'text!tmpl/AnalogOut_tmpl.js'

],
function(Backbone, WidgetView, Template){
    'use strict';

	return WidgetView.extend({
		className: 'analogOut',
		template: _.template(Template),

		initialize: function(options) {
			// Call the superclass constructor
			WidgetView.prototype.initialize.call(this, options);
			this.model.set('title', 'AnalogOut');

			this.listenTo(this.model, 'change', this.sendData);
			window.VV = this;
		},
		sendData: function() {
			window.socketIO.emit(this.model.get('outputMapping'), this.model.get('out') )
		},
	});
});
