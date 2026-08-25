import heroi from "../assets/imagens/hero.jpg";
function Heroi() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            alt="Tailwind CSS hero component"
            src={heroi}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              SENAI + Cyberleek: O Grau da Indústria 4.0
            </h1>
            <p className="py-6">
              A precisão do técnico aliada à chave do futuro. Domine a robótica,
              alinhe motores a hidrogênio e domine a mecânica quântica com a
              postura de quem manda no pátio. Manda o treino na tecnologia.
              Respeita o EPI. Conecte-se à revolução.
            </p>
            <div className="col-md-2 d-grid">
                    {" "}
                    <a
                      className="navbar-brand btn btn-outline-primary"
                      role="button"
                      href="https://cyber-leek.com/"
                    >
                      COMEÇAR
                    </a>
                  </div>
             
            
          </div>
        </div>
      </div>
    </>
  );
}
export default Heroi;
