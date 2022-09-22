import Buttton from "../Button";
import cv from "../../assets/Fullstack_Developer_Luciano_Madronal_ES_CV.pdf";
import "./Cover.scss";

export default function Cover() {
  const contactHandleClickContact = () => {
    document.location.href = "#contact-section";
  };
  return (
    <div className="cover__section" id="home">
      <div className="cover__content">
        <div className="cover__tittle-principal">
          <span>👋</span>
          <h1> Hola, soy Luciano</h1>
        </div>
        <h2>
          Soy un desarrollador Full-Stack y aficionado de la tecnolog&iacute;a
          🖥️
        </h2>
        <div className="cover-content__buttons">
          <Buttton name="Contacto" handleClick={contactHandleClickContact} />
          <a href={cv} download>
            <Buttton name="CV" />
          </a>
        </div>
      </div>
    </div>
  );
}
