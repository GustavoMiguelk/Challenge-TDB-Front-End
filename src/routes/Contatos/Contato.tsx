export default function Contato() {
  return (
    <div>
      <main className="container">
  <section>
    <aside>
      <h2>Dúvidas, reclamações ou sugestões</h2>
      <form id="formContato">
        <input type="text" id="nome" placeholder="Seu nome" />

        <div id="wrap-contato">
          <input type="text" id="email" placeholder="Seu e-mail" />
          <input type="text" id="telefone" placeholder="Seu Telefone" />
        </div>

        <input type="text" id="assunto" placeholder="Assunto" />
        <input type="text" id="mensagem" placeholder="Sua mensagem" />

        <button type="submit">Enviar</button>
      </form>
      <p id="statusMsg" style={{ marginTop: "10px", fontWeight: "bold" }}></p>
    </aside>
  </section>
  <section>
    <aside>
      <h2>E-mails para contato</h2>
      <div id="contact-email">
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=comunicacao@tdb.org.br&su=Assunto%20do%20Email&body=Olá,%20gostaria%20de%20saber%20mais..." target="_blank" rel="noreferrer">
          comunicacao@tdb.org.br
        </a>{" "}|{" "}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=faleconosco@tdb.org.br&su=Assunto%20do%20Email&body=Olá,%20gostaria%20de%20saber%20mais..." target="_blank" rel="noreferrer">
          faleconosco@tdb.org.br
        </a>
      </div>
    </aside>
  </section>
</main>
    </div>
  )
}