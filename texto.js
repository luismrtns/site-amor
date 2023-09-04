const texto = document.querySelector('#texto')

function digitador(elemento){
    const textoarray = elemento.innerHTML.split('') // vai separar cada letra da frase
    elemento.innerHTML = '' //vai tirar o texto da tela e só vai aparecer quando o site reiniciar
    textoarray.forEach((letra, indice) => { //para cada letra no indice...
        setTimeout(() => // adicionar a fatia de tempo para cada letra aparecer
            elemento.innerHTML += letra, 70 * indice) // vai adicionar cada letra seguida da outra após 70 milisegundos
    });
    
}

digitador(texto)