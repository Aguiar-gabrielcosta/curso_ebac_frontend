$(document).ready(() => {
    $('form').on('submit', (e) => {
        e.preventDefault()
    })

    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    jQuery.validator.addMethod('validaNome', (value, element) => {
        let nomes = value.split(' ')
        return nomes.length >= 2 ? true : false
    })

    $('form').validate({
        rules: {
            nomeCompleto: {
                required: true,
                validaNome: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                rangelength: [14, 15]
            },
            cpf: {
                required: true,
                minlength: 14
            },
            endereco: {
                required: true
            },
            cep: {
                required: true,
                minlength: 9
            }
        },
        messages: {
            nomeCompleto: 'Insira seu nome completo.',
            email: 'Insira seu email (exemplo@mail.com).',
            telefone: 'Insira seu telefone.',
            cpf: 'Insira seu CPF.',
            endereco: 'Insira seu endereço completo, com os complementos.',
            cep: 'Insira seu CEP.'
        },
        submitHandler: (form) => {
            form.submit()

            $('#nomeCompleto').val('')
            $('#email').val('')
            $('#telefone').val('')
            $('#cpf').val('')
            $('#endereco').val('')
            $('#cep').val('')
        }
    })
})

