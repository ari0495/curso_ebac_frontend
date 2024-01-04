const form = document.getElementById("form");
const campoa = document.getElementById("campoa")
const campob = document.getElementById("campob");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    checkForm();
})

campoa.addEventListener("blur", () => {
    checkInputCampoa();
})

campob.addEventListener("blur", () => {
    checkInputCampob();
})

function checkInputCampoa(){
    const campoaValue = campoa.value;
    
    if(campoaValue === ""){
        errorInput(campoa, "O Número é Obrigatório.")
    }else if(campoaValue.length < 2){
        errorInput(campoa, "O Número precisa ter no mínimo 2 caracteres.")
    }else{
        const formItem = campoa.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputCampob(){
    const campoaValue = Number(campoa.value);
    const confirmationCampoaValue = Number(campob.value);

    if(confirmationCampoaValue === ""){
        errorInput(campob, "O Segundo Número é obrigatório.")
    }else if(confirmationCampoaValue <= campoaValue){
        errorInput(campob, "Digite um Número Maior que o Campo A")
    }else{ 
        const formItem = campob.parentElement;
        formItem.className = "form-content" 
    }
}

function checkForm(){
    checkInputCampoa();
    checkInputCampob();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
    });

    if(isValid){
        const successMessage = `BOA!!! O Número ${campob.value} é Maior que ${campoa.value}.`;
        const containerSuccessMessage = document.querySelector('.success-message');
        containerSuccessMessage.innerHTML = successMessage;
        containerSuccessMessage.style.display = "block";
        console.log(successMessage)  
    }
}

function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "form-content error"
}

