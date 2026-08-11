import "./senai.module.css";

function senai() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a
            className="navbar-brand btn btn-outline-primary"
            role="button"
            href="https://novo.senaipr.org.br/pt/"
          >
            sistema fiep
          </a>
          <a
            className="navbar-brand btn btn-outline-primary"
            role="button"
            href="https://novo.fiepr.org.br/pt/"
          >
            fiep
          </a>
          <a
            className="navbar-brand btn btn-outline-primary"
            role="button"
            href="https://novo.sesipr.org.br/pt/"
          >
            sesi
          </a>
          <a
            className="navbar-brand btn btn-outline-primary"
            role="button"
            href="https://novo.senaipr.org.br/pt/"
          >
            senai
          </a>
          <a
            className="navbar-brand btn btn-outline-primary"
            role="button"
            href="https://novo.ielpr.org.br/pt/"
          >
            iel
          </a>
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
            <h1>O SENAI</h1>
            <p>
              O SENAI é uma instituição de ensino profissionalizante que oferece
              cursos técnicos e de qualificação em diversas áreas, com o
              objetivo de preparar os alunos para o mercado de trabalho. Além
              disso, o SENAI também realiza pesquisas e desenvolve soluções
              tecnológicas para empresas, contribuindo para o desenvolvimento da
              indústria brasileira.
            </p>
            <section>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                nossa história
              </button>
              <label htmlFor="nome">nome completo</label>
              <input type="text" id="nome" />
              <label htmlFor="cnpj">CNPJ</label>
              <input
                id="cnpj"
                type="number"
                pattern="[0-9]{2}.[0-9]{3}.[0-9]{3}/[0-9]{4}-[0-9]{2}"
                minLength={18}
                maxLength={18}
                title="formato 00.000.000/0000-00"
              />
              <form action="/pagina/sobre3.html" />
              <button>surpresa</button>
            </section>
          </header>
        </div>
      </nav>
    </>
  );
}

export default senai;