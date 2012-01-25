/**/
(function($){
	$(function(){
	var ns = '', //Namespace
		ck = function(s){return s in document.createElement('input')},
		b = {ph:ck('placeholder'),af:ck('autofocus')};
	if(!b.ph || !b.af){
		var x = function(a, b) {return !!~ a.indexOf(b)};
		$('input,textarea').each(function(){
			var input = $(this),
				type = input.attr('type') || 'textarea',
				attrPh = input.attr('placeholder'),
				attrAf = input.attr('autofocus');
			if (attrPh && !b.ph) {
				input.attr('value', attrPh).addClass('placeholder').bind({
					focus: function() {if(input.val() === attrPh) input.val('').removeClass('placeholder');},
					blur:  function() {if(input.val() === '') input.val(attrPh).addClass('placeholder');}
				});
			}
			if((attrAf || attrAf==='') && !b.af)input.focus();
			if(window.ActiveXObject && $.browser.version<8){
				if(x('text password textarea',type)){
					input.addClass(ns+'text').bind({
						focus: function() {input.addClass('focus');},
						blur:  function() {input.removeClass('focus');}
					});
				}else if(x('button reset submit',type)){
					input.addClass(ns+'button');
				}
			}
		});
	}
	});
})(jQuery);