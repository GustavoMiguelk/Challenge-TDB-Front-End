import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-12 py-3 bg-white shadow-md z-50">
        <img src="/img-01-logo-turma-do-bem.png" alt="Logo Turma do Bem" className="w-20 md:w-24" />

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-4 list-none">
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
              className="bg-secondary hover:bg-[#9cb400] text-white font-bold py-2 px-3 rounded-3xl no-underline text-sm whitespace-nowrap"
            >
              🤍 Apoie a TDB!
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <span className={`block w-6 h-0.5 bg-brown transition-transform duration-300 ${menuAberto ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brown transition-opacity duration-300 ${menuAberto ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-brown transition-transform duration-300 ${menuAberto ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {menuAberto && (
        <div className="md:hidden fixed top-14 left-0 w-full bg-white shadow-md z-40 px-6 py-4">
          <ul className="flex flex-col gap-4 list-none">
            <li><Link to="/" onClick={() => setMenuAberto(false)} className="font-bold text-brown hover:text-primary">Home</Link></li>
            <li><Link to="/sobre" onClick={() => setMenuAberto(false)} className="font-bold text-brown hover:text-primary">Sobre o Projeto</Link></li>
            <li><Link to="/faq" onClick={() => setMenuAberto(false)} className="font-bold text-brown hover:text-primary">FAQ</Link></li>
            <li><Link to="/contato" onClick={() => setMenuAberto(false)} className="font-bold text-brown hover:text-primary">Contato</Link></li>
            <li><Link to="/integrantes" onClick={() => setMenuAberto(false)} className="font-bold text-brown hover:text-primary">Quem somos?</Link></li>
            <li><Link to="/solucao" onClick={() => setMenuAberto(false)} className="font-bold text-brown hover:text-primary">Solução</Link></li>
            <li>
              <a
                href="https://paybox.doare.org/paybox?payboxId=83fed202-df0f-4665-9c74-688a834028d4"
                target="_blank"
                className="bg-secondary hover:bg-[#9cb400] text-white font-bold py-2 px-4 rounded-3xl no-underline"
              >
                🤍 Apoie a TDB!
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}