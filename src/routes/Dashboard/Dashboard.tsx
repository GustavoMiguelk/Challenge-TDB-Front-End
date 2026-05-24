import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

interface Beneficiario {
  nome: string
  cpf: string
  idade: number
  sexo: string
  responsavel: Responsavel
  programa: Programa
}

interface Consulta {
  codigo: string
  beneficiario: string
  tipo: string
  descricao: string
  local: string
}

interface Evento {
  titulo: string
  data: string
  local: string
}

interface Responsavel {
  nome: string
  cpf: string
  contato: string
}

interface Programa {
  idPrograma: number
  nome: string
  descricao: string
}

type Aba = 'beneficiarios' | 'consultas' | 'eventos'

function FormBeneficiario({ onSalvar }: { onSalvar: (b: Beneficiario) => void }) {
  const { register, handleSubmit, formState: { errors } } = useForm<{
    nome: string
    cpf: string
    idade: number
    sexo: string
    nomeResp: string
    cpfResp: string
    contato: string
    idPrograma: number
  }>()

  async function enviar(data: {
    nome: string
    cpf: string
    idade: number
    sexo: string
    nomeResp: string
    cpfResp: string
    contato: string
    idPrograma: number
  }) {
    const programas = [
      { idPrograma: 1, nome: 'Dentista do Bem', descricao: 'Atendimento para jovens carentes menores de idade' },
      { idPrograma: 2, nome: 'Apolônias do Bem', descricao: 'Atendimento para mulheres vitimas de violência' },
    ]

    const programaSelecionado = programas.find(p => p.idPrograma === Number(data.idPrograma))

    const responsavel = {
      nome: data.nomeResp,
      cpf: data.cpfResp,
      contato: data.contato,
    }

    const beneficiario: Beneficiario = {
      nome: data.nome,
      cpf: data.cpf,
      idade: Number(data.idade),
      sexo: data.sexo,
      responsavel,
      programa: programaSelecionado ?? programas[0],
    }

    try {
      await fetch('https://sprint-04-ddd.onrender.com/responsavel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(responsavel)
      })

      const res = await fetch('https://sprint-04-ddd.onrender.com/beneficiario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(beneficiario)
      })
      if (!res.ok) throw new Error('Erro')
      onSalvar(beneficiario)
    } catch (err) {
      console.error('Erro detalhado:', err)
      alert('Erro ao cadastrar beneficiário!')
    }
  }

  return (
    <form onSubmit={handleSubmit(enviar)} className="bg-white rounded-2xl shadow-sm p-6 mb-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold" style={{ color: '#35441c' }}>Novo Beneficiário</h2>

      <input type="text" placeholder="Nome completo" className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
        {...register('nome', { required: 'Nome é obrigatório' })} />
      {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}

      <input type="text" placeholder="CPF do beneficiário" className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
        {...register('cpf', { required: 'CPF é obrigatório' })} />
      {errors.cpf && <p className="text-red-500 text-sm">{errors.cpf.message}</p>}

      <div className="flex gap-4">
        <input type="number" placeholder="Idade" className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
          {...register('idade', { required: 'Idade é obrigatória' })} />
        <select className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
          {...register('sexo', { required: 'Sexo é obrigatório' })}>
          <option value="">Sexo</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </div>

      <select className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
        {...register('idPrograma', { required: 'Programa é obrigatório' })}>
        <option value="">Selecione o programa</option>
        <option value={1}>Dentista do Bem</option>
        <option value={2}>Apolônias do Bem</option>
      </select>

      <p className="font-semibold text-gray-600 mt-2">Dados do Responsável</p>

      <input type="text" placeholder="Nome do responsável" className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
        {...register('nomeResp', { required: 'Nome do responsável é obrigatório' })} />
      {errors.nomeResp && <p className="text-red-500 text-sm">{errors.nomeResp.message}</p>}

      <div className="flex gap-4">
        <input type="text" placeholder="CPF do responsável" className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
          {...register('cpfResp', { required: 'CPF do responsável é obrigatório' })} />
        <input type="text" placeholder="Contato" className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
          {...register('contato', { required: 'Contato é obrigatório' })} />
      </div>

      <button type="submit" className="bg-secondary hover:bg-[#9cb400] text-white font-bold py-3 rounded-xl">
        Salvar
      </button>
    </form>
  )
}

