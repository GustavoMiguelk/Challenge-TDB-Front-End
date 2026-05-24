import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface CadastroFormData {
  nome: string
  cpf: string
  cro: string
  especializacao: string
  senha: string
}

export default function Cadastro() {
  const navigate = useNavigate()
  const [sucesso, setSucesso] = useState(false)
  const [erro, setErro] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<CadastroFormData>()

  async function onSubmit(data: CadastroFormData) {
    try {
      const res = await fetch('https://sprint-04-ddd.onrender.com/profissional/cadastrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        setSucesso(true)
        setTimeout(() => navigate('/login'), 2000)
      } else {
        setErro('Erro ao cadastrar. Tente novamente.')
      }
    } catch {
      setErro('Erro ao conectar com o servidor.')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-beige px-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2" style={{ color: '#35441c' }}>
          Cadastro de Profissional
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Crie sua conta para acessar o painel
        </p>

        {sucesso && (
          <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-xl mb-6 text-center">
            ✅ Cadastro realizado! Redirecionando para o login...
          </div>
        )}

        {erro && (
          <p className="text-red-500 text-sm text-center mb-4">{erro}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <input
              type="text"
              placeholder="Nome completo"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
              {...register('nome', { required: 'Nome é obrigatório' })}
            />
            {errors.nome && <p className="text-red-500 text-sm mt-1">{errors.nome.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="CPF (ex: 123.456.789-00)"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
              {...register('cpf', { required: 'CPF é obrigatório' })}
            />
            {errors.cpf && <p className="text-red-500 text-sm mt-1">{errors.cpf.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="CRO"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
              {...register('cro', { required: 'CRO é obrigatório' })}
            />
            {errors.cro && <p className="text-red-500 text-sm mt-1">{errors.cro.message}</p>}
          </div>

          <div>
            <input
              type="text"
              placeholder="Especialização"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
              {...register('especializacao', { required: 'Especialização é obrigatória' })}
            />
            {errors.especializacao && <p className="text-red-500 text-sm mt-1">{errors.especializacao.message}</p>}
          </div>

          <div>
            <input
              type="password"
              placeholder="Senha"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
              {...register('senha', { required: 'Senha é obrigatória' })}
            />
            {errors.senha && <p className="text-red-500 text-sm mt-1">{errors.senha.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-secondary hover:bg-[#9cb400] text-white font-bold py-3 px-6 rounded-xl mt-2"
          >
            Cadastrar
          </button>

          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-secondary hover:underline text-sm text-center"
          >
            Já tem conta? Faça login
          </button>
        </form>
      </div>
    </main>
  )
}