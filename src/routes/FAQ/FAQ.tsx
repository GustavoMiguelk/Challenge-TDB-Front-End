export default function FAQ() {
  return (
    <div className="min-h-screen font-sans text-[#8B5A2B]">
      {/* Header com Background Image e Overlay */}
      <header className="w-full h-[20rem] md:h-[40rem] bg-[url('https://turmadobem.org.br/wp-content/uploads/2022/08/dentista-do-bem-dentista-voluntario-1.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <h1 className="text-[2rem] md:text-[5rem] text-white font-bold px-4 text-center">
          FAQ sobre a ONG
        </h1>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex flex-wrap justify-center gap-8 md:gap-20 p-6 md:p-20">

        {/* Sobre a ONG */}
        <section className="w-full md:w-[40%] h-fit bg-[#FFFBEA] rounded-[2rem] overflow-hidden flex flex-wrap gap-4">
          <h2 className="w-full text-2xl text-white bg-[#BCC10E] rounded-t-[2rem] p-8">
            Sobre a ONG
          </h2>
          <div className="p-8 space-y-4">
            <p>
              <strong className="block mb-2">O que é a ONG Turma do Bem?</strong>
              A ONG Turma do Bem é uma organização sem fins lucrativos que oferece atendimento odontológico gratuito a crianças e adolescentes em situação de vulnerabilidade social, especialmente aqueles com graves problemas dentários.
            </p>
            <p>
              <strong className="block mb-2">Onde a ONG atua?</strong>
              A ONG Turma do Bem atua em todos os estados brasileiros e mais 12 países da América Latina e Portugal.
            </p>
          </div>
        </section>

        {/* Voluntariado */}
        <section className="w-full md:w-[40%] h-fit bg-[#FFFBEA] rounded-[2rem] overflow-hidden flex flex-wrap gap-4">
          <h2 className="w-full text-2xl text-white bg-[#BCC10E] rounded-t-[2rem] p-8">
            Voluntariado
          </h2>
          <div className="p-8 space-y-4">
            <p>
              <strong className="block mb-2">Como posso me tornar voluntariado?</strong>
              Se inscrevendo, responda nosso formulário e se torne um voluntariado!
            </p>
            <p>
              <strong className="block mb-2">Preciso ter consultório próprio para participar?</strong>
              Sim, é preciso ter consultório próprio para participar do voluntariado na Turma do Bem.
            </p>
          </div>
        </section>

        {/* Doações */}
        <section className="w-full md:w-[40%] h-fit bg-[#FFFBEA] rounded-[2rem] overflow-hidden flex flex-wrap gap-4">
          <h2 className="w-full text-2xl text-white bg-[#BCC10E] rounded-t-[2rem] p-8">
            Doações
          </h2>
          <div className="p-8 space-y-4">
            <p>
              <strong className="block mb-2">Posso doar materiais odontológicos?</strong>
              Sim! você pode doar materiais odontológicos.
            </p>
            <p>
              <strong className="block mb-2">Posso fazer doações mensais/recorrentes?</strong>
              Sim! é possível fazer doações mensais ou recorrentes para a Turma do Bem.
            </p>
          </div>
        </section>

        {/* Beneficiários */}
        <section className="w-full md:w-[40%] h-fit bg-[#FFFBEA] rounded-[2rem] overflow-hidden flex flex-wrap gap-4">
          <h2 className="w-full text-2xl text-white bg-[#BCC10E] rounded-t-[2rem] p-8">
            Beneficiários
          </h2>
          <div className="p-8 space-y-4">
            <p>
              <strong className="block mb-2">O atendimento é totalmente gratuito?</strong>
              Sim! você terá nenhum tipo de gasto.
            </p>
            <p>
              <strong className="block mb-2">Como posso inscrever alguém para receber atendimento?</strong>
              Acesse o site da ONG e realize o pré-cadastro.
            </p>
          </div>
        </section>

        {/* Dúvidas e Parcerias */}
        <section className="w-full md:w-[40%] h-fit bg-[#FFFBEA] rounded-[2rem] overflow-hidden flex flex-wrap gap-4">
          <h2 className="w-full text-2xl text-white bg-[#BCC10E] rounded-t-[2rem] p-8">
            Dúvidas e Parcerias
          </h2>
          <div className="p-8 space-y-4">
            <p>
              <strong className="block mb-2">Empresas podem fazer parceria com a Turma do Bem?</strong>
              Sim, empresas podem fazer parcerias com a Turma do Bem.
            </p>
            <p>
              <strong className="block mb-2">Instituições de ensino podem colaborar com a ONG?</strong>
              Sim, instituições de ensino podem colaborar com a ONG Turma do Bem.
            </p>
          </div>
        </section>

        {/* Outras Dúvidas */}
        <section className="w-full md:w-[40%] h-fit bg-[#FFFBEA] rounded-[2rem] overflow-hidden flex flex-wrap gap-4">
          <h2 className="w-full text-2xl text-white bg-[#BCC10E] rounded-t-[2rem] p-8">
            Outras Dúvidas
          </h2>
          <div className="p-8 space-y-4">
            <p>
              <strong className="block mb-2">A ONG turma do bem atende apenas adolescentes ou também adultos e crianças?</strong>
              A ONG Turma do Bem atende exclusivamente adolescentes de 11 a 17 anos, além de mulheres vítimas de violência.
            </p>
            <p>
              <strong className="block mb-2">A ONG realiza eventos ou campanhas?</strong>
              Sim! a ONG realiza eventos e campanhas em escolas.
            </p>
          </div>
        </section>

      </main>
    </div>
 

  )
}  