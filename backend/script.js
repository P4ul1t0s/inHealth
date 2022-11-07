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
var infoPostura = document.querySelector('#info')
var infoSensor = document.querySelector('#infoSensor')
var infoStatus = document.querySelector('#infoStatus')
var infoDistAtual = document.querySelector('#infoDistAtual')
var infoDistIdeal = document.querySelector('#infoDistIdeal')
var sensorNome, sensorStatus = 'Status: ', sensorDistAtual = 'Distância atual: ', sensorDistIdeal = 'Distância recomendada: '

if(localStorage.getItem('button')){
    setDashboard(localStorage.getItem('button'), localStorage.getItem('dashboard'))
}

if(!localStorage.getItem('theme')){
    localStorage.setItem('theme', body.style.backgroundColor);
}

toggleMode(localStorage.getItem('theme'));

function setAllNone(){
    home.style.display = 'none'
    postura.style.display = 'none'
    alertas.style.display = 'none'
    config.style.display = 'none'
    botãoHome.style.backgroundColor = 'transparent'
    botãoPostura.style.backgroundColor = 'transparent'
    botãoAlertas.style.backgroundColor = 'transparent'
    botãoConfig.style.backgroundColor = 'transparent'
}

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

function testeMode(theme){
    alert(theme)
    const root = document.documentElement;
    if(theme === "dark"){
        root.style.setProperty('--backgruoundColor', `var(--cinzaEscuro)`);
    }

}

function redirectToSetDashboard(button, dashboard){
    localStorage.setItem('button', button);
    localStorage.setItem('dashboard', dashboard);
    window.location.replace('services.html')
}

function setDashboard(button, dashboard){
    setAllNone()
    button = document.querySelector(`#${button}`)
    dashboard = document.querySelector(`#${dashboard}`)
    button.style.backgroundColor = '#00000020';
    dashboard.style.display = 'block'
}

function analiseDeSensor(local){
    limpaInfos()
    switch(local){
        case 'pescocoCorreta':
            sensorNome = 'Pescoço/Cabeça'
            sensorStatus += 'Postura correta'
            sensorDistAtual += '~9cm'
            sensorDistIdeal += '0-10cm'
        break;
        case 'costasCorreta':
            sensorNome = 'Costas'
            sensorStatus += 'Postura correta'
            sensorDistAtual += '~0cm'
            sensorDistIdeal += '0cm'
        break;
        case 'lombarEsquerdaCorreta':
            sensorNome = 'Lombar Esquerda'
            sensorStatus += 'Postura correta'
            sensorDistAtual += '~4cm'
            sensorDistIdeal += '0-5cm'
        break;
        case 'lombarDireitaCorreta':
            sensorNome = 'Lombar Direita'
            sensorStatus += 'Postura correta'
            sensorDistAtual += '~2cm'
            sensorDistIdeal += '0-5cm'
        break;
    }

    infoSensor.innerHTML = `Monitorando sensor ${sensorNome}`
    infoStatus.innerHTML = sensorStatus
    infoDistAtual.innerHTML = sensorDistAtual
    infoDistIdeal.innerHTML = sensorDistIdeal
}

function limpaInfos(){
    sensorStatus = 'Status: '
    sensorDistAtual = 'Distância atual: '
    sensorDistIdeal = 'Distância recomendada: '
}