export default function horarioAtual () {
    let date = new Date
    return [date.getHours(), date.getMinutes(), date.getSeconds()]
    
}