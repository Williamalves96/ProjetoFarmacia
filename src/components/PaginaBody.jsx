import "./PaginaBody.css";
import Senha from "./Senha";

function PaginaBody() {
  return (
    <div className="container-paginaBody">



      <div className="paginaBody-esquerda">
        <Senha />
      </div>

      <div className="paginaBody-centro">
        <h2>Bem-vindo à Nova Farmácia da Vizinhança!</h2>
        <h4>
          Queremos que todos saibam: mudamos para melhor! Com nova identidade
          visual e mais serviços para a sua saúde, continuamos no mesmo
          endereço, prontos para atender você com carinho, respeito e qualidade.
        </h4>
      </div>

      <div className="paginaBody-direita">
        <h3>Informações</h3>
        <p>
          Convidamos você e toda a vizinhança para a nossa inauguração oficial!
        </p>
        <ul>
          <li>
            📍 <strong>Local:</strong> Senai Floripa
          </li>
          <li>
            📅 <strong>Data:</strong> 30/06/2025
          </li>
          <li>
            🕒 <strong>Horário:</strong> FALTA 10
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PaginaBody;
