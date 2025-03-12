import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Projetos } from "./pages/Projetos";
import { Resumo } from "./pages/Resumo";
import { Contato } from "./pages/Contato";


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/projetos" element = {<Projetos />}/>
      <Route path="/resumo" element = {<Resumo />}/>
      <Route path="/contato" element = {<Contato />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
