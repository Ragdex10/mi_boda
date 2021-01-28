import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = ({ nombres }) => {
  return (
    <React.Fragment>
      <div className="d-flex flex-row justify-content-center ">
        <h1 className="display-4 nombres-novios titulos">{nombres}</h1>
      </div>
      <div className="d-flex flex-row justify-content-center ">
        <p className="lead mensaje-principal">
          <blockquote className="blockquote">
            <p className="mb-0">
              "Mejor son dos que uno solo...Y una cuerda triple no se rompe en
              dos pronto."
            </p>
            <footer className="blockquote-footer">
              <br />{" "}
              <cite title="Source Title" className="iconos">
                Eclesiastes 4:9,12
              </cite>
            </footer>
          </blockquote>
          <blockquote className="blockquote">
            <p className="mb-0">
              "Si seguimos amándonos unos a otros, Dios permanece en nosotros y
              su amor se hace perfecto en nosotros."
            </p>
            <footer class="blockquote-footer">
              <br />{" "}
              <cite title="Source Title" className="iconos">
                1 Juan 4:12
              </cite>
            </footer>
          </blockquote>
        </p>
      </div>
    </React.Fragment>
  );
};

export default HomePage;
