function criptografar() {
    let textoOriginal = document.querySelector('input').value;
    textoOriginal = textoOriginal.toLowerCase();

    const vogaisCriptografadas = { "a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat" };

    let textoCriptografado = '';
    for (let i = 0; i < textoOriginal.length; i++) {
        const caractere = textoOriginal[i];
        if (vogaisCriptografadas.hasOwnProperty(caractere)) {
            textoCriptografado += vogaisCriptografadas[caractere];
        } else {
            textoCriptografado += caractere;
        }
    }
    let resultado = document.getElementById('campo-resultado');
    resultado.innerHTML = textoCriptografado;
}

function descriptografar() {
    let textoOriginal = document.querySelector('input').value;
    textoOriginal = textoOriginal.toLowerCase();

    const vogaisDescriptografadas = { "ai": "a", "enter": "e", "imes": "i", "ober": "o", "ufat": "u" };

    let textoDescriptografado = textoOriginal;
    for (let chave in vogaisDescriptografadas) {
        let valor = vogaisDescriptografadas[chave];
        let regex = new RegExp(chave, "g");
        textoDescriptografado = textoDescriptografado.replace(regex, valor);
    }

    let resultado = document.getElementById('campo-resultado');
    resultado.innerHTML = textoDescriptografado;
}

function copiar() {
    let resultado = document.getElementById('campo-resultado');
    textoParaCopiar = resultado.innerHTML;

    navigator.clipboard.writeText(textoParaCopiar)
        .then(() => {
            let statusCopia = document.getElementById('status-copia');
            statusCopia.innerHTML = 'Texto copiado para a área de transferência com sucesso!';
        })
        .catch(err => {
            let statusCopia = document.getElementById('status-copia');
            statusCopia.innerHTML = 'Erro ao copiar texto para a área de transferência', err;
        });
}