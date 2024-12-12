//1- No nosso dia a dia, o uso de senhas é algo comum, pois usamos muitos sistemas ou aplicativos diferentes.
//Como recomendação de segurança, é necessário que para cada aplicativo que usamos, seja gerada uma senha segura.
//Usando a técnica de arrays, gere 5 senhas que contenham pelo menos 10 caracteres, 
//contendo pelo menos 5 letras, sendo 2 maiúsculas e 2 minúsculas, 2 números e um caractere especial 
//(ponto, hashtag, barra, ponto de interrogação, arroba). Use a tabela ASCII como base para gerar caracteres aleatórios.



// Função para gerar um caractere aleatório dentro de um intervalo da tabela ASCII
const caractereAleatorio = (inicio: number, fim: number): string => {
  const codigo = Math.floor(Math.random() * (fim - inicio + 1)) + inicio;
  return String.fromCharCode(codigo);
};

// Função para gerar uma senha com as especificações
const gerarSenha = (): string => {
  let senha = "";

//  pelo menos 2 maiusculas 
  senha += caractereAleatorio(65, 90);
  senha += caractereAleatorio(65, 90);

  //  pelo menos 2 minúsculas 
  senha += caractereAleatorio(97, 122);
  senha += caractereAleatorio(97, 122);

  //  pelo menos 2 números 
  senha += caractereAleatorio(48, 57);
  senha += caractereAleatorio(48, 57);

  //  pelo menos 1 caractere especial 
  senha += caractereAleatorio(33, 47);

  // Completar a senha com caracteres aleatórios para ter pelo menos 10 caracteres
  while (senha.length < 10) {
      const tipoAleatorio = Math.random();
      if (tipoAleatorio < 0.33) {
          senha += caractereAleatorio(65, 90); // Maiúsculas
      } else if (tipoAleatorio < 0.66) {
          senha += caractereAleatorio(97, 122); // Minúsculas
      } else {
          senha += caractereAleatorio(48, 57); // Números
      }
  }

  return senha;
};

// Gerar 5 senhas seguras e imprimir 
const senhas = Array.from({ length: 5 }, gerarSenha);
console.log(senhas);
