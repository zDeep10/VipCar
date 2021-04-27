// Validação de formulario

const form = document.getElementById('formulario')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const nascimento = document.getElementById('nascimento')

form.addEventListener('submit', (e) => {
    e.preventDefault()


    checkInputs();

})

function checkInputs() {
    const nomeValue = nome.value.trim()
    const emailValue = email.value.trim()
    const telefoneValue = telefone.value.trim()
    const nascimentoValue = nascimento.value.trim()

    // Verificando nome
    if (nomeValue === '') {
        //mostrar erro
        // adicionar classe de erro
        setErroFor(nome, "Nome não pode estar em branco.")
    } else {
        //adicionar classe sucesso
        setSucessFor(nome)
    }

    // Verificando email
    if (emailValue === '') {
        setErroFor(email, "E-mail não pode estar em branco.")
    } else if (!emailCheck(emailValue)) {
        setErroFor(email, "E-mail não está em um formato valido.")
    } else {
        setSucessFor(email)
    }

    // Verificando Telefone
    if (telefoneValue === '') {
        setErroFor(telefone, "Telefone não pode estar em branco.")
    } else if (!telefoneCheck(telefoneValue)) {
        setErroFor(telefone, "Telefone não está em um formato valido.")
    } else {
        setSucessFor(telefone)
    }

    // Verificando Nascimento
    if (nascimentoValue === '') {
        setErroFor(nascimento, "Nascimento não pode estar em branco.")
    } else {
        setSucessFor(nascimento)
    }

}

// SE A VALIDAÇÃO DER ERRADO
function setErroFor(input, msg) {

    var classe = input.parentElement
    var small = classe.querySelector('small')
    var color = classe.querySelector('input')

    small.style.display = 'block'
    small.innerText = msg;

    color.classList.remove("sucessoColor")
    color.classList.add("erroColor")

}

// SE A VALIDAÇÃO DER CERTO
function setSucessFor(input) {

    var classe = input.parentElement
    var color = classe.querySelector('input')
    var small = classe.querySelector('small')

    small.style.display = 'none'
    color.classList.add("sucessoColor")

}

// VALIDAÇÃO DO EMAIL
function emailCheck(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// Validação telefone 
function telefoneCheck(telefone) {
    return (telefone.replace(/\D/g, '').length == 11)
}
