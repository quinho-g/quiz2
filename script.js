let soma = document.getElementById('soma')
let contagem = 0
let text = document.getElementById('texto-fim')
let comentario = document.getElementById('coment')
function quiz(atual, proxima) {
    let sumir = document.getElementById(atual)
    let aparecer = document.getElementById(proxima)
    sumir.style.display = 'none'
    aparecer.style.display = 'flex'
}
if (contagem == 0) {
    text.innerText = "Nossa você não acertou nada, não me conhece muito bem!"
}
function certo() {
    contagem++
    soma.innerText = `${contagem}/5`
    if(contagem >= 1) {
        text.innerText = `Você conseguiu acertar ${contagem}, continue tentando!`
    }
    if(contagem ==4) {
        text.innerText = `Você conseguiu acertar ${contagem}, faltou só uma!`
    }
    if(contagem == 5) {
        text.innerText = `Você conseguiu acertar todas as ${contagem}, você realmente me conhece!`
    }
}
function acabou() {
    comentario.style.display = 'none'
}


