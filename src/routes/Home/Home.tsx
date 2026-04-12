export default function Home() {
  return (
    <main>
      {/* Hero */ }
      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="flex-1 flex items-center justify-center px-8 py-16">
          <div className="text-center md:text-left max-w-lg">
            <h1 className="text-6xl font-bold font-archivo">
              <span className="text-primary">Turma do</span> <span className="text-secondary">Bem</span>
            </h1>
            <p className="text-brown text-2xl mt-4 mb-8">Encontrando futuros mais sorridentes</p>
            <a href="/sobre" className="bg-secondary hover:bg-[#9cb400] text-white font-bold py-3 px-6 rounded-xl text-lg no-underline">
              Saiba Mais
            </a>
          </div>
        </div>
        <div
          className="flex-1 min-h-64 md:min-h-screen bg-cover bg-center"
          style={{ backgroundImage: "url('/img-02-retrato-menino-sorrindo.jpg')" }}
        />
      </div>

      {/*Quem pode fazer parte da Turma do Bem */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10" style={{ color: '#35441c' }}>
          Quem pode fazer parte da Turma do Bem?
        </h2>
        <p className="text-gray-600 text-lg text-center mb-10">
          A ONG Turma do Bem é formada por pessoas que acreditam no poder da solidariedade e desejam transformar realidades por meio de pequenas ações que geram grandes resultados.
        </p>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div
            className="flex-1 rounded-2xl bg-cover bg-center min-h-64"
            style={{ backgroundImage: "url('/img-03-mulher-sorrindo.png')" }}
          />
          <div className="flex-1">
            <ul className="space-y-4 list-none">
              <li className="text-gray-700"><strong className="text-brown">Profissionais da saúde:</strong> Dentistas, médicos e outros especialistas.</li>
              <li className="text-gray-700"><strong className="text-brown">Estudantes:</strong> Jovens que queiram contribuir com ações sociais.</li>
              <li className="text-gray-700"><strong className="text-brown">Empresas parceiras:</strong> Negócios que possam apoiar com recursos, materiais ou divulgação dos projetos.</li>
              <li className="text-gray-700"><strong className="text-brown">Voluntários em geral:</strong> Pessoas dispostas a doar seu tempo e energia em campanhas e eventos.</li>
              <li>
                <a href="/contato" className="bg-secondary hover:bg-[#9cb400] text-white font-bold py-3 px-6 rounded-xl no-underline inline-block mt-4">
                  Faça parte
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

    {/* Programas da Turma do Bem*/}
    <section className="py-20 px-6 bg-beige">
      <h2 className="text-4xl font-bold text-center mb-12" style={{ color: '#35441c' }}>
      Programas da Turma do Bem
      </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-4xl mx-auto">
          <a
            href="https://turmadobem.org.br/apolonias-do-bem/"
            target="_blank"
            className="w-80 h-80 rounded-full flex items-end justify-center overflow-hidden relative hover:scale-105 transition-transform duration-300 shadow-lg no-underline"
          >
            <div
              className="w-full h-full absolute bg-cover bg-center"
              style={{ backgroundImage: "url('/img-08-mulher-sorrindo-fundo-laranja.png')" }}
            />
            <div className="w-full bg-black/50 text-white text-center py-4 text-2xl font-bold relative z-10">
            Apolônias do bem
            </div>
          </a>
          <a
          href="https://turmadobem.org.br/dentista-do-bem/"
          target="_blank"
          className="w-80 h-80 rounded-full flex items-end justify-center overflow-hidden relative hover:scale-105 transition-transform duration-300 shadow-lg no-underline"
          >
            <div
            className="w-full h-full absolute bg-cover bg-center"
            style={{ backgroundImage: "url('/img-11-dentista-sorrindo.png')" }}
            />
            <div className="w-full bg-black/50 text-white text-center py-4 text-2xl font-bold relative z-10">
            Dentista do bem
          </div>
          </a>
        </div>
      </section>
    </main >
  )
}