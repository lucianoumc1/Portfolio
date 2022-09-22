import skills from "./skillsList";
import "./Skills.scss";

export default function Skills() {
  return (
    <section className="Skills">
      <h2 className="skills__tittle">Lenguajes &amp; Tecnolog&iacute;as</h2>
      <div className="skills__container">
        {skills.map((el) => {
          const randomNumberForAnimation = Math.ceil(Math.random() * 10);
          const animation =
            randomNumberForAnimation > 5 ? "animation-left" : "animation-rigth";
          const regExp = /[a-z]*.png/gi;
          const name = el.match(regExp)[0].replace(".png", "");
          return (
            <img
              className={animation}
              src={el}
              title={name}
              alt={`${name} logo`}
              key={name}
            />
          );
        })}
      </div>
    </section>
  );
}
