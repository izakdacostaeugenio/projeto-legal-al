import "./senai.module.css";
import sistemaFiep from "../assets/imagens/sistemafiep.png";
import fiep from "../assets/imagens/fiep-removebg-preview.png";
import marcasesi from "../assets/imagens/marca-sesi-reduzida_cor.webp";
import Senai from "../assets/imagens/senai-1-2.jpg-removebg-preview.png";
import iel from "../assets/imagens/iel-blue.png";
import cursos from "../assets/imagens/cursos.png";
import solucoes from "../assets/imagens/solucoes.png";
import sobreNos from "../assets/imagens/sobreNos.png";
import programas from "../assets/imagens/programas.png";
import ciclo from "../assets/imagens/ciclowow.png";
import capturar from "../assets/imagens/Capturar.png";

function senai() {
  const texto =
    "para mais informações sobre o SENAI, acesse o site oficial clicando na imagem abaixo:";
  return (
    <>
      <header className="cor">
        <div>
          <p>{texto}</p>
        </div>
        <title>senai</title>
        <table>
          <thead>
            <th>
              <a href="https://novo.sistemafiep.org.br/pt/" />
              <img
                src={sistemaFiep}
                alt="SISTEMA FIEP"
                width="200px"
                height="100px"
              />
            </th>
            <th>
              <a href="https://novo.fiepr.org.br/pt/" />
              <img src={fiep} alt="FIEP" width="200px" height="100px" />
            </th>
            <th>
              <a href="https://novo.sesipr.org.br/pt/" />
              <img src={marcasesi} alt="SESI" width="200px" height="100px" />
            </th>
            <th>
              <a href="https://novo.senaipr.org.br/pt/" />
              <img src={Senai} alt="SENAI" width="200px" height="100px" />
            </th>
            <th>
              <a href="https://novo.ielpr.org.br/pt/" />
              <img src={iel} alt="IEL" width="200px" height="100px" />
            </th>
            <div className="linha"></div>
          </thead>
        </table>
        <table>
          <thead>
            <th>
              <a href="#">
                <img src={cursos} alt="cursos para você" />
              </a>
            </th>
            <th></th>
            <th>
              <a href="#">
                <img src={solucoes} alt="soluções para empresas" />
              </a>
            </th>
            <th></th>
            <th>
              <a href="#">
                <img src={sobreNos} alt="sobre nós" />
              </a>
            </th>
            <th></th>
            <th>
              <a href="#">
                <img src={programas} alt="programas e eventos" />
              </a>
            </th>
            <th></th>
            <th>
              <a href="https://novo.senaipr.org.br/pt/ciclo-de-transforma%C3%A7%C3%A3o">
                <img src={ciclo} alt="ciclo de transformação" />
              </a>
            </th>
          </thead>
        </table>
        <h1>O SENAI</h1>
        <p>
          O SENAI é uma instituição de ensino profissionalizante que oferece
          cursos técnicos e de qualificação em diversas áreas, com o objetivo de
          preparar os alunos para o mercado de trabalho. Além disso, o SENAI
          também realiza pesquisas e desenvolve soluções tecnológicas para
          empresas, contribuindo para o desenvolvimento da indústria brasileira.
        </p>
        <section>
          <form action="">
            <a href="sobre2.html">
              <img src={capturar} />
            </a>
            <label htmlFor="nome">nome completo</label>
            <input type="text" id="nome" />
          </form>
          <form action="/pagina/sobre3.html" />
          <button>surpresa</button>
        </section>
      </header>
    </>
  );
}

export default senai;
