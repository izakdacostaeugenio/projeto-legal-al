import semTitulo from "../assets/imagens/Sem título.png";
import { BotaoTema } from "./tema";

const linksInstitucionais = [
  ["sistema fiep", "https://novo.senaipr.org.br/pt/"],
  ["fiep", "https://novo.fiepr.org.br/pt/"],
  ["sesi", "https://novo.sesipr.org.br/pt/"],
  ["senai", "https://novo.senaipr.org.br/pt/"],
  ["iel", "https://novo.ielpr.org.br/pt/"],
] as const;

const gruposDeLinks = [
  { titulo: "cursos para você", itens: ["cursos abertos", "cursos profissionalizantes", "quiz"] },
  { titulo: "soluções para sua empresa", itens: ["portifólio", "ações móveis", "contratação de aprendizes"] },
  { titulo: "sobre nós", itens: ["nossas unidades", "contato", "trabalhe conosco"] },
  { titulo: "programas e eventos", itens: ["wordskills", "mundo senai", "programas e ações inclusivas", "saga senai de inovação"] },
];

function NavBar() {
  return (
    <>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-theme site-navbar shadow-sm">
          <div className="navbar-inner">
            <a className="navbar-brand navbar-brand-area" href="#top">
              SISTEMA FIEP
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#menuPrincipal"
              aria-controls="menuPrincipal"
              aria-expanded="false"
              aria-label="Abrir menu"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse navbar-navigation" id="menuPrincipal">
              <ul className="navbar-nav institutional-links">
                {linksInstitucionais.map(([texto, href]) => (
                  <li className="nav-item" key={texto}>
                    <a className="nav-link" href={href}>
                      {texto}
                    </a>
                  </li>
                ))}
                <li className="nav-item">
                  <a className="nav-link" href="https://novo.senaipr.org.br/pt/atendimento">
                    atendimento
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav menu-links">
                {gruposDeLinks.map((grupo) => (
                  <li className="nav-item dropdown" key={grupo.titulo}>
                    <button
                      className="btn btn-primary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {grupo.titulo}
                    </button>
                    <ul className="dropdown-menu">
                      {grupo.itens.map((item) => (
                        <li key={item}>
                          <a className="dropdown-item" href="#">
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
                <li className="nav-item">
                  <a className="nav-link" href="https://novo.senaipr.org.br/pt/ciclo-de-transformação">
                    ciclo de transformação
                  </a>
                </li>
              </ul>
            </div>

            <div className="navbar-actions">
              <input type="search" placeholder="Pesquisar" aria-label="Pesquisar" />
              <BotaoTema />
              <button type="button" className="avatar" aria-label="Abrir perfil">
                <img src={semTitulo} alt="Avatar do perfil" />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default NavBar;
