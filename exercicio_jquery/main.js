$(document).ready(() => {
    $('#mostrar-painel-cadastro').on('click', () => {
        $('#nova-tarefa').slideDown()
    })

    $('#btn-cancelar').on('click', () => {
        $('#nova-tarefa').slideUp()
    })

    $('form').on('submit', (e) => {
        e.preventDefault()

        const novaTarefa = $('#nome-nova-tarefa').val()

        const listaTarefas = $('#lista-tarefas ul')

        const novoItem = $(`<li style="display: none" class="">${novaTarefa}</li>`)

        $(novoItem).appendTo(listaTarefas)
        $(novoItem).fadeIn(1000)
        
        $('#nome-nova-tarefa').val('')
    })

    $('#lista-tarefas ul').on('click', (e) => {
        $(e.target).attr('class', 'tarefa-completa')
    })
})