export default function Dashboard() {
  const navigate = useNavigate()
  const [abaAtiva, setAbaAtiva] = useState<Aba>('beneficiarios')
  const [beneficiarios, setBeneficiarios] = useState<Beneficiario[]>([])
  const [consultas, setConsultas] = useState<Consulta[]>([])
  const [eventos] = useState<Evento[]>([])
  const [formAberto, setFormAberto] = useState(false)

  useEffect(() => {
    const API_URL = 'https://sprint-04-ddd.onrender.com'

    fetch(`${API_URL}/beneficiario`)
      .then(res => res.json())
      .then(data => setBeneficiarios(data))
      .catch(() => setBeneficiarios([]))

    fetch(`${API_URL}/consulta`)
      .then(res => res.json())
      .then(data => setConsultas(data))
      .catch(() => setConsultas([]))
  }, [])

  return (
    <main className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold" style={{ color: '#35441c' }}>
          Painel do Profissional
        </h1>
        <button
          onClick={() => navigate('/login')}
          className="text-sm text-gray-500 hover:text-primary underline"
        >
          Sair
        </button>
      </div>

      <div className="flex gap-2 mb-8 border-b border-gray-200">
        {(['beneficiarios', 'consultas', 'eventos'] as Aba[]).map((aba) => (
          <button
            key={aba}
            onClick={() => setAbaAtiva(aba)}
            className={`px-5 py-2 font-semibold rounded-t-xl transition-colors capitalize ${
              abaAtiva === aba
                ? 'bg-secondary text-white'
                : 'text-gray-500 hover:text-secondary'
            }`}
          >
            {aba === 'beneficiarios' ? 'Beneficiários' : aba === 'consultas' ? 'Consultas' : 'Eventos'}
          </button>
        ))}
      </div>

      {abaAtiva === 'beneficiarios' && (
    <div>
    <button
      onClick={() => setFormAberto(!formAberto)}
      className="mb-6 bg-secondary hover:bg-[#9cb400] text-white font-bold px-6 py-2 rounded-xl"
    >
      {formAberto ? 'Cancelar' : '+ Novo Beneficiário'}
    </button>

    {formAberto && (
      <FormBeneficiario
        onSalvar={(novo) => {
          setBeneficiarios([...beneficiarios, novo])
          setFormAberto(false)
        }}
      />
    )}

    <div className="space-y-4">
      {beneficiarios.map((b) => (
        <div key={b.cpf} className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-lg font-bold text-gray-800">{b.nome}</h3>
            <p className="text-sm text-gray-500">CPF: {b.cpf} | Idade: {b.idade} | Sexo: {b.sexo}</p>
          </div>
          <div className="flex gap-2 items-center">
            <span className="bg-secondary/20 text-secondary font-semibold text-sm px-4 py-1 rounded-full">
              {b.programa.nome}
            </span>
            <button
            onClick={async () => {
              try {
                await fetch(`https://sprint-04-ddd.onrender.com/beneficiario/${b.cpf}`, {
                  method: 'DELETE'
                })
                setBeneficiarios(beneficiarios.filter(ben => ben.cpf !== b.cpf))
              } catch {
                alert('Erro ao excluir beneficiário!')
              }
            }}
            className="text-red-400 hover:text-red-600 text-sm font-semibold"
          >
            Excluir
          </button>
          </div>
        </div>
      ))}
    </div>
        </div>
        )}

      {abaAtiva === 'consultas' && (
        <div className="space-y-4">
          {consultas.map((c) => (
            <div key={c.codigo} className="bg-white rounded-2xl shadow-sm p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-bold text-gray-800">{c.beneficiario}</h3>
                <span className="bg-primary/20 text-primary font-semibold text-sm px-4 py-1 rounded-full">
                  {c.tipo}
                </span>
              </div>
              <p className="text-sm text-gray-500">Descrição: {c.descricao}</p>
              <p className="text-sm text-gray-500">Local: {c.local}</p>
              <p className="text-xs text-gray-400 mt-1">Código: {c.codigo}</p>
            </div>
          ))}
        </div>
      )}

      {abaAtiva === 'eventos' && (
        <div className="space-y-4">
          {eventos.map((e) => (
            <div key={e.titulo} className="bg-white rounded-2xl shadow-sm p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <h3 className="text-lg font-bold text-gray-800">{e.titulo}</h3>
                <p className="text-sm text-gray-500">Local: {e.local}</p>
              </div>
              <span className="bg-beige text-brown font-semibold text-sm px-4 py-1 rounded-full border border-brown/20">
                {e.data}
              </span>
            </div>
          ))}
        </div>
      )}
    </main>
  )
}