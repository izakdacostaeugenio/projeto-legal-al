import NavBar from "./navBar";
import Card from "./card";
import Carrosel from "./carrosel";
import PoliticaDePrivacidade from "./politicaDePrivacidade";
import Heroi from "./heroi";
import Contador from "./contador";
import Tema from "./tema";

function Senai() {
  return (
    <Tema>
      <NavBar />
      <Contador />
      <Heroi />
      <Carrosel />
      <Card />
      <PoliticaDePrivacidade />
    </Tema>
  );
}

export default Senai;
