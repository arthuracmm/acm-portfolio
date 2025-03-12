import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Resumo } from "./pages/Resumo";
import { Projetos } from "./pages/Projetos";
import { Formacao } from "./pages/Formacao";
import { Contato } from "./pages/Contato";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/resumo" element = {<Resumo />}/>
      <Route path="/projetos" element = {<Projetos />}/>
      <Route path="/formacao" element = {<Formacao />}/>
      <Route path="/contato" element = {<Contato />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
