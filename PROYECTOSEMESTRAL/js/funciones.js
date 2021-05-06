alert('Bienvenido');

$("#btn_aceptar").click(function(){
    
    usuario = $("#txt_usuario").val();
    contrasena = $("#txt_contrasena").val();
    confirmar = $("#txt_confirmar").val();

    valida = true;

    $("mensaje").empty();

    if(usuario == ""){
        valida = false;
        $("#mensaje").append('<li> Debe ingresar un usuario </li>')
    }

    if(contrasena != confirmar){
        valida = false;
        $("#mensaje").append('<li>Las contraseñas no coinciden</li>')
    }

    if (validador){
        $("#lbl_aceptar").text("Usuario registrado correctamente");
        $("#lbl_motivo").text($("#cmb_motivo option;selected").text())
        $("#lbl_aceptar").addClass('text-success');
        $("#lbl_aceptar").css("visibility","visible");
    
    }else {
        $("#lbl_aceptar").css("visibility","hidden");
    }


});

document.querySelector('.campo span').addEventListener('click', e => {
    const passwordInput = document.querySelector('#password');
    if (e.target.classList.contains('show')) {
        e.target.classList.remove('show');
        e.target.textContent = 'Ocultar';
        passwordInput.type = 'password';
    } else {
        e.target.classList.add('show');
        e.target.textContent = 'Mostrar';
        passwordInput.type = 'password';
    }
});


$(document).ready(function() {
    $("#show_hide_password a").on('click', function(event) {
        event.preventDefault();
        if($('#show_hide_password input').attr("type") == "text"){
            $('#show_hide_password input').attr('type', 'password');
            $('#show_hide_password i').addClass( "fa-eye-slash" );
            $('#show_hide_password i').removeClass( "fa-eye" );
        }else if($('#show_hide_password input').attr("type") == "password"){
            $('#show_hide_password input').attr('type', 'text');
            $('#show_hide_password i').removeClass( "fa-eye-slash" );
            $('#show_hide_password i').addClass( "fa-eye" );
        }
    });
});