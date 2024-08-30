function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else {
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}

var img = document.getElementById('imagem')

img.addEventListener('mouseenter', entrou)
img. addEventListener('mouseout', saiu)

function entrou () {
    img.style.width = '220px'
}

function saiu () {
    img.style.width = '200px'
}