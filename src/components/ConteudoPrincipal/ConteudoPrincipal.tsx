import { Outlet } from 'react-router-dom'
import Cabecalho from '../Cabecalho/Cabecalho'
import Rodape from '../Rodape/Rodape'

export default function ConteudoPrincipal() {
  return (
    <>
      <Cabecalho />
      <main>
        <Outlet />
      </main>
      <Rodape />
    </>
  )
}