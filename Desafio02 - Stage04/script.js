const alunos = [
  { nome: "Márcio", a1: 8.5, a2: 10 },
  { nome: "Lucas", a1: 8.5, a2: 2 },
  { nome: "Pinto", a1: 6, a2: 1 },
];

let lista = [];

function calcMedia(a1, a2) {
  return (a1 + a2) / 2;
}

function notasAlunos(alunos) {
  if (calcMedia(alunos.a1, alunos.a2) > 6) {
    alert(
      "A Média do aluno " +
        alunos.nome +
        " é: " +
        calcMedia(alunos.a1, alunos.a2) +
        "\n" +
        "Você foi aprovado(a), Parabéns"
    );
  } else {
    alert(
      "A Média do aluno " +
        alunos.nome +
        " é: " +
        calcMedia(alunos.a1, alunos.a2) +
        "\n" +
        "Não foi dessa vez, Tente novamente!"
    );
  }
}

for (const aluno of alunos) {
  notasAlunos(aluno);
}
