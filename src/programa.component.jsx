import React from "react";

const ProgramaPage = () => {
  return (
    <React.Fragment>
      <div className="d-flex flex-row justify-content-center "></div>
      <div className="d-flex flex-row justify-content-center ">
        <p className="lead mensaje-principal">
          <p className="h2 titulos">Programa (Zoom) </p>
          <ul class="list-group list-group-flush">
            <li className="list-group-item">
              <small className="iconos">3:00pm - </small>Discurso Biblico.
            </li>
            <li className="list-group-item">
              <small className="iconos">3:45pm - </small>Dedicatorias y
              Felicitaciones.
            </li>
            <li className="list-group-item">
              <small className="iconos">5:00pm - </small>Vals de los Novios
            </li>
            <li class="list-group-item">
              <small className="iconos">5:15pm - </small>Palabras de
              agradecimiento y cierre de transmision.
            </li>
          </ul>
        </p>
      </div>
    </React.Fragment>
  );
};

export default ProgramaPage;
