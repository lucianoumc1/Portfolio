import goscrumImage from "../../assets/images/goscrum-screen.png";
import weatherappImage from "../../assets/images/weatherapp-screen.png";
import simonsaysImage from "../../assets/images/simonsays-screen.png";
import todoappImage from "../../assets/images/todoapp-screen.png";
import chatappImage from "../../assets/images/chatapp-screen.png";
import madcorarPageImage from "../../assets/images/madcorar-screen.png";

const proyectsList = [
  {
    tittle: "GoScrum",
    description:
      "App similar a Trello, en la que los usuarios pueden registrarse y formar equipos, para trabajar bajo la metodología scrum.",
    image: goscrumImage,
    github: "https://github.com/lucianoumc1/GoScrum",
    deploy: "https://lucianoumc1.github.io/GoScrum/",
  },
  {
    tittle: "Chat App",
    description:
      "Aplicación web p capaz de gestionar conversaciones entre distintos usuarios, al estilo de WhatsApp Web",
    image: chatappImage,
    github: "https://github.com/lucianoumc1/chat-application",
  },
  {
    tittle: "Weather App",
    description:
      "Web que indica el clima de cualquier ciudad, mostrando a la vez una imagen del lugar.",
    image: weatherappImage,
    github: "https://github.com/lucianoumc1/WeatherApp",
    deploy: "https://weather-app-lucianoumc1.vercel.app/",
  },
  {
    tittle: "Todo App",
    description:
      "Una aplicación para la gestión de tareas diarias. Creada con uso de JS, React, CSS y HTML.",
    image: todoappImage,
    github: "https://github.com/lucianoumc1/todoApp",
    deploy: "https://lucianoumc1.github.io/todoApp/",
  },
  {
    tittle: "Simon Says",
    description:
      "El clásico juego de Simón dice construido como practica personal para reforzar conocimientos sobre callStack.",
    image: simonsaysImage,
    github: "https://github.com/lucianoumc1/simon-diceJS",
    deploy: "https://lucianoumc1.github.io/simon-diceJS/",
  },
  {
    tittle: "Madcorar Page",
    description:
      "Pagina web para aportar presencia digital a empresa de seguros, realizada en Wordpress.",
    image: madcorarPageImage,
    deploy: "http://madcorar.com/",
  },
];
export default proyectsList;
