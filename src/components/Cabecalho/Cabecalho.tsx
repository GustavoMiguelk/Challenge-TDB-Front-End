import { Link } from 'react-router-dom'

export default function Cabecalho() {
  return (
    <header>
      <nav>
        <img src="/img-01-logo-turma-do-bem.png" alt="Logo Turma do Bem" />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sobre">Sobre o Projeto</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/integrantes">Quem somos?</Link></li>
          <li>
            <a href="https://paybox.doare.org/paybox?payboxId=83fed202-df0f-4665-9c74-688a834028d4" target="_blank">
              🤍 Apoie a TDB!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}