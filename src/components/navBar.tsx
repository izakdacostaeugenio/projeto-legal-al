import semTitulo from "../assets/imagens/Sem título.png";
function NavBar() {
  return (
    <>
      <div className="container-fluid">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">SISTEMA FIEP</a>
          </div>
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
            </header>
          </nav>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="input w-24 md:w-auto"
            />
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
               <img
            alt="avatr não grita"
            className="rounded-full"
            style={{ borderRadius: "50%", width: "100px", height: "100px" }}
            src={semTitulo}
          />
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </>
  );
}
export default NavBar;
