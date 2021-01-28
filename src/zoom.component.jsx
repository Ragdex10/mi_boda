import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKey } from "@fortawesome/free-solid-svg-icons";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";

const ZoomPage = () => {
  return (
    <React.Fragment>
      <div className="d-flex flex-row justify-content-center "></div>
      <div className="d-flex flex-row justify-content-center ">
        <p className="lead mensaje-principal">
          <p className="h2 titulos">¡Nos Casamos!</p>
          <p>
            Y nos encantaría compartir ese día contigo. Sabemos que por la
            situación actual no puedas estar presente fisicamente con nosotros.
            Pero, debes saber que eres alguien muy importante en nuestras vidas
            y nos haria muy felices que nos acompañaras a esta ocasion tan
            especial a traves de videoconferencia.{" "}
          </p>
          <p> La cual se llevará a cabo el: </p>
          <FontAwesomeIcon
            icon={faCalendarWeek}
            size="1x"
            className="iconos"
          />{" "}
          <span className="lead">
            {" "}
            Sábado 20 de Febrero de 2021. 03:00 P.M.{" "}
          </span>
          <br /> <br />
          <p>
            A traves de Zoom. Puedes entrar a nuestra boda con los siguientes
            datos:{" "}
          </p>
          <FontAwesomeIcon icon={faVideo} size="1x" className="iconos" />
          <span className="lead"> 826 2968 8256</span>
          <br />
          <FontAwesomeIcon icon={faKey} size="1x" className="iconos" />
          <span className="lead"> 987898</span>
        </p>
      </div>
    </React.Fragment>
  );
};

export default ZoomPage;
