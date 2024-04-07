/*
Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML

    Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele 

    Psso 2 - identificar o click no botão 

    Passo 3 - dicionar a classe 'ativo' nos projetos escondidos 

Objetivo 2 - esconder o botão de mostrar mais 
    Passo 1 - pegar o botão e esconder ele 
    */

   // Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no HTML

   //Passo 1 - pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele

   const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
   const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')

   botaoMostrarProjetos.addEventListener('click', () => {
    // Passo 3 - dicionar a classe 'ativo' nos projetos escondidos 

      //Objetivo 2 - esconder o botão de mostrar mais 
     // Passo 1 - pegar o botão e esconder ele
     botaoMostrarProjetos.classList.add("remover");

   });

      projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });


