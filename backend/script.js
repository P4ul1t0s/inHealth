var root = document.documentElement;
var backgruoundColor, borderColor, fontColor;
var darkButton = document.querySelector('.darkButton')
var lightButton = document.querySelector('.lightButton')
var graficoDark = document.querySelector('.graficoDark')
var graficoLight = document.querySelector('.graficoLight')
var home = document.querySelector('#home')
var relatorio = document.querySelector('#relatorio')
var infoStatusSensorPescoco = document.querySelector('#sensor1Strong')
var infoDistAtualSensorPescoco = document.querySelector('#infoDistAtualSensorPescoco')
var infoDistIdealSensorPescoco = document.querySelector('#infoDistIdealSensorPescoco')
var infoStatuSensorCostass = document.querySelector('#sensor2Strong')
var infoDistAtualSensorCostas = document.querySelector('#infoDistAtualSensorCostas')
var infoDistIdealSensorCostas = document.querySelector('#infoDistIdealSensorCostas')
var infoStatusSensorLombarD = document.querySelector('#sensor3Strong')
var infoDistAtualSensorLombarD = document.querySelector('#infoDistAtualSensorLombarD')
var infoDistIdealSensorLombarD = document.querySelector('#infoDistIdealSensorLombarD')
var infoStatusSensorLombarE = document.querySelector('#sensor4Strong')
var infoDistAtualSensorLombarE = document.querySelector('#infoDistAtualSensorLombarE')
var infoDistIdealSensorLombarE = document.querySelector('#infoDistIdealSensorLombarE')

if(!localStorage.getItem('theme')){
    localStorage.setItem('theme', body.style.backgroundColor);
}

toggleMode(localStorage.getItem('theme'));

function toggleMode(theme){
    localStorage.setItem('theme', theme)

    if(theme === "dark"){
        backgruoundColor = "--cinzaEscuro"
        borderColor = "--cinzaClaro"
        fontColor = "--cinzaClaro"
        titleColor = "--cinzaClaro"
        darkButton.style.display = 'none'
        lightButton.style.display = 'unset'
        graficoDark.style.display = 'unset'
        graficoLight.style.display = 'none'
    }else if(theme === "light"){
        backgruoundColor = "--branco"
        borderColor = "--cinzaEscuro"
        fontColor = "--preto"
        titleColor = "--cinzaAzul"
        darkButton.style.display = 'unset'
        lightButton.style.display = 'none'
        graficoDark.style.display = 'none'
        graficoLight.style.display = 'unset'
    }
    // console.log(theme, backgruoundColor, borderColor, fontColor, localStorage.getItem('theme'))
    root.style.setProperty('--backgruoundColor', `var(${backgruoundColor})`);
    root.style.setProperty('--borderColor', `var(${borderColor})`);
    root.style.setProperty('--fontColor', `var(${fontColor})`);
    root.style.setProperty('--titleColor', `var(${titleColor})`);
}

if(localStorage.getItem('button')){
    setDashboard(localStorage.getItem('button'), localStorage.getItem('dashboard'))
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

function analiseDeSensor(sensor1, sensor2, sensor3, sensor4){
    infoStatusSensorPescoco.innerHTML = `${verificaPostura(sensor1)}`
    infoDistAtualSensorPescoco.innerHTML = `Distância atual: ${sensor1.distanciaAtual}cm`
    infoDistIdealSensorPescoco.innerHTML = "Distância ideal: 0-10cm"

    infoStatuSensorCostass.innerHTML = `${verificaPostura(sensor2)}`
    infoDistAtualSensorCostas.innerHTML = `Distância atual: ${sensor2.distanciaAtual}cm`
    infoDistIdealSensorCostas.innerHTML = "Distância ideal: 0cm"

    infoStatusSensorLombarD.innerHTML = `${verificaPostura(sensor3)}`
    infoDistAtualSensorLombarD.innerHTML = `Distância atual: ${sensor3.distanciaAtual}cm`
    infoDistIdealSensorLombarD.innerHTML = "Distância ideal: 0-5cm"

    infoStatusSensorLombarE.innerHTML = `${verificaPostura(sensor4)}`
    infoDistAtualSensorLombarE.innerHTML = `Distância atual: ${sensor4.distanciaAtual}cm`
    infoDistIdealSensorLombarE.innerHTML = "Distância ideal: 0-5cm"
}

function verificaPostura(sensor){
    if(sensor.distanciaAtual <= sensor.distanciaIdeal){
        return "Correta"
    }else{
        var sensorAtual = document.querySelector(`.${sensor.nome}`)
        sensorAtual.style.display = 'none';
        var sensorAtualM = document.querySelector(`.${sensor.nome}M`)
        sensorAtualM.style.display = 'none';
        var strong = document.querySelector(`#${sensor.nome}Strong`)
        strong.style.color = 'rgb(255, 0, 0)';
        return "Incorreta"
    }
}

var sensor1 = {
    nome: 'sensor1',
    distanciaAtual: 23,
    distanciaIdeal: 10
}

var sensor2 = {
    nome: 'sensor2',
    distanciaAtual: 0,
    distanciaIdeal: 0
}

var sensor3 = {
    nome: 'sensor3',
    distanciaAtual: 0,
    distanciaIdeal: 5
}

var sensor4 = {
    nome: 'sensor4',
    distanciaAtual: 15,
    distanciaIdeal: 5
}

analiseDeSensor(sensor1, sensor2, sensor3, sensor4)