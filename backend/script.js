function toggleMode(){
    const light = "#FFF"
    const lightBorder = "#8b979f"
    const dark = "rgb(52, 52, 52)"
    const darkBorder = "rgb(22, 22, 22)"
    const body = document.querySelector('#body')
    const navbar = document.querySelector('#navbar')
    const aside = document.querySelector('#aside')
    const darkButton = document.querySelector('.darkButton')
    const lightButton = document.querySelector('.lightButton')
    console.log(body.style.backgroundColor)
    
    if(body.style.backgroundColor !== "rgb(52, 52, 52)"){
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