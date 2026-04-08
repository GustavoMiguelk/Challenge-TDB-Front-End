export default function Rodape() {
  return (
    <footer className="bg-secondary text-white text-center py-6 flex flex-col items-center gap-3">
    <img src="/img-12-logo-turma-do-bem-2.png" alt="Logo TDB" />
      <nav>
        <ul className="flex justify-center gap-4 list-none">
          <li>
            <a href="https://www.instagram.com/ongturmadobem" target="_blank">
              <img src="/img-05-instagram-white-icon.png" alt="Instagram" className="w-8 hover:opacity-80" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/turmadobem" target="_blank">
              <img src="/img-06-facebook-white-icon.png" alt="Facebook" className="w-8 hover:opacity-80" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/turma-do-bem/?originalSubdomain=br" target="_blank">
              <img src="/img-13-linkedin-logo.png" alt="LinkedIn" className="w-8 hover:opacity-80" />
            </a>
          </li>
        </ul>
      </nav>
      <p>&copy; Todos os direitos reservados - 2025. Solução do Bem</p>
    </footer>
  )
}