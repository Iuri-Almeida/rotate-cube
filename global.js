// referenciando as TAGs HTML
const cube = document.querySelector('div.cube')
const cubeFront = document.querySelector('div.buttons button.cube-front')
const cubeBack = document.querySelector('div.buttons button.cube-back')
const cubeRight = document.querySelector('div.buttons button.cube-right')
const cubeLeft = document.querySelector('div.buttons button.cube-left')
const cubeTop = document.querySelector('div.buttons button.cube-top')
const cubeBottom = document.querySelector('div.buttons button.cube-bottom')

// função responsável por adicionar a TAG show-ELEMENT
function addClass (element, className) {

    // adicionamos as duas novamente
    element.setAttribute('class', `cube ${className}`)
}

// referenciando os botões quando forem clicados acionarem a função
cubeFront.onclick = () => addClass(cube, 'show-front')
cubeBack.onclick = () => addClass(cube, 'show-back')
cubeRight.onclick = () => addClass(cube, 'show-right')
cubeLeft.onclick = () => addClass(cube, 'show-left')
cubeTop.onclick = () => addClass(cube, 'show-top')
cubeBottom.onclick = () => addClass(cube, 'show-bottom')
