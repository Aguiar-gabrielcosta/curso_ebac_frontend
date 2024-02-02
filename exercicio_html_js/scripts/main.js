const form = document.getElementById('form')
const nA = document.getElementById('numberA')
const nB = document.getElementById('numberB')

function validaMaior(numeroA, numeroB) {
    return numeroB > numeroA
}

function freeBtn(free){ // free: boolean - Comando de liberar ou não o botão
    if (free) {
        document.querySelector('button#btn-submit').disabled = false
        document.querySelector('button#btn-submit').classList.remove('disabled')
    } else {
        document.querySelector('button#btn-submit').disabled = true
        document.querySelector('button#btn-submit').classList.add('disabled')
    }
}

function showError(show){ // show: boolean - Comando de mostrar ou não o erro
    if (show){
        document.querySelector('p#value-error').classList.remove('hide')
    } else {
        document.querySelector('p#value-error').classList.add('hide')
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    document.querySelector('p#sucess-msg').classList.add('hide')

    const msgSubmit = `Os valores de A (Valor: ${nA.value}) e B (Valor: ${nB.value}), com B maior que A, foram enviados com sucesso.`
    
    if (validaMaior(nA.value, nB.value)) { // Com a certeza que B é maior que A, envia-se o sucesso da operação

        document.querySelector('p#sucess-msg').innerHTML = msgSubmit
        document.querySelector('p#sucess-msg').classList.remove('hide')

        // Reset da informação e controles
        nA.value = ''
        nB.value = ''
        nB.disabled = true
        freeBtn(false)
    }
})

nA.addEventListener('input', (e) => { // O valor de A deve ser digitado antes do usuário poder digitar o valor de B (Guiando o usuário)

    if (nA.value !== '') {
        nB.disabled = false
    } else {
        nB.disabled = true
        nB.value = ''
        freeBtn(false)
    }
})

nB.addEventListener('input', (e) => { // Assim que o usuário digita o valor de B, valida se B é maior que A

    let maior = validaMaior(nA.value, nB.value)

    if (!maior) {
        showError(true)
        freeBtn(false)
    } else {
        showError(false)
        freeBtn(true)
    }
})