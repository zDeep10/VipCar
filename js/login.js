// TELA DE LOGIN

// SEGUNDO FORMULARIO
const form2 = document.querySelector('#formulario2')

const dados = {}

form2.addEventListener('submit', (e) => {
    const usuario2 = document.querySelector('#usuario2')
    const email = document.querySelector('#email')
    const senha2 = document.querySelector('#senha2')

    e.preventDefault()

    checkInputs2()


})


function checkInputs2() {

    const usuario2Value = usuario2.value.trim()
    const emailValue = email.value.trim()
    const senha2Value = senha2.value.trim()

    let usuario2Msg = document.querySelector('.usuario2Msg')
    let emailMsg = document.querySelector('.emailMsg')
    let senha2Msg = document.querySelector('.senha2Msg')

    // VERIFICAÇÃO DE USUARIO
    if (usuario2Value === '') {
        let msg = "*Campo usuário não pode estár em branco."

        usuario2Msg.classList.add("display")
        usuario2Msg.innerHTML = msg

        usuario2.classList.add("erroM")
        usuario2.classList.remove("sucessM")


    } else {
        usuario2.classList.add("sucessM")
        usuario2Msg.classList.remove("display")

    }

    // VERIFICAÇÃO DE EMAIL
    if (emailValue === '') {
        let msg = "*Campo e-mail não pode estár em branco."

        emailMsg.classList.add("display")
        emailMsg.innerHTML = msg

        email.classList.add("erroM")
        email.classList.remove("sucessM")


    } else {
        email.classList.add("sucessM")
        emailMsg.classList.remove("display")
    }

    // VERIFICAÇÃO DE SENHA
    if (senha2Value === '') {
        let msg = "*Campo senha não pode estár em branco."

        senha2Msg.classList.add("display")
        senha2Msg.innerHTML = msg

        senha2.classList.add("erroM")
        senha2.classList.remove("sucessM")


    } else {
        senha2.classList.add("sucessM")
        senha2Msg.classList.remove("display")
    }


    if (usuario2Value != '' && senha2Value != '' && emailValue != '') {
        dados['usuario'] = usuario2Value
        dados['senha'] = senha2Value
        dados['email'] = emailValue

    }
    
}

// Formulario de Login

const form1 = document.getElementById('formulario')

form1.addEventListener('submit', (e) => {
    const usuario = document.getElementById('usuario')
    const senha = document.getElementById('senha')

    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    // VALORES DO INPUT
    let usuarioValue = usuario.value.trim()
    let senhaValue = senha.value.trim()

    // CAMPOS DE ERRO
    let usuarioM = document.querySelector('.usuarioM')
    let senhaM = document.querySelector('.senhaM')

    // VERIFICAÇÃO DE USUARIO
    if (usuarioValue === '') {
        let texto = "*Campo Usuário não pode estár vazio."
        usuarioM.innerHTML = texto

        // adicionando e removendo cores
        usuario.classList.add('erroM')
        usuario.classList.remove('sucessM')

        usuarioM.classList.add('display')

    }else if(usuarioValue != dados['usuario']){
        
        let texto = "*Usuario invalido."
        usuarioM.innerHTML = texto

        usuario.classList.add('erroM')
        usuario.classList.remove('sucessM')

        usuarioM.classList.add('display')
    
    }  else {
        usuario.classList.add('sucessM')
        usuarioM.classList.add('display')

        usuarioM.classList.remove('display')

    }
    
    // VERIFICAÇÃO DE SENHA
    if (senhaValue === '') {
        let texto = "*Campo Senha não pode estár vazio."
        senhaM.innerHTML = texto

        // adicionando cores
        senha.classList.add('erroM')
        senha.classList.remove('sucessM')

        senhaM.classList.add('display')

    }else if(senhaValue != dados['senha']){
        
        let texto = "*Senha invalida."
        senhaM.innerHTML = texto

        senha.classList.add('erroM')
        senha.classList.remove('sucessM')

        senhaM.classList.add('display')
    
    } else {
        senha.classList.add('sucessM')
        senhaM.classList.add('display')

        senhaM.classList.remove('display')
    }
}