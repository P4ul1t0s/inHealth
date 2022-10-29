function toggleMode(){
    const light = "#FFF"
    const lightBorder = "#8b979f"
    const dark = "#2c2c2c"
    const darkBorder = "#0E0E0E"
    const body = document.querySelector('#body')
    const navbar = document.querySelector('#navbar')
    const aside = document.querySelector('#aside')
    const darkButton = document.querySelector('.darkButton')
    const lightButton = document.querySelector('.lightButton')
    
    if(body.style.backgroundColor !== 'rgb(44, 44, 44)'){
        darkButton.style.display = 'none'
        lightButton.style.display = 'unset'
        body.style.backgroundColor = dark
        body.style.color = lightBorder
        navbar.style.backgroundColor = dark
        navbar.style.borderColor = darkBorder
        aside.style.borderColor = darkBorder
    }else{
        darkButton.style.display = 'unset'
        lightButton.style.display = 'none'
        body.style.backgroundColor = light
        body.style.color = dark
        navbar.style.backgroundColor = light
        navbar.style.borderColor = lightBorder
        aside.style.borderColor = lightBorder
    }
}

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