import "./App.css";
import Cabecalho from "./components/Cabecalho";
import PaginaBody from "./components/PaginaBody";
import Senha from "./components/Senha";

function App() {
  return (
    <div className="container-app">
      <Cabecalho/>
      <PaginaBody/>
      <Senha/>
    </div> 
  );
}

export default App;
