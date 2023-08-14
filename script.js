function sim(){
    alert('agora vamos ser felizes por mais um aninho, minha princesa!')
}

function mudarPos(min, max){ // vai gerar número aletório para mudar a posição do botão
    return (Math.random() * (max-min) + min) + '%'
}

function desvia(){
    var nao = document.getElementById('opnao')
    nao.style.position = 'absolute'
    nao.style.bottom = mudarPos(5, 95)
    nao.style.right = mudarPos(5, 95)
}