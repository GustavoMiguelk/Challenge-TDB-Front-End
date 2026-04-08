import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ConteudoPrincipal from './components/ConteudoPrincipal/ConteudoPrincipal'
import Home from './routes/Home/Home'
import Sobre from './routes/Sobre/Sobre'
import FAQ from './routes/FAQ/FAQ'
import Contato from './routes/Contatos/Contato'
import Integrantes from './routes/Integrantes/Integrantes'
import Solucao from './routes/Solucao/Solucao'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ConteudoPrincipal />}>
          <Route index element={<Home />} />
          <Route path="sobre" element={<Sobre />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contato" element={<Contato />} />
          <Route path="integrantes" element={<Integrantes />} />
          <Route path="solucao" element={<Solucao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App