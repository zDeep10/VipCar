// MENU DE HAMBURGUER
const evento = document.querySelector('.icone')

evento.addEventListener('click', menu)

function menu(event) {
    if (event.target.nodeName === 'IMG') {
        let bg = document.querySelector('.navegacao')
        let lista = document.querySelector('.show')

        bg.classList.toggle("bg-color")
        lista.classList.toggle("display")

        disable()
    }
}

function disable() {
    const itens = document.querySelectorAll('.hide')

    itens.forEach((item) => {
        item.classList.toggle("disable")
    })

}

// Carrinho de compra

// Produtos
const produtos = [{
        nome: "Lanterna",
        quantidade: 0,
        preco: 268.90,
        id: 0,
        img: "../imgs/produtos/lanterna.webp"
    },

    {
        nome: "Central Multimidia",
        quantidade: 0,
        preco: 392.90,
        id: 1,
        img: "../imgs/produtos/multemedia.webp"
    },

    {
        nome: "Capa",
        quantidade: 0,
        preco: 180.90,
        id: 2,
        img: "../imgs/produtos/capa.webp"
    }
]


// Fazendo aparecer a bg do itens
const carrinho = document.querySelector('.carrinho')

carrinho.addEventListener('click', () => {
    let bgCarrinho = document.querySelector('.bg-carrinho')
    let lines = document.querySelector('.carousel-indicators')

    bgCarrinho.classList.toggle("mostrar")
    lines.classList.toggle("index")
})


// // Lanterna
// const lanternaBtn = document.querySelector('.lanterna-btn')
// lanternaBtn.addEventListener('click', () => {



//     if (produtos[0].quantidade < 0) {
//         produtos[0].quantidade = 1


//     } else {
//         produtos[0].quantidade++
//     }


// })

// Lanterna
const lanternaBtn = document.querySelector('.lanterna-btn')
const centralBtn = document.querySelector('.central-btn')
const capaBtn = document.querySelector('.capa-btn')

lanternaBtn.addEventListener('click', adicionar)
centralBtn.addEventListener('click', adicionar)
capaBtn.addEventListener('click', adicionar)

function adicionar(event) {
    const bgCarrinho = document.querySelector('.itens-carrinho')
    const resultado = document.querySelector('.total')

    let total = 0
    bgCarrinho.innerHTML=""

    produtos.forEach((item) => {
        let subtotal = 0

        if (event.target.id === item.nome) {
            item.quantidade++
        }

        subtotal = item.preco * item.quantidade
        total += subtotal

        if (item.quantidade > 0) {
            bgCarrinho.innerHTML += `

        <div class="flexProdutos">
            <div class="divImg">
                <img class="lanternaImg" src="${item.img}" alt="Lanterna Produto">
            </div>

            <div class="infoProdutos">
                <h2 class="color"> ${item.nome} </h2>

                <div>
                    <p class="secondColor espaco">  Quantidade: ${item.quantidade} </p>
                    <p class="secondColor">  Valor: ${item.preco} </p>
                </div>

                <div><p class="secondColor">Subtotal: R$ ${subtotal.toFixed(2)} </p></div>
            </div>
        </div>
        <hr class="line2">
        `
        }

        resultado.innerHTML = `Total a pagar: R$ ${total.toFixed(2)}`
    })
}