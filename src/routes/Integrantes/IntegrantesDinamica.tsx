import { useParams, useNavigate } from 'react-router-dom'

const integrantes = {
  'manuella-rinaldi': {
    nome: 'Manuella Rinaldi',
    rm: '567915',
    turma: '1TDSPB',
    foto: '/img-14-foto-integrante.jpg',
    github: 'https://github.com/manuellarinaldi',
    linkedin: 'https://www.linkedin.com/in/manuellarinaldii',
  },
  'gustavo-miguel': {
    nome: 'Gustavo Miguel',
    rm: '566666',
    turma: '1TDSPB',
    foto: '/img-15-foto-integrante.jpg',
    github: 'https://github.com/GustavoMiguelk',
    linkedin: 'https://www.linkedin.com/in/gustavo-miguel-dev/',
  },
  'mariana-de-paula': {
    nome: 'Mariana de Paula',
    rm: '566850',
    turma: '1TDSPB',
    foto: '/img-16-foto-integrante.jpg',
    github: 'https://github.com/marianaaguiar27',
    linkedin: 'https://www.linkedin.com/in/mariana-de-paula-aguiar-149b34389/',
  },
}

export default function IntegrantesDinamica() {
  const { id } = useParams()
  const navigate = useNavigate()

  const integrante = integrantes[id as keyof typeof integrantes]

  return (
    <main className="max-w-lg mx-auto px-6 py-16 text-center">
      <img
        src={integrante.foto}
        alt={integrante.nome}
        className="w-40 h-40 rounded-full object-cover border-4 border-secondary mx-auto mb-6"
      />
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{integrante.nome}</h1>
      <p className="text-gray-600 mb-1"><strong>RM:</strong> {integrante.rm}</p>
      <p className="text-gray-600 mb-6"><strong>Turma:</strong> {integrante.turma}</p>
      <div className="flex justify-center gap-4 mb-8">
        <a
          href={integrante.github}
          target="_blank"
          rel="noreferrer"
          className="bg-secondary hover:bg-[#9cb400] text-white font-bold px-6 py-3 rounded-xl"
        >
          GitHub
        </a>
        <a
          href={integrante.linkedin}
          target="_blank"
          rel="noreferrer"
          className="bg-secondary hover:bg-[#9cb400] text-white font-bold px-6 py-3 rounded-xl"
        >
          LinkedIn
        </a>
      </div>
      <button
        onClick={() => navigate('/integrantes')}
        className="text-brown hover:text-primary font-semibold underline"
      >
        Voltar para a equipe
      </button>
    </main>
  )
}