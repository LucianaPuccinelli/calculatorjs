const botoes = document.querySelectorAll('button')
const display = document.querySelector('.display')

botoes.forEach(clicar)

function clicar(button){
    button.addEventListener('click', calcular)
};

function calcular(event) {
    const valorBotao = event.target.value
    if(valorBotao === "=") {
        if(display.value != ''){
            display.value = eval(display.value)
        }
    } else if(valorBotao === 'C') {
        display.value = ''
    } else {
        display.value += valorBotao
    }
}