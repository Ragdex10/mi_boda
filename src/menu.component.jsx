import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BotonMenu = () => {
  return (
    <div class="dropdown">
      <button
        class="btn  dropdown"
        type="button"
        id="dropdownMenuButton"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FontAwesomeIcon icon={faBars} size="2x" className="iconos" />
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li>
          <Link to="/" className="dropdown-item iconos">
            Inicio
          </Link>
        </li>
        <li>
          <Link to="/programa" className="dropdown-item iconos">
            Programa
          </Link>
        </li>
        <li>
          <Link to="/zoom" className="dropdown-item iconos">
            Ingresar (Zoom ID)
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BotonMenu;
