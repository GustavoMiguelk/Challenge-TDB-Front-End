import { Outlet } from 'react-router-dom'
import Cabecalho from '../Cabecalho/Cabecalho'
import Rodape from '../Rodape/Rodape'

export default function ConteudoPrincipal() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cabecalho />
        <main className="flex-1 pt-20">
            <Outlet />
        </main>
         <Rodape />
    </div>
  )
}