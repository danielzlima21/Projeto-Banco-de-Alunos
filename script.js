function adicionarAluno(){
    let nome = document.getElementById('nome').value
    let nota1 = Number(document.getElementById('nota1').value)
    let nota2 = Number(document.getElementById('nota2').value)
    let media = (nota1 + nota2) / 2
    let lista = document.getElementById('lista')

    lista.innerHTML += `
    <div class="aluno">
        <p>
            Aluno: ${nome} |
            Nota 1: ${nota1} |
            Nota 2: ${nota2} |
            Média: ${media}
        </p>
    </div>
    `
    // limpar inputs
    document.getElementById('nome').value = ''
    document.getElementById('nota1').value = ''
    document.getElementById('nota2').value = ''
}
