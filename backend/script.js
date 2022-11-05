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
var home = document.querySelector('#home')
var postura = document.querySelector('#postura')
var alertas = document.querySelector('#alertas')
var config = document.querySelector('#config')

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
    setAllNone()
    home.style.display = 'block'
}

function setPostura(){
    setAllNone()
    postura.style.display = 'block'
}

function setAlertas(){
    setAllNone()
    alertas.style.display = 'block'
}

function setConfig(){
    setAllNone()
    config.style.display = 'block'
}

function setAllNone(){
    home.style.display = 'none'
    postura.style.display = 'none'
    alertas.style.display = 'none'
    config.style.display = 'none'
}

function posturaIncorreta(local){
    alert(local)
}