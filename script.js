function sistema_de_dados_Academico() {

    let totalAulas = parseInt(prompt("Digite o número de aulas do semestre:"));
    let faltas = parseInt(prompt("Digite o número de faltas do aluno:"));
    let p1 = parseFloat(prompt("Digite a primeira nota (P1):"));
    let p2 = parseFloat(prompt("Digite a segunda nota (P2):"));

    
    let frequencia = ((totalAulas - faltas) / totalAulas) * 100;

    
    let media = (p1 + p2) / 2;
    let notaRecuperacao = '';
    let situacao = "";

    
    if (frequencia < 75) {
        situacao = "Reprovado por falta";
    } else {
        if (media >= 7.0) {
            situacao = "Aprovado";
        } else if (media >= 5.0) {
            notaRecuperacao = parseFloat(prompt("Digite a nota da recuperação:"));
            let novaMedia = (media + notaRecuperacao) / 2;

            if (novaMedia >= 5.0) {
                situacao = "o aluno está em recuperação";
            } else {
                situacao = "o aluno não está em recuperação";
            }
        } else {
            situacao = "Reprovado por nota";
        }
    }

    
    let resultado = `==== Resultado Final ====
Número de aulas do semestre: ${totalAulas}
Número de faltas do aluno: ${faltas}
Percentual de presença do aluno: ${frequencia.toFixed(2)}%
Primeira nota (P1): ${p1}
Segunda nota (P2): ${p2}
Nota complementar (recuperação): ${notaRecuperacao}`;


    resultado += `\nmédia final do aluno: ${media.toFixed(2)}` ;

    alert(resultado);
    console.log(resultado);
}


sistema_de_dados_Academico();
