// Captura o formulario e a msg de Status
const form = document.getElementById("formContato");
const statusMsg = document.getElementById("statusMsg");

// Cria um evento ativado ao submeter o formulário
form.addEventListener("submit", function(e){
    e.preventDefault();

    // Captura os dados digitados em alguns inputs
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // Verifica se os inputs tem conteudo
    if (!nome || !email || !mensagem) {
        // Se não tiver, muda a cor da msg de status e conteudo
        statusMsg.style.color = "red";
        statusMsg.textContent = "Por favor, preencha nome, e-mail e mensagem.";

        return;
    }

    statusMsg.style.color = "blue";
    statusMsg.textContent = "Enviando... aguarde...";

    // Simulando delay de envio
    setTimeout(() => {
        // Salva o nome do usuario
        localStorage.setItem("nomeUsuario", nome);

        // Diz que o email foi enviado
        statusMsg.style.color = "green";
        statusMsg.textContent = `A Turma do Bem agradece, ${nome}! Sua mensagem foi enviada com sucesso!`;
        form.reset();
    }, 1000);
});