export default function Sobre() {
  return (
    <main>
      {/*Banner e estilização*/}
      <div
      className="h-72 md:h-96 flex items-end bg-cover bg-center"
      style={{backgroundImage: "url('https://turmadobem.org.br/wp-content/uploads/2022/08/banner-turma-do-bem-voluntario.jpg')"}}
      >
      <h1 className="text-white text-5xl md:text-7xl font-bold p-12">Conheça o nosso Projeto</h1>
      </div>
       <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <img src="/img-20-mulher-feliz.png" alt="Paciente mulher da Turma do Bem sorrindo" className="w-full rounded-xl" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#35441c' }}>Quem é a Turma do Bem?</h2>
            <p className="text-gray-600 text-lg leading-relaxed">Somos uma rede de voluntários que acredita que todo sorriso tem valor. Atuamos oferecendo serviços odontológicos gratuitos para crianças, adolescentes e adultos em situação de vulnerabilidade. Nosso trabalho já impactou milhares de vidas e continua crescendo.</p>
          </div>
          
          {/*Seções estilizadas */}
        </section>
        <section className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="flex-1">
            <img src="/img-19-mulher-sorrindo-flor.png" alt="Mulher feliz cheirando um buquê de flores" className="w-full rounded-xl" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#35441c' }}>O Problema e a Nossa Solução</h2>
            <p className="text-gray-600 text-lg leading-relaxed">A Turma do Bem identificou a necessidade de ampliar seus recursos para alcançar ainda mais pessoas. Para apoiar essa causa, desenvolvemos o Projeto Solução do Bem, que busca criar novas formas de gestão e apoio para potencializar o impacto da ONG.</p>
          </div>
        </section>
         <section className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <img src="/img-18-dentista-atendendo.png" alt="Dentista atendendo um paciente" className="w-full rounded-xl" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#35441c' }}>Tecnologias Utilizadas</h2>
            <p className="text-gray-600 text-lg leading-relaxed">Nossa equipe utilizou React com TypeScript para a construção dos componentes, Vite como ferramenta de build, Tailwind CSS para a estilização responsiva, React Router DOM para a navegação entre páginas, React Hook Form para validação de formulários, além de Java 17+, Quarkus, Maven, API REST e Banco de Dados Oracle no desenvolvimento do backend.</p>
          </div>
        </section>
        <section className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="flex-1">
            <img src="/img-17-crianca-no-dentista.png" alt="Criança numa consulta com dentista" className="w-full rounded-xl" />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4" style={{ color: '#35441c' }}>Roteiro de Implementação</h2>
            <ul className="space-y-2 text-gray-600 text-lg list-disc pl-5">
              <li>Etapa 1: Levantamento do problema (semana 1)</li>
              <li>Etapa 2: Pesquisa de soluções (semana 2)</li>
              <li>Etapa 3: Desenvolvimento do site (semana 3)</li>
              <li>Etapa 4: Testes e ajustes (semana 4)</li>
              <li>Etapa 5: Entrega final e apresentação</li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  )
}