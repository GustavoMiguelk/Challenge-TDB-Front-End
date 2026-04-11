import { Link } from 'react-router-dom'

export default function Cabecalho() {
  return (
    <header>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-12 py-3 bg-white shadow-md z-50">
        <img src="/img-01-logo-turma-do-bem.png" alt="Logo Turma do Bem" className="w-24" />
        <ul className="flex items-center gap-10 list-none">
          <li><Link to="/" className="font-bold text-brown hover:text-primary hover:underline no-underline">Home</Link></li>
          <li><Link to="/sobre" className="font-bold text-brown hover:text-primary hover:underline no-underline">Sobre o Projeto</Link></li>
          <li><Link to="/faq" className="font-bold text-brown hover:text-primary hover:underline no-underline">FAQ</Link></li>
          <li><Link to="/contato" className="font-bold text-brown hover:text-primary hover:underline no-underline">Contato</Link></li>
          <li><Link to="/integrantes" className="font-bold text-brown hover:text-primary hover:underline no-underline">Quem somos?</Link></li>
          <li><Link to="/solucao" className="font-bold text-brown hover:text-primary hover:underline no-underline">Solução</Link></li>
          
          <li>
            <a 
              href="https://paybox.doare.org/paybox?payboxId=83fed202-df0f-4665-9c74-688a834028d4" 
              target="_blank"
              className="bg-secondary hover:bg-[#9cb400] text-white font-bold py-3 px-5 rounded-3xl no-underline"
            >
              🤍 Apoie a TDB!
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}