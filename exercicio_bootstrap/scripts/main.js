$(document).ready(() => {
    $('form').on('submit', (e)=>{
        e.preventDefault()
    })

    $('#telefone').mask('(00) 00000-0000', {placeholder: '(DD) 00000-0000'})

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                rangelength: [14,15]
            }
        },
        messages: {
            nome: 'Insira seu nome.',
            email: 'Insira seu email. (exemplo@mail.com)',
            telefone: 'Insira seu telefone/celular. ((DD) 00000-0000)'
        },
        submitHandler: (form) => {
            form.submit()

            // reset
            $('#nome').val('')
            $('#telefone').val('')
            $('#email').val('')
        }
    })
})