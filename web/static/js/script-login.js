$( document ).ready(function(){
	$('select').formSelect();
});

$( "#clear" ).click(function() {
	$('#signin-form').trigger("reset");
});

$('#submit-form').click( function(event) {
    event.preventDefault();
    console.log($('form').serialize());
    $.ajax({
        url: '/register',
        type: 'post',
        dataType: 'json',
        data: $('form').serialize(),
        success: function(data) {
           if(JSON.stringify(data) == "success"){
            $('#signin-form').trigger("reset");
           }
         },
        error: function (e){
            alert(JSON.stringify(e));
        }
    });

});