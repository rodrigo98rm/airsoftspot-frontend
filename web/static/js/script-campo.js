$( document ).ready(function(){
	$('select').formSelect();
});

$(document).on('click','#filter', function(){
    $('.filter-window').show();
});

$(document).on('click','#cancel-filter', function(){
    $('.filter-window').hide();
});


