import NavBar from "./navBar";
import Card from "./card";
import Carrosel from "./carrosel";
import PoliticaDePrivacidade from "./politicaDePrivacidade";
import Heroi from "./heroi";
import Contador from "./contador"; 
import Cortina from "./cortina";

function Senai() {
  return (
    <>
      <NavBar />
      <Contador/>
      <Heroi/>
      <Carrosel />
      <Card />
      <Cortina/>
      
      <PoliticaDePrivacidade />
    </>
  );
}

export default Senai;
