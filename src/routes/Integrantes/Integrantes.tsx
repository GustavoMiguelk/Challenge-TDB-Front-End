export default function Integrantes() {
  return (
    <div>
      <main>
      <h2>Nosso Time</h2>
      <section className="integrantes">
        {/* Integrante 1 */}
        <div className="integrante">
          <img src="/assets/images/img-14-foto-integrante.jpg" alt="Manuella Rinaldi" />
          <h3>Manuella Rinaldi</h3>
          <p><strong>RM:</strong>567915</p>
          <p><strong>Turma:</strong> 1TDSPB</p>
          <div className="links">
            <a href="https://github.com/manuellarinaldi" target="_blank" rel="noreferrer">GitHub</a> |
            <a href="https://www.linkedin.com/in/manuellarinaldii" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        {/* Integrante 2 */}
        <div className="integrante">
          <img src="/assets/images/img-15-foto-integrante.jpg" alt="Gustavo Miguel" />
          <h3>Gustavo Miguel</h3>
          <p><strong>RM:</strong>566666</p>
          <p><strong>Turma:</strong> 1TDSPB</p>
          <div className="links">
            <a href="https://github.com/GustavoMiguelk" target="_blank" rel="noreferrer">GitHub</a>|
            <a href="https://www.linkedin.com/in/gustavo-miguel-dev/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        {/* Integrante 3 */}
        <div className="integrante">
          <img src="/assets/images/img-16-foto-integrante.jpg" alt="Mariana de Paula" />
          <h3>Mariana de Paula</h3>
          <p><strong>RM:</strong> 566850</p>
          <p><strong>Turma:</strong> 1TDSPB</p>
          <div className="links">
            <a href="https://github.com/marianaaguiar27" target="_blank" rel="noreferrer">GitHub</a>|
            <a href="https://www.linkedin.com/in/mariana-de-paula-aguiar-149b34389/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}