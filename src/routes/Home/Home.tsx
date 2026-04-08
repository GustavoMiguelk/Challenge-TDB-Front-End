export default function Home() {
  return (
    <main>
      <div id="hero">
        <div id="hero-text">
          <div>
            <h1><span>Turma do</span> Bem</h1>
            <p>Encontrando futuros mais sorridentes</p>
            <a href="/sobre" className="btn-tdb">Saiba Mais</a>
          </div>
        </div>
        <div id="hero-image"></div>
      </div>
      <section>
        <h2>Quem pode fazer parte da Turma do Bem?</h2>
        <aside>
          <p>A ONG Turma do Bem é formada por pessoas que acreditam no poder da solidariedade e desejam transformar realidades por meio de pequenas ações que geram grandes resultados. Nosso propósito é reunir indivíduos, profissionais e instituições dispostos a contribuir para o bem-estar social, promovendo saúde e cidadania.</p>
        </aside>
        <aside id="aside-membros-tdb">
          <div id="img-aside-membros"></div>
          <div id="list-aside-membros">
            <ul>
              <li><strong>Profissionais da saúde:</strong> Dentistas, médicos e outros especialistas.</li>
              <li><strong>Estudantes:</strong> Jovens que queiram contribuir com ações sociais.</li>
              <li><strong>Empresas parceiras:</strong> Negócios que possam apoiar com recursos, materiais ou divulgação dos projetos.</li>
              <li><strong>Voluntários em geral:</strong> Pessoas dispostas a doar seu tempo e energia em campanhas e eventos.</li>
              <li><a href="#" className="btn-tdb">Faça parte</a></li>
            </ul>
          </div>
        </aside>
      </section>
      <section>
        <h2>Programas da Turma do Bem</h2>
        <aside id="programas">
          <div id="img-programa-apolonias"><a href="https://turmadobem.org.br/apolonias-do-bem/" target="_blank"><span>Apolônias do bem</span></a></div>
          <div id="img-programa-dentistas-db"><a href="https://turmadobem.org.br/dentista-do-bem/" target="_blank"><span>Dentista do bem</span></a></div>
        </aside>
      </section>
    </main>
  )
}