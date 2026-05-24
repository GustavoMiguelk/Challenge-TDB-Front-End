import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

interface LoginFormData {
  cro: string
  senha: string
}

export default function Login() {
  const navigate = useNavigate()
  const [erro, setErro] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>()

  async function onSubmit(data: LoginFormData) {
    try {
      const res = await fetch('https://sprint-04-ddd.onrender.com/profissional/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        const profissional = await res.json()
        localStorage.setItem('profissional', JSON.stringify(profissional))
        navigate('/dashboard')
      } else {
        setErro('CRO ou senha inválidos.')
      }
    } catch {
      setErro('Erro ao conectar com o servidor.')
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-beige px-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-2" style={{ color: '#35441c' }}>
          Login
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Acesse o painel com seu CRO e senha
        </p>

        {erro && (
          <p className="text-red-500 text-sm text-center mb-4">{erro}</p>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
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
            Entrar
          </button>

          <button
            type="button"
            onClick={() => navigate('/cadastro')}
            className="text-secondary hover:underline text-sm text-center"
          >
            Não tem conta? Cadastre-se
          </button>
        </form>
      </div>
    </main>
  )
}