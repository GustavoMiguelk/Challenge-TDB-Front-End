export default function Solucao() {
  return (
    <div className="min-h-screen font-sans text-[#8B5A2B] bg-white">
      {/* Header */}
      <header className="w-full h-[20rem] md:h-[40rem] bg-[url('https://turmadobem.org.br/wp-content/uploads/2022/08/banner-turma-do-bem-voluntario.jpg')] bg-no-repeat bg-center bg-cover flex items-center justify-center">
        <h1 className="text-[2rem] md:text-[5rem] text-white font-bold px-4 text-center drop-shadow-lg">
          Sobre a Solução
        </h1>
      </header>

      
      <main className="flex flex-wrap justify-center gap-8 md:gap-20 p-6 md:p-20">
        
       
        <section className="w-full md:w-[85%] lg:w-[70%] h-fit bg-[#FFFBEA] rounded-[2rem] overflow-hidden flex flex-wrap shadow-sm">
          <h2 className="w-full text-2xl md:text-3xl text-white bg-[#BCC10E] p-8 font-bold">
            O Desafio:
          </h2>
          <div className="p-8 md:p-12 space-y-6">
            <div>
              <strong className="block text-xl mb-3 text-[#BCC10E]">
                Qual a realidade enfrentada pela Turma do Bem?
              </strong>
              <p className="leading-relaxed text-lg text-justify">
                Hoje, a Turma do Bem enfrenta um desafio comum e urgente: a falta de recursos suficientes para alcançar todas as pessoas que precisam de ajuda para sustentar sua expansão exponencial.
              </p>
            </div>
            <p className="leading-relaxed text-lg text-justify">
              Apesar do trabalho dedicado de voluntários, parceiros e apoiadores, a demanda por atendimento cresce a cada dia, enquanto os mecanismos de gestão ainda não acompanham esse ritmo. Isso significa que, todos os dias, pessoas que poderiam ser atendidas acabam ficando de fora — não por falta de vontade, mas por falta de estrutura e recursos.
            </p>
          </div>
        </section>

        {/* Seções*/}
        <section className="w-full md:w-[85%] lg:w-[70%] h-fit bg-[#FFFBEA] rounded-[2rem] overflow-hidden flex flex-wrap shadow-sm">
          <h2 className="w-full text-2xl md:text-3xl text-white bg-[#BCC10E] p-8 font-bold">
            Nossa Solução: O Projeto Solução do Bem
          </h2>
          <div className="p-8 md:p-12 space-y-8">
            <p className="leading-relaxed text-lg text-justify font-medium italic">
              Não buscamos apenas paliativos, mas uma transformação estrutural. O <strong>Projeto Solução do Bem</strong> é a nossa resposta estratégica para converter o potencial da ONG em impacto real e escalável, focando na modernização dos pilares que sustentam a causa.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="bg-white/50 p-6 rounded-2xl border-l-4 border-[#BCC10E]">
                <strong className="block mb-2 text-[#BCC10E] text-lg">Excelência Operacional</strong>
                <p className="text-sm md:text-base">
                  Redesenhamos processos internos para garantir que cada recurso seja aproveitado ao máximo, aumentando a capacidade de atendimento.
                </p>
              </div>

              
              <div className="bg-white/50 p-6 rounded-2xl border-l-4 border-[#BCC10E]">
                <strong className="block mb-2 text-[#BCC10E] text-lg">Engajamento e Mobilização</strong>
                <p className="text-sm md:text-base">
                  Criamos ferramentas que facilitam o apoio recorrente e transformam doadores em embaixadores da saúde bucal.
                </p>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
   


    

