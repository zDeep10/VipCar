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

// Fazendo aparecer a bg do itens
const carrinho = document.querySelector('.carrinho')

carrinho.addEventListener('click', () => {
    let bgCarrinho = document.querySelector('.bg-carrinho')
    let lines = document.querySelector('.carousel-indicators')
  
    bgCarrinho.classList.toggle("mostrar")
    lines.classList.toggle("index")
})

// Criando Produtos
const lanterna = [{
    nome: "Lanterna",
    quantidade: 0,
    preco: 268.90,
    id: 1,
    img: "../imgs/produtos/lanterna.webp"
}]

const central = [{
    nome: "Central Multimídia",
    quantidade: 0,
    preco: 392.90,
    id: 2,
    img: "../imgs/produtos/multemedia.webp"
}]

const capa = [{
    nome: "Capa",
    quantidade: 0,
    preco: 180.90,
    id: 3,
    img: "../imgs/produtos/capa.webp"
}]

// Lanterna
const lanternaBtn = document.querySelector('.lanterna-btn')

lanternaBtn.addEventListener('click', adicionar1)



function adicionar1() {
    const bgCarrinho = document.querySelector('.itens-carrinho')
    const resultado = document.querySelector('.teste')
    const resultado2 = resultado.nextElementSibling
    
    lanterna.forEach((item) => {
        let subtotal = ""
        let total = ""

        item.quantidade++
        subtotal = item.preco * item.quantidade
        total = subtotal
     

        bgCarrinho.innerHTML = `
        
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
            </div>
        </div>
        <hr class="line2">
        `
        resultado.innerHTML=`Subtotal: R$ ${subtotal.toFixed(2)}`
        resultado2.innerHTML=`Total a pagar: R$ ${total.toFixed(2)}`
    })
}

// Multimedia
const centralBtn = document.querySelector('.central-btn')

centralBtn.addEventListener('click', adicionar2)


function adicionar2() {
    const bgCarrinho = document.querySelector('.itens-carrinho')
    const resultado = document.querySelector('.teste')
    const resultado2 = resultado.nextElementSibling

    central.forEach((item) => {
        let subtotal = ""
        let total = ""

        item.quantidade++
        subtotal += item.preco * item.quantidade
        
        

        bgCarrinho.innerHTML = `
        
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
            </div>
        </div>
        <hr class="line2">
        `

        resultado.innerHTML =`Subtotal: R$ ${subtotal.toFixed(2)}`
        resultado2.innerHTML =`Total a pagar: R$ ${total.toFixed(2)}`
    })
}

// Capa
const capaBtn = document.querySelector('.capa-btn')

capaBtn.addEventListener('click', adicionar3)

function adicionar3() {
    const bgCarrinho = document.querySelector('.itens-carrinho')
    const resultado = document.querySelector('.teste')
    const resultado2 = resultado.nextElementSibling

    capa.forEach((item) => {
        let subtotal = ""
        let total = ""

        item.quantidade++
        subtotal = item.preco * item.quantidade

        total = subtotal
     


        bgCarrinho.innerHTML = `
        
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
                </div>
            </div>
       
            <hr class="line2">
        `

        resultado.innerHTML=`Subtotal: R$ ${subtotal.toFixed(2)}`
        resultado2.innerHTML=`Total a pagar: R$ ${total.toFixed(2)}`
    })
}

// // Criando botões dinamicamento
// function carregar() {
//     let botao = document.querySelectorAll('.btn')

//     botao.forEach((item) => {
//         item.innerHTML = `<button class="button adiciona" >Adicionar ao Carrinho</button>`
//     })

// }

// // Fazendo aparecer a bg do itens
// const carrinho = document.querySelector('.carrinho')

// carrinho.addEventListener('click', () => {
//     let bgCarrinho = document.querySelector('.bg-carrinho')
//     bgCarrinho.classList.toggle("mostrar")
// })

// // Carregando itens dentro do carrinho
// function carregarCarrinho() {
//     let itensDoCarrinho = document.querySelector(".itens-carrinho");
//     let valorTotal = 0;
//     itensDoCarrinho.innerHTML = "";

//     pecas.forEach((item) => {

//         if (item.quantidade > 0) {
//             valorTotal += item.quantidade * item.preco;
//             let subtotal = item.preco * item.quantidade;
//             itensDoCarrinho.innerHTML += `
//               <div>
//                   <p>${item.nome} | Valor unitário R$ ${item.preco} | Quantidade: ${item.quantidade} | Sub-total R$ ${subtotal.toFixed(2)}</P>
//                   <hr>
//               </div>
//               `;
//         }
//     })
//     itensDoCarrinho.innerHTML += `
//       <div syle="color = blue">
//           <p>Total da compra R$ ${valorTotal.toFixed(2)}</p>
//       </div>
//       `;
// }


// //Atualizar quantidade
// let adicionados = document.querySelector(".adiciona");

// for (i = 0; i < adicionados.length; i++) {
//     adicionados[i].addEventListener('click', function () {
//         let key = this.getAttribute('key');
//         pecas[key].quantidade++;
//         carregarCarrinho();
//     });
// }