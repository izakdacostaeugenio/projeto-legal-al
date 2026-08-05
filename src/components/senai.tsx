import "../components/senai.module.css"
import sistemaFiep from "framework/src/assets/imagens/sistemafiep.png"
import fiep from "framework/src/assets/imagens/fiep.jpg"
import marcasesi from "framework/src/assets/imagens/marca-sesi-reduzida_cor.webp"
import Senai from "framework/src/assets/imagens/senai-1-2.jpg.webp"
import iel from "framework/src/assets/imagens/iel-blue.png"


function senai() {
  const texto = "ola mundo";

  return (
    
  <>
<header>
  <p>{texto}</p>
    <title>senai
    </title>
    <table>
        <thead>
            <th><a href="https://novo.sistemafiep.org.br/pt/"/><img src={sistemaFiep} alt="SISTEMA FIEP"
                        width="200px" height="100px"/></th>
            <th><a href="https://novo.fiepr.org.br/pt/"/><img src={fiep} alt="FIEP" width="200px"
                        height="100px"/></th>
            <th><a href="https://novo.sesipr.org.br/pt/"/><img src={marcasesi} alt="SESI"
                        width="200px" height="100px"/></th>
            <th><a href="https://novo.senaipr.org.br/pt/"/><img src={Senai} alt="SENAI"
                        width="200px" height="100px"/></th>
            <th><a href="https://novo.ielpr.org.br/pt/"/><img src={iel} alt="IEL" width="200px"
                        height="100px"/></th>
        </thead>
    </table>
</header>
  </>
    
  );
}

export default senai;
