import horarioAtual from "./horarioAtual.js"

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn')

    btn.addEventListener('click', () => {
        let horario = horarioAtual()
        alert(`O horário atual do seu sistema é ${horario[0]} horas, ${horario[1]} minutos e ${horario[2]} segundos.`)
    })
})