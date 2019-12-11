$( document ).ready(function(){
	$('select').formSelect();
    checkUser();
});

$( "#clear" ).click(function() {
	$('#signin-form').trigger("reset");
});

$('#submit-form').click( function(event) {
    event.preventDefault()

    if($('#password').val() != $('#password-confirm').val()){
      alert("As senhas não coincidem!")
    }

    else{

      var cadastro_json = {
        "cpf": $('#cpf').val(),
        "name": $('#name').val(),
        "email": $('#email').val(),
        "password":$('#password').val(),
        "birth": $('#birthday').val(),
        "username": $('#username').val(),
        "address": $('#address').val()
      }

      console.log(cadastro_json);

      $.ajax({
          url: 'http://134.209.114.75/airsoftspot/api/users',
          type: 'post',
          contentType: "application/json",
          data: JSON.stringify(cadastro_json),
          success: function(data) {
            console.log(data);
            if(data[0]['email'] == $('#email').val()){
              window.location.href = "http://127.0.0.1:5000/login";
            }
           },
          error: function (e){
              alert(JSON.stringify(e));
          }
      });
    }
});

$('#logout').click( function(event) {
  document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  location.reload();
});

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkUser(){
    name = getCookie('name');

    if(name != ""){
      $('#boas-vindas-nome').html(name);
      $('#boas-vindas').show();
      $('#boas-vindas').parent().children().eq(0).show();
      $('#boas-vindas').parent().children().eq(1).hide();
      $('#boas-vindas').parent().children().eq(2).hide();
      $('#boas-vindas').parent().children().eq(3).show();
    }

    else{
      $('#boas-vindas').parent().children().eq(0).hide();
      $('#boas-vindas').parent().children().eq(1).show();
      $('#boas-vindas').parent().children().eq(2).show();
      $('#boas-vindas').parent().children().eq(3).hide();
    }
}