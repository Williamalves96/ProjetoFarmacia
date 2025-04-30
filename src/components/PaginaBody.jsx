import "./PaginaBody.css";

function PaginaBody() {
  // function Preferencial() {

  // }
  // function Comum() {

  // }

  // function Retirada() {

  return (
    <div className="container-paginabody">
      <div className="container-bodyesquerda">
        <h2>RETIRE SUA SENHA</h2>
        <h3>Selecione o tipo de atendimento:</h3>

        <button>PREFERENCIAL</button>
        <button>COMUM</button>
        <button>RETIRADA</button>
      </div>

      <div className="container-bodydireita">
        <img className="container-img-body-dir" src="farmarcia.webp" alt=" " />
        <br />
        <h2>
          {" "}
          🎉 Estamos de cara nova e queremos comemorar com você! <br /> Venha
          conhecer a nova farmácia da vizinhança! <br />
          📍 Endereço: [Rua das Bromélias, 285 – Bairro Santa Mônica] <br />
          📅 Inauguração: [06/01/2030] 🍵 Brindes,
          <br />
          descontos especiais e um café com a gente! <br />
          Não perca essa oportunidade de conhecer nosso espaço e aproveitar{" "}
        </h2>
      </div>
    </div>
  );
}

export default PaginaBody;
