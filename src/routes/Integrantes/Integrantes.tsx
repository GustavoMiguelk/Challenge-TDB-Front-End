export default function Integrantes() {
  return (
    <div>
<main>
  <h2 className="block text-center text-5xl text-white bg-[#BCC10e] rounded-[10px] w-[700px] max-w-[90%] px-[10px] py-[10px] mx-auto mt-[50px] md:text-4xl md:mt-8 sm:text-[1.8rem]">
    Nosso Time
  </h2>
  <section className="flex justify-center gap-[40px] flex-wrap text-center mt-[40px] bg-[rgb(255,255,254)] px-4 py-8">
    {/* Integrante 1 */}
    <div className="py-8 md:py-8">
      <img src="/assets/images/img-14-foto-integrante.jpg" alt="Manuella Rinaldi" className="w-[150px] h-[150px] rounded-full object-cover mx-auto" />
      <h3 className="mb-[5px] text-[1.1rem] text-[#0f0f0f]">Manuella Rinaldi</h3>
      <p className="text-[#0f0f0f] text-[0.9rem]"><strong>RM:</strong>567915</p>
      <p className="text-[#0f0f0f] text-[0.9rem]"><strong>Turma:</strong> 1TDSPB</p>
      <div className="flex justify-center gap-2">
        <a href="https://github.com/manuellarinaldi" target="_blank" rel="noreferrer">GitHub</a> |
        <a href="https://www.linkedin.com/in/manuellarinaldii" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
    {/* Integrante 2 */}
    <div className="py-8 md:py-8">
      <img src="/assets/images/img-15-foto-integrante.jpg" alt="Gustavo Miguel" className="w-[150px] h-[150px] rounded-full object-cover mx-auto" />
      <h3 className="mb-[5px] text-[1.1rem] text-[#0f0f0f]">Gustavo Miguel</h3>
      <p className="text-[#0f0f0f] text-[0.9rem]"><strong>RM:</strong>566666</p>
      <p className="text-[#0f0f0f] text-[0.9rem]"><strong>Turma:</strong> 1TDSPB</p>
      <div className="flex justify-center gap-2">
        <a href="https://github.com/GustavoMiguelk" target="_blank" rel="noreferrer">GitHub</a>|
        <a href="https://www.linkedin.com/in/gustavo-miguel-dev/" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
    {/* Integrante 3 */}
    <div className="py-8 md:py-8">
      <img src="/assets/images/img-16-foto-integrante.jpg" alt="Mariana de Paula" className="w-[150px] h-[150px] rounded-full object-cover mx-auto" />
      <h3 className="mb-[5px] text-[1.1rem] text-[#0f0f0f]">Mariana de Paula</h3>
      <p className="text-[#0f0f0f] text-[0.9rem]"><strong>RM:</strong> 566850</p>
      <p className="text-[#0f0f0f] text-[0.9rem]"><strong>Turma:</strong> 1TDSPB</p>
      <div className="flex justify-center gap-2">
        <a href="https://github.com/marianaaguiar27" target="_blank" rel="noreferrer">GitHub</a>|
        <a href="https://www.linkedin.com/in/mariana-de-paula-aguiar-149b34389/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  </section>
</main>
    </div>
  )
}