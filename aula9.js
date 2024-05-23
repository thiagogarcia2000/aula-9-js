const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
const botao = document.querySelector("#botao")
const erro = document.querySelector("#erro")
const sucesso = document.querySelector("#sucesso")

function somar(n1,n2){
    return n1+n2
}


botao.addEventListener("click", ()=>{
    const lista_de_usuarios = [
        ["Joao", "joao@email.com", "123456"],
        ["Maria", "maria25@email.com", "deusefiel"],
        ["Ana", "anaJulia@email.com", "456789"],
        ["pedro", "ped@email.com", "pedrimDaTuf"],
        ["AbeL", "abel.jr@email.com", "10081995"],
        ["Amanda", "amandKaroline@email.com", "1ate8"],
        ]
    let deuCerto = false
    for(usuario_da_vez of lista_de_usuarios){
        if(usuario_da_vez[1] === email.value && usuario_da_vez[2] === senha.value){
            sucesso.textContent = "Login efetuado com sucesso"
            sucesso.className = "deuBom"
            deuCerto = true
            erro.textContent = ""
            erro.className = ""
            email.value = ""
            senha.value = ""
        }
    }
    if(!deuCerto){
        erro.textContent = "Email ou Senha Inválidos"
        erro.className = "deuRuim"
        sucesso.textContent = ""
        sucesso.className = ""
    }
})