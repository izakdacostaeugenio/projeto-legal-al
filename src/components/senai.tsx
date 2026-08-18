import "./senai.module.css";
import senaiImage from "../assets/imagens/senai-1-2.jpg-removebg-preview.png";
import sistemaImage from "../assets/imagens/fiep-removebg-preview.png";
import pt from "../assets/imagens/pt.jpg";
import chat from "../assets/imagens/ChatGPT Image 17 de jun. de 2026, 09_51_26.png";
import { useState } from "react";

function Senai() {
  const [showModal, setShowModal] = useState(false);
  const termos = `<p>1. Objetivo Estabelecer diretrizes e demonstrar o compromisso
                  do Sistema Fiep com a segurança e privacidade de dados
                  coletados dos seus clientes, parceiros de negócio e
                  colaboradores.</p><p> 2. Abrangência A presente política é válida
                  para todo o Sistema Fiep (composto pelas entidades FIEP, SESI
                  – PR, SENAI – PR e IEL – PR), assim como seus sites, portais e
                  outras plataformas digitais que coletam dados.</p><p> 3. Denifinições
                  LGPD: Lei nº 13.709/2018, Lei Geral de Proteção de Dados. A
                  lei tem por objetivo garantir a privacidade e controle dos
                  dados pessoais pelas empresas controladoras. DPO: Data
                  Protection Officer. É o “encarregado de dados” da organização,
                  atuando como referência nos assuntos pertinentes a privacidade
                  e a Lei Geral de Proteção de Dados. Dados Pessoais: Qualquer
                  dado ou informação que identifique uma pessoa. Dados Pessoais
                  Sensíveis: Qualquer dado ou informação que possa discriminar
                  ou criar constrangimento a uma pessoa. Controlador:
                  Organização que coleta os dados pessoais. Operador:
                  Organização que processa ou trata os dados coletados pelo
                  controlador. IP (Internet Protocol): Conjunto de números que
                  tem como objetivo identificar dispositivos de usuários na
                  internet. Cookies: Arquivos com a finalidade de identificar o
                  dispositivo e obter dados de acesso, como páginas navegadas ou
                  links clicados, permitindo desta forma personalizar a
                  navegação dos usuários, de acordo com o seu perfil.</p><p> 4.
                  Diretrizes</p><p>4.1: A Privacidade de Dados é parte do “Programa de
                  Privacidade” do Sistema Fiep, pautado na conformidade com a
                  Lei 13.709/2018 – Lei Geral de Proteção de Dados. Quando você
                  aceita este documento, confere sua livre e expressa
                  concordância com as diretrizes aqui estabelecidas.</p><p> 4.2: Os
                  colaboradores e parceiros de negócio devem respeitar as
                  diretrizes da privacidade de dados, protegendo dados pessoais
                  de todos os titulares de dados que se relacionam com a
                  organização, sejam eles: colaboradores, intermitentes,
                  terceiros, temporários, prestadores de serviços, pacientes,
                  alunos, responsáveis por alunos, pacientes, membros de
                  sindicatos ou qualquer outra pessoa física que apresente os
                  seus dados para o Sistema Fiep.</p><p> 4.3: Toda a coleta,
                  processamento, geração, armazenamento e exclusão de dados
                  pessoais devem ser realizados dentro das especificações
                  presentes na Lei Geral de Proteção de Dados e dos documentos
                  normativos da organização.</p><p> 4.3.1: Atender requisições ou
                colaborar com autoridades de controle/judiciais.</p><p> 4.3.2:
                  Promover serviços do Sistema Fiep e de seus parceiros.</p><p> 4.3.3:
                  Informar de novidades, conteúdos e demais informações
                  relevantes para a manutenção do relacionamento entre titular
                  dos dados e Instituição.</p><p> 4.3.4: Manter atualizados os
                  cadastros de dados de contato como celular, telefone fixo,
                  e-mail redes sociais ou por outros meios de comunicação
                  existentes.</p><p> 4.3.5: Efetuar análises estatísticas, estudos,
                  pesquisas e levantamentos pertinentes às atividades do Sistema
                  Fiep mediante o comportamento dos usuários.</p><p> 4.3.6: Realizar
                  campanhas e informações de marketing.</p><p> 4.4: Eventuais dúvidas
                  ou identificação de irregularidades com o tratamento de dados
                  pessoais devem ser direcionadas ao DPO da organização –
                  através do e-mail dpo@sistemafiep.org.br.</p><p> 4.5: As organizações
                  terceiras (operadores de dados) que tenham atividades que
                  utilizem (tratam e processam) dados pessoais e dados pessoais
                  sensíveis coletados de titulares pelos processos de negócio do
                  Sistema Fiep (controlador de dados) devem manter-se em
                  conformidade formal com a Lei Geral de Proteção de Dados.</p><p> 4.6:
                  A privacidade de dados deve ser extensivamente comunicada,
                  treinada e exercitada por todos os colaboradores do Sistema
                  Fiep.</p><p> 4.7: O Sistema Fiep não irá vender informações pessoais
                  coletadas em seus sites para terceiros sem o expresso
                  consentimento do titular.</p><p> 4.8: O Sistema Fiep poderá alterar
                  os termos da política de privacidade sem qualquer aviso
                  prévio.</p><p> 5. Atribuições e Responsabilidades<p> 5.1 Usuário –
                  Titular dos Dados: Ler Política de Privacidade do Sistema
                  Fiep. Fornecer dados mediante a ciência e consentimento do
                  documento avaliado. Contatar DPO da organização em caso de
                  dúvidas ou identificação de irregularidades com a Política de
                  Privacidade.</p><p> 5.2 DPO – Sistema Fiep: Atender dúvidas ou
                  demandas enviadas pelos titulares dos dados. Atualizar a
                  política de privacidade sempre que necessário. Disseminar as
                  diretrizes do documento para colaboradores e parceiros de
                  negócio do Sistema Fiep.</p><p> 5.3 Colaboradores e Parceiros de
                  Negócios – Sistema Fiep: Realizar tratamento de dados pessoais
                  respeitando as diretrizes estabelecidas por leis e documentos
                  normativos do Sistema Fiep.</p><p> 6. Documentos de Referência Código
                  de Conduta do Sistema Fiep. Programa de Integridade do Sistema
                  Fiep. Lei 13.709/2018 – Lei Geral de Proteção de Dados. Lei
                  12.965/2014 – Marco Civil da Internet.</p>`;
  return (
    <>
      <div className="container-fluid">
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
                <img
                  src={senaiImage}
                  className="card-img-top"
                  alt="img senai"
                />
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
                  O SENAI é uma instituição de ensino profissionalizante que
                  oferece cursos técnicos e de qualificação em diversas áreas,
                  com o objetivo de preparar os alunos para o mercado de
                  trabalho. Além disso, o SENAI também realiza pesquisas e
                  desenvolve soluções tecnológicas para empresas, contribuindo
                  para o desenvolvimento da indústria brasileira.
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
                <img src={sistemaImage} className="img-fluid" alt="img senai" />
              </div>
              <div className="carousel-item text-center">
                <img src={pt} className="img-fluid" alt="img PT" />
              </div>
              <div className="carousel-item text-center">
                <img src={chat} className="img-fluid  " alt="img chat" />
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
        <div className="button-container text-center mt-3">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={() => setShowModal(true)}
          >
            política de privacidade
          </button>
        </div>
      </div>
      {showModal && (
        <div className="modal show" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Politicas de Privacidade</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <section>{termos.replaceAll("<p>", "").replaceAll("</p>", "")}</section>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Senai;