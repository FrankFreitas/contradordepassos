function verificar() {
    var s = document.querySelector('#startid').value
    var e = document.querySelector('#endid').value
    var p = document.querySelector('#passoid').value
    var texto = document.querySelector('#texto')

    if (s.length == 0 || e.length == 0 || p.length == 0) {
        alert('[ERRO] Faltam dados!')
    } else {
        texto.innerHTML = 'Contando: '
        var i = Number(s)
        var f = Number(e)
        var ps = Number(p)
        if (ps <= 0) {
            alert('Passo invalido! Considerando PASSO 1')
            ps = 1
        }
        for (var c = i; c <= f; c += ps) {
            texto.innerHTML += `${c} \u{1F603} `
        }

    }
}



