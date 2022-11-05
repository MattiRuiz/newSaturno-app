import React from "react";

import "./CardProfesional.css";

import Card from "react-bootstrap/Card";
import { FiClock } from "react-icons/fi";
import { BiMap } from "react-icons/bi";
import { useContext } from "react";
import ThemeContext from "../../../Contexts/ThemeContext/ThemeContext";

const CardProfesional = ({ data }) => {
  const { theme, handleTheme } = useContext(ThemeContext);
  return (
    <>
      <Card key={data.Id}>
        <Card.Img className={theme} variant="top" src={data.fotoPerfil} />
        <Card.Body>
          <Card.Title>{data.nombre} </Card.Title>
          <Card.Subtitle className="text-muted mb-2">
            {data.profesion}
          </Card.Subtitle>
          <Card.Text>
            <ul className="list-unstyled mb-0">
              <li>
                <BiMap />
                {data.direccion} - {data.ubicacion}
              </li>
              <li>
                <FiClock />
                <span className="ml-4">{data.horario}</span>
              </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProfesional;
