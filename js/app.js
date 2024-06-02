// Selecione todos os botões de alternância
const toggleButtons = document.querySelectorAll('.toggle-resposta');

// Adicione um ouvinte de evento de clique a cada botão
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Selecione a resposta associada ao botão atual
    const resposta = button.nextElementSibling;

    // Alternar a exibição da resposta
    resposta.classList.toggle('visivel');

    // Alterar o texto do botão baseado na visibilidade da resposta
    if (resposta.classList.contains('visivel')) {
      button.textContent = '-';
    } else {
      button.textContent = '+';
    }
  });
});
