export function calcularIdade(dataNascimento: Date) {
  let dataAtual = new Date();

  let anoAtual = dataAtual.getFullYear();
  let mesAtual = dataAtual.getMonth() + 1;
  let diaAtual = dataAtual.getDate();

  let anoNascimento = dataNascimento.getFullYear();
  let mesNascimento = dataNascimento.getMonth() + 1;
  let diaNascimento = dataNascimento.getDate();

  let diferencaAnos = anoAtual - anoNascimento;

  if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
      diferencaAnos--;
  }

  return diferencaAnos;
}