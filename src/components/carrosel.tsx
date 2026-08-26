import sistemaImage from "../assets/imagens/sistemafiep.png"
import pt from "../assets/imagens/pt.jpg"
import chat from "../assets/imagens/ChatGPT Image 17 de jun. de 2026, 09_51_26.png"
function Carrosel() {
    return (
<main className="senai-main">
          <div
            id="carouselExample"
            className="carousel slide w-75 mx-auto"
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
    );
}
export default Carrosel;