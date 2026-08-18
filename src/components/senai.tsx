import "./senai.module.css";
import senaiImage from "../assets/imagens/senai-1-2.jpg-removebg-preview.png";
import sistemaImage from "../assets/imagens/fiep-removebg-preview.png";
import pt from "../assets/imagens/pt.jpg";
import chat from "../assets/imagens/ChatGPT Image 17 de jun. de 2026, 09_51_26.png";

function senai() {
  return (
    <div className="container-fluid">
      {" "}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <header className="cor">
          <div className="container text-center">
            <div className="row">
              <div className="col-md-2 d-grid">
                {" "}
                <a
                  className="navbar-brand btn btn-outline-primary"
                  role="button"
                  href="https://novo.senaipr.org.br/pt/"
                >
                  sistema fiep
                </a>
              </div>
              <div className="col-md-2 d-grid">
                {" "}
                <a
                  className="navbar-brand btn btn-outline-primary"
                  role="button"
                  href="https://novo.fiepr.org.br/pt/"
                >
                  fiep
                </a>
              </div>
              <div className="col-md-2 d-grid">
                <a
                  className="navbar-brand btn btn-outline-primary"
                  role="button"
                  href="https://novo.sesipr.org.br/pt/"
                >
                  sesi
                </a>
              </div>
              <div className="col-md-2 d-grid">
                <a
                  className="navbar-brand btn btn-outline-primary"
                  role="button"
                  href="https://novo.senaipr.org.br/pt/"
                >
                  senai
                </a>
              </div>
              <div className="col-md-2 d-grid">
                <a
                  className="navbar-brand btn btn-outline-primary"
                  role="button"
                  href="https://novo.ielpr.org.br/pt/"
                >
                  iel
                </a>
              </div>
              <div className="col-md-2 d-grid">
                <a
                  className="btn btn-warning"
                  href="https://novo.senaipr.org.br/pt/atendimento"
                  role="button"
                >
                  atendimento
                </a>
              </div>
            </div>
          </div>
          <title>SENAI</title>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                cursos para você
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    cursos abertos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    cursos profissionalizantes
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    quiz
                  </a>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                soluções para sua empresa
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    portifólio
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    acões moveis
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    contratação de aprendizes
                  </a>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                sobre nós
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    nossas unidades
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    contato
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    trabalhe conosco
                  </a>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                programas e eventos
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    wordskills
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    mundo senai
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    programas e ações inclusivas
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    saga senai de inovação
                  </a>
                </li>
              </ul>
            </div>
            <div className="container-fluid">
              <a
                className="navbar-brand btn btn-outline-primary"
                role="button"
                href="https://novo.senaipr.org.br/pt/ciclo-de-transforma%C3%A7%C3%A3o"
              >
                ciclo de transformação
              </a>
            </div>
          </nav>
          <div className="card-group">
            <div className="card" style={{ width: "18rem" }}>
              <img src={senaiImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">O SENAI</h5>
                <p className="card-text">
                  O SENAI é uma instituição de ensino profissionalizante que
                  oferece cursos técnicos e de qualificação em diversas áreas,
                  com o objetivo de preparar os alunos para o mercado de
                  trabalho. Além disso, o SENAI também realiza pesquisas e
                  desenvolve soluções tecnológicas para empresas, contribuindo
                  para o desenvolvimento da indústria brasileira.
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Last updated 3 mins ago
                  </small>
                </p>
              </div>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <img src={senaiImage} className="card-img-top" alt="..." />
            <div className="card-header">
              <h3 className="card-title">O SENAI</h3>
            </div>
            <div className="card-body">
              <p className="card-text">
                O SENAI é uma instituição de ensino profissionalizante que
                oferece cursos técnicos e de qualificação em diversas áreas, com
                o objetivo de preparar os alunos para o mercado de trabalho.
                Além disso, o SENAI também realiza pesquisas e desenvolve
                soluções tecnológicas para empresas, contribuindo para o
                desenvolvimento da indústria brasileira.
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
        </header>
      </nav>
      <main className="senai-main">
        <div
          id="carouselExample"
          className="carousel slide w-50"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active text-center">
              <img src={sistemaImage} className="img-fluid"  alt="img senai" />
            </div>
            <div className="carousel-item text-center">
              <img src={pt} className="img-fluid"  alt="img PT" />
            </div>
            <div className="carousel-item text-center">
              <img src={chat} className="img-fluid  "  alt="img chat" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
    </div>
  );
}

export default senai;
