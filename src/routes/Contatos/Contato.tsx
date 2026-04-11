import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  nome: string
  email: string
  telefone: string
  assunto: string
  mensagem: string
}

export default function Contato() {
  const [statusMsg, setStatusMsg] = useState('')
  const [statusCor, setStatusCor] = useState('')

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>()

  useEffect(() => {
    if (statusMsg) {
      console.log('Status atualizado:', statusMsg)
    }
  }, [statusMsg])

  function onSubmit(data: FormData) {
    setStatusCor('text-blue-500')
    setStatusMsg('Enviando... aguarde...')

    setTimeout(() => {
      localStorage.setItem('nomeUsuario', data.nome)
      setStatusCor('text-green-500')
      setStatusMsg(`A Turma do Bem agradece, ${data.nome}! Sua mensagem foi enviada com sucesso!`)
      reset()
    }, 1000)
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6" style={{ color: '#35441c' }}>
          Dúvidas, reclamações ou sugestões
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Seu nome"
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
            {...register('nome', { required: 'Nome é obrigatório' })}
          />
          {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Seu e-mail"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
                {...register('email', {
                  required: 'E-mail é obrigatório',
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'E-mail inválido' }
                })}
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <input
              type="text"
              placeholder="Seu telefone"
              className="flex-1 border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
              {...register('telefone')}
            />
          </div>

          <input
            type="text"
            placeholder="Assunto"
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary"
            {...register('assunto', { required: 'Assunto é obrigatório' })}
          />
          {errors.assunto && <p className="text-red-500 text-sm">{errors.assunto.message}</p>}

          <textarea
            placeholder="Sua mensagem"
            rows={5}
            className="border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-secondary resize-none"
            {...register('mensagem', { required: 'Mensagem é obrigatória' })}
          />
          {errors.mensagem && <p className="text-red-500 text-sm">{errors.mensagem.message}</p>}

          <button
            type="submit"
            className="bg-secondary hover:bg-[#9cb400] text-white font-bold py-3 px-6 rounded-xl"
          >
            Enviar
          </button>

          {statusMsg && <p className={`font-bold ${statusCor}`}>{statusMsg}</p>}

        </form>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4" style={{ color: '#35441c' }}>
          E-mails para contato
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=comunicacao@tdb.org.br"
            target="_blank"
            className="text-primary hover:underline font-semibold"
          >
            comunicacao@tdb.org.br
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=faleconosco@tdb.org.br"
            target="_blank"
            className="text-primary hover:underline font-semibold"
          >
            faleconosco@tdb.org.br
          </a>
        </div>
      </section>
    </main>
  )
}
 