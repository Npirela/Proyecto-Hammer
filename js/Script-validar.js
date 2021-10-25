const Expre_regulares = {
    Name_exp: /^[a-zA-Z]{1,90}$/, // Letras 
    Lastn_exp: /^[a-zA-Z]{1,90}$/, // Letras 
    Email_exp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z-.]+$/,
    Phone_exp: /^\d{7,14}$/ // 7 a 14 numeros.
}
const Form_contact = document.getElementById('Form_Contac')
const ErrorElement = document.getElementById('Error_message')
const OkElement = document.getElementById('Ok_message')
    // const Name = document.getElementById('Name')
    // const LastName = document.getElementById('Lastname')
    // const Email = document.getElementById('Email')
    // const Phone = document.getElementById('Phone')
const inputs = document.querySelectorAll('#Form_Contac input');
var Name_valid = Boolean();
var Lastn_valid = Boolean();
var Email_valid = Boolean();
var Phone_valid = Boolean();

ErrorElement.innerText = ("");
OkElement.innerText = ("");


console.log("aqui funciona")
const validarFormulario = (e) => {
    switch (e.target.name) {
        case "Name":
            let Val_input = e.target.value;
            OkElement.classList.add('classhide');
            ErrorElement.classList.add('classhide');
            if (Val_input === '' || Val_input == null) {
                ErrorElement.classList.remove('classhide');

                ErrorElement.innerText = ("El Nombre No Puede Estar Vacio")
                OkElement.classList.add('classhide');
                OkElement.innerText = ("")

            } else if (Expre_regulares.Name_exp.test(Val_input)) {
                ErrorElement.classList.add('classhide');
                OkElement.classList.remove('classhide');
                OkElement.innerText = ("Se ve Bien")
                ErrorElement.innerText = ("")
                Name_valid = true;
                console.log(Name_valid + "valor de campo.name");
            } else {
                ErrorElement.classList.remove('classhide');
                OkElement.classList.add('classhide');
                ErrorElement.innerText = ("Por favor Verifica que estas colocando caracteres Alfabeticos en el campo Nombre y que no tienes mas de 90 caracteres")

            }

            break;
        case "Lastname":
            let Val_input_Lastn = e.target.value;
            OkElement.classList.add('classhide');
            ErrorElement.classList.add('classhide');
            if (Val_input_Lastn === '' || Val_input_Lastn == null) {
                ErrorElement.classList.remove('classhide');

                ErrorElement.innerText = ("El Apellido No Puede Estar Vacio")
                OkElement.classList.add('classhide');
                OkElement.innerText = ("")

            } else if (Expre_regulares.Lastn_exp.test(Val_input_Lastn)) {
                ErrorElement.classList.add('classhide');
                OkElement.classList.remove('classhide');
                OkElement.innerText = ("Se ve Bien")
                ErrorElement.innerText = ("")
                Lastn_valid = true;
                console.log(Lastn_valid + "valor de campo.apellido");
            } else {
                ErrorElement.classList.remove('classhide');
                OkElement.classList.add('classhide');
                ErrorElement.innerText = ("Por favor Verifica que estas colocando caracteres Alfabeticos en el campo Apellido y que no tienes mas de 90 caracteres")

            }

            break;
        case "Email":
            let Val_input_Email = e.target.value;
            OkElement.classList.add('classhide');
            ErrorElement.classList.add('classhide');
            if (Val_input_Email === '' || Val_input_Email == null) {
                ErrorElement.classList.remove('classhide');

                ErrorElement.innerText = ("El Email No Puede Estar Vacio")
                OkElement.classList.add('classhide');
                OkElement.innerText = ("")

            } else if (Expre_regulares.Email_exp.test(Val_input_Email)) {
                ErrorElement.classList.add('classhide');
                OkElement.classList.remove('classhide');
                OkElement.innerText = ("Se ve Bien")
                ErrorElement.innerText = ("")
                Email_valid = true;
                console.log(Email_valid + "valor de campo.Email");
            } else {
                ErrorElement.classList.remove('classhide');
                OkElement.classList.add('classhide');
                ErrorElement.innerText = ("Por favor Verifica que estas colocando un Email Valido 'ejemplo@dominio.com' en el campo Email")

            }

            break;
        case "Phone":
            let Val_input_Phone = e.target.value;
            OkElement.classList.add('classhide');
            ErrorElement.classList.add('classhide');
            if (Val_input_Phone === '' || Val_input_Phone == null) {
                ErrorElement.classList.remove('classhide');

                ErrorElement.innerText = ("El Numero de Telefono No Puede Estar Vacio")
                OkElement.classList.add('classhide');
                OkElement.innerText = ("")

            } else if (Expre_regulares.Phone_exp.test(Val_input_Phone)) {
                ErrorElement.classList.add('classhide');
                OkElement.classList.remove('classhide');
                OkElement.innerText = ("Se ve Bien")
                ErrorElement.innerText = ("")
                Phone_valid = true;
                console.log(Phone_valid + "valor de campo.phone");
            } else {
                ErrorElement.classList.remove('classhide');
                OkElement.classList.add('classhide');
                ErrorElement.innerText = ("Por favor Verifica que estas colocando caracteres Numericos en el campo Telefono y que no tienes mas de 14 caracteres o menos de 7")

            }

            break;

    }
}




inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    input.addEventListener('click', validarFormulario);
});




Form_contact.addEventListener('submit', (e) => {


    if (Name_valid === false || Lastn_valid === false || Email_valid === false || Phone_valid === false) {
        e.preventDefault();
        alert("Si usaste el Autocompletar y no puedes Enviar el Formulario haz clic en cada uno de los campos y luego presiona enviar(Es Necesario: Nombre, Apellido, Email, Telefono) ");

    } else {

    }
});

//