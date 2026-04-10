export default function Contato() {
  return (
    <div>
      <main className="max-w-4xl mx-auto px-6 py-16">
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-6" style={{ color: '#35441c' }}>
      Dúvidas, reclamações ou sugestões
    </h2>
    <form className="flex flex-col gap-4">

      <input
        type="text"
        placeholder="Seu nome"
        className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
      />

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Seu e-mail"
          className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
        />
        <input
          type="text"
          placeholder="Seu telefone"
          className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
        />
      </div>

      <input
        type="text"
        placeholder="Assunto"
        className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
      />

      <textarea
        placeholder="Sua mensagem"
        rows={5}
        className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary resize-none"
      />

      <button
        type="submit"
        className="bg-secondary hover:bg-[#9cb400] text-white font-bold py-3 px-6 rounded-xl"
      >
        Enviar
      </button>

    </form>
  </section>

  <section>
    <h2 className="text-3xl font-bold mb-4" style={{ color: '#35441c' }}>
      E-mails para contato
    </h2>
    <div className="flex flex-col md:flex-row gap-4">
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=comunicacao@tdb.org.br"
        target="_blank"
        rel="noreferrer"
        className="text-primary hover:underline font-semibold"
      >
        comunicacao@tdb.org.br
      </a>
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=faleconosco@tdb.org.br"
        target="_blank"
        rel="noreferrer"
        className="text-primary hover:underline font-semibold"
      >
        faleconosco@tdb.org.br
      </a>
    </div>
  </section>
</main>
    </div>
  )
}