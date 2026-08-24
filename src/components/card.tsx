import senaiImage from "../assets/imagens/senai-1-2.jpg-removebg-preview.png";
function Card() {
  return (
    <>
      <div className="card-group">
        <div className="card" style={{ width: "18rem" }}>
          <img src={senaiImage} className="card-img-top" alt="img senai" />
          <div className="card-body">
            <h5 className="card-title">O SENAI</h5>
            <p className="card-text">
              O SENAI é uma instituição de ensino profissionalizante que oferece
              cursos técnicos e de qualificação em diversas áreas, com o
              objetivo de preparar os alunos para o mercado de trabalho. Além
              disso, o SENAI também realiza pesquisas e desenvolve soluções
              tecnológicas para empresas, contribuindo para o desenvolvimento da
              indústria brasileira.
            </p>
          </div>
        </div>
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={senaiImage} className="card-img-top" alt="img senai" />
        <div className="card-header">
          <h3 className="card-title">O SENAI</h3>
        </div>
        <div className="card-body">
          <p className="card-text">
            O SENAI é uma instituição de ensino profissionalizante que oferece
            cursos técnicos e de qualificação em diversas áreas, com o objetivo
            de preparar os alunos para o mercado de trabalho. Além disso, o
            SENAI também realiza pesquisas e desenvolve soluções tecnológicas
            para empresas, contribuindo para o desenvolvimento da indústria
            brasileira.
          </p>
        </div>
        <div className="d-grid card-footer">
          <a
            href="https://novo.senaipr.org.br/pt/o-senai"
            className="btn btn-primary"
          >
            nossa história
          </a>
        </div>
      </div>
    </>
  );
}
export default Card;
