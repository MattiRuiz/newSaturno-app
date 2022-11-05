import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { DeleteClient, getClient } from "../../functions/clientMethods";
import { useNavigate } from "react-router-dom";

const FilaTabla = (user, setClients) => {
  const navigate = useNavigate(); // Allows us to redirect
  const setUser = user.user;

  const [userName, setUserName] = useState(setUser.username);
  const [name, setName] = useState(setUser.nombre);
  const [id, setId] = useState(setUser.id);

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const deleteUserHandler = () => {
    DeleteClient(id).then(function (response) {
      console.log(response);
    });
    window.location.reload();
  };

  return (
    <>
      <tr>
        <td>{setUser.id}</td>
        <td>
          <Form>
            <Form.Control
              type="text"
              onChange={userNameHandler}
              value={userName}
            />
          </Form>
        </td>
        <td>
          <Form>
            <Form.Control type="text" onChange={setName} value={name} />
          </Form>
        </td>
        <td>
          <Button variant="danger" onClick={deleteUserHandler}>
            x
          </Button>
          <Button variant="success" className="ms-1">
            e
          </Button>
        </td>
      </tr>
    </>
  );
};

export default FilaTabla;
