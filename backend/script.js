function home(){
    const home = document.querySelector('#home')
    const relatorio = document.querySelector('#relatorio')
    home.style.display = 'flex'
    relatorio.style.display = 'none'
}

function relatorio(){
    const home = document.querySelector('#home')
    const relatorio = document.querySelector('#relatorio')
    home.style.display = 'none'
    relatorio.style.display = 'flex'
}