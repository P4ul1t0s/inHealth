var light = "#FFF"
var lightBorder = "#8b979f"
var dark = "rgb(52, 52, 52)"
var darkBorder = "rgb(22, 22, 22)"
var body = document.querySelector('#body')
var navbar = document.querySelector('#navbar')
var aside = document.querySelector('#aside')
var darkButton = document.querySelector('.darkButton')
var lightButton = document.querySelector('.lightButton')
var home = document.querySelector('#home')
var relatorio = document.querySelector('#relatorio')

if(!localStorage.getItem('theme')){
    localStorage.setItem('theme', body.style.backgroundColor);
}

toggleMode(localStorage.getItem('theme'));

function toggleMode(mode){
    localStorage.setItem('theme', mode)
    
    if(localStorage.getItem('theme') === 'dark'){
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

function setHome(){
    home.style.display = 'flex'
    relatorio.style.display = 'none'
}

function setRelatorio(){
    home.style.display = 'none'
    relatorio.style.display = 'flex'
}