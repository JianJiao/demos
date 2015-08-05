/**
*	 gather form data using jquery in backbone view
*/

(function(){

	$(document).ready(function(){
		var FormView = Backbone.View.extend({
			el: "#formData"
			,template: {}
			,events: {
				"submit": "onSubmit"
			}
			,initialize: function(){}
			,render: function(){}
			,onSubmit: function(e){
				e.preventDefault();
				var $form = this.$el;
				var $inputs = $form.find('input');
        var formData = {}
        $inputs.each(function(i, input){
        	formData[this.name] = this.value
        });
        console.log(formData);
			}
		});

		var formView = new FormView({});









	});

})();