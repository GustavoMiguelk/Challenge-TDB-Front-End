import { useNavigate } from 'react-router-dom'
import TituloPagina from '../../components/TituloPagina/TituloPagina'


export default function Integrantes() {
  const navigate = useNavigate()
  return (
    <div>
<main>
  <TituloPagina titulo="Nosso Time" />
  <section className="flex justify-center gap-[40px] flex-wrap text-center mt-[40px] bg-[rgb(255,255,254)] px-4 py-8">
    {/* Integrante 1 */}
     <div className="bg-white rounded-2xl shadow-md p-6 w-64 flex flex-col items-center gap-2">
          <img src="/img-14-foto-integrante.jpg" alt="Manuella Rinaldi" className="w-36 h-36 rounded-full object-cover border-4 border-secondary" />
          <h3 className="text-lg font-bold text-gray-800">Manuella Rinaldi</h3>
          <p className="text-sm text-gray-600"><strong>RM:</strong> 567915</p>
          <p className="text-sm text-gray-600"><strong>Turma:</strong> 1TDSPB</p>
          <div className="flex gap-3">
            <a href="https://github.com/manuellarinaldi" target="_blank" rel="noreferrer" className="text-sm font-semibold text-brown hover:text-primary">GitHub</a>
            <span className="text-gray-400">|</span>
            <a href="https://www.linkedin.com/in/manuellarinaldii" target="_blank" rel="noreferrer" className="text-sm font-semibold text-brown hover:text-primary">LinkedIn</a>
          </div>
          <button onClick={() => navigate('/integrantes/manuella-rinaldi')} className="mt-2 bg-secondary hover:bg-[#9cb400] text-white font-bold px-4 py-2 rounded-xl w-full">
            Ver perfil
          </button>
        </div>
    {/* Integrante 2 */}
     <div className="bg-white rounded-2xl shadow-md p-6 w-64 flex flex-col items-center gap-2">
          <img src="/img-15-foto-integrante.jpg" alt="Gustavo Miguel" className="w-36 h-36 rounded-full object-cover border-4 border-secondary" />
          <h3 className="text-lg font-bold text-gray-800">Gustavo Miguel</h3>
          <p className="text-sm text-gray-600"><strong>RM:</strong> 566666</p>
          <p className="text-sm text-gray-600"><strong>Turma:</strong> 1TDSPB</p>
          <div className="flex gap-3">
            <a href="https://github.com/GustavoMiguelk" target="_blank" rel="noreferrer" className="text-sm font-semibold text-brown hover:text-primary">GitHub</a>
            <span className="text-gray-400">|</span>
            <a href="https://www.linkedin.com/in/gustavo-miguel-dev/" target="_blank" rel="noreferrer" className="text-sm font-semibold text-brown hover:text-primary">LinkedIn</a>
          </div>
          <button onClick={() => navigate('/integrantes/gustavo-miguel')} className="mt-2 bg-secondary hover:bg-[#9cb400] text-white font-bold px-4 py-2 rounded-xl w-full">
            Ver perfil
          </button>
        </div>
    {/* Integrante 3 */}
     <div className="bg-white rounded-2xl shadow-md p-6 w-64 flex flex-col items-center gap-2">
          <img src="/img-16-foto-integrante.jpg" alt="Mariana de Paula" className="w-36 h-36 rounded-full object-cover border-4 border-secondary" />
          <h3 className="text-lg font-bold text-gray-800">Mariana de Paula</h3>
          <p className="text-sm text-gray-600"><strong>RM:</strong> 566850</p>
          <p className="text-sm text-gray-600"><strong>Turma:</strong> 1TDSPB</p>
          <div className="flex gap-3">
            <a href="https://github.com/marianaaguiar27" target="_blank" rel="noreferrer" className="text-sm font-semibold text-brown hover:text-primary">GitHub</a>
            <span className="text-gray-400">|</span>
            <a href="https://www.linkedin.com/in/mariana-de-paula-aguiar-149b34389/" target="_blank" rel="noreferrer" className="text-sm font-semibold text-brown hover:text-primary">LinkedIn</a>
          </div>
          <button onClick={() => navigate('/integrantes/mariana-de-paula')} className="mt-2 bg-secondary hover:bg-[#9cb400] text-white font-bold px-4 py-2 rounded-xl w-full">
            Ver perfil
          </button>
        </div>
  </section>
</main>
    </div>
  )
}