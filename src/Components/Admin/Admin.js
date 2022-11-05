import React from "react";

import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const Admin = () => {
  return (
    <Container>
      <Row className="justify-content-center text-start">
        <Col xs={12} lg={10} xl={7} className="border-bottom pb-4">
          <h1>Admin</h1>
        </Col>
        <Col xs={12} lg={10} xl={7} className="my-4">
          <p className="fw-bold">Administrador de usuarios:</p>
          <Table hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Name</th>
                <th>Edit/Delete</th>
              </tr>
              <tr>
                <td>1</td>
                <td>FacuCapoBoca</td>
                <td>Facundo Romano</td>
                <td>
                  <Button variant="danger">x</Button>
                  <Button variant="success" className="ms-1">
                    e
                  </Button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>MatiOtroCapo</td>
                <td>Matias Ruiz</td>
                <td>
                  <Button variant="danger">x</Button>
                  <Button variant="success" className="ms-1">
                    e
                  </Button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>LisaJR</td>
                <td>Sofia Corvalan</td>
                <td>
                  <Button variant="danger">x</Button>
                  <Button variant="success" className="ms-1">
                    e
                  </Button>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>ElEloAelo</td>
                <td>Aelohim Specciale</td>
                <td>
                  <Button variant="danger">x</Button>
                  <Button variant="success" className="ms-1">
                    e
                  </Button>
                </td>
              </tr>
            </thead>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
