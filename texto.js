const texto = document.querySelector('#texto')

function digitador(elemento){
    const textoarray = elemento.innerHTML.split('') // vai separar cada letra da frase
    elemento.innerHTML = ''
    textoarray.forEach((letra, indice) => {
        setTimeout(() =>
            elemento.innerHTML += letra, 70 * indice)
    });
    
}

digitador(texto)