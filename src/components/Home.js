import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="intro-box">
        <div className="intro-texts">
          <h1 className="intro-title">Griego Bíblico Preguntas</h1>
          <p className="intro-description">Selecciona la lista de Preguntas</p>
        </div>
        <div className="intro-icon">
          <i className="bi bi-question-circle"></i>
        </div>
      </div>

      <div className="level-boxes">
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">Básico</h2>
            <span>Nivel</span>
          </div>
          <Link className="level-link" to="/quiz/GriegoBasico">
            <span>Inicial Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">Intermedio</h2>
            <span>Nivel</span>
          </div>
          <span>Inicial Quiz</span> <i className="bi bi-arrow-right"></i>
          {/*<Link className="level-link" to="/quiz/A2">
            <span>Inicial Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>*/}
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">Avanzado</h2>
            <span>Nivel</span>
          </div>
          <span>Inicial Quiz</span> <i className="bi bi-arrow-right"></i>
          {/*<Link className="level-link" to="/quiz/B1">
            <span>Inicial Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>*/}
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">Verbos</h2>
            <span>Nivel</span>
          </div>
          <span>Inicial Quiz</span> <i className="bi bi-arrow-right"></i>
          {/*<Link className="level-link" to="/quiz/B2">
            <span>Inicial Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>*/}
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">Participios</h2>
            <span>Nivel</span>
          </div>
          <span>Inicial Quiz</span> <i className="bi bi-arrow-right"></i>
           {/*<Link className="level-link" to="/quiz/C1">
            <span>Inicial Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>*/}
        </div>
        <div className="level-box">
          <div className="level-text">
            <h2 className="level-name">Aoristos</h2>
            <span>Nivel</span>
          </div>
          <span>Inicial Quiz</span> <i className="bi bi-arrow-right"></i>
          {/*<Link className="level-link" to="/quiz/C2">
            <span>Inicial Quiz</span> <i className="bi bi-arrow-right"></i>
          </Link>*/}
        </div>
      </div>
    </div>
  );
}

export default Home;
