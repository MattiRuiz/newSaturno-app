import React from "react";

import {Table} from "reactstrap";

const ClientList = ({data}) => {
    return ( 
        <div >
                {
                    (data.length < 1) ? (
                        <h1> No hay datos disponibles </h1>
                    )
                    :
                    (
                        data.map((item) => (
                       
                            <Table dark key={item.Id}>
                              <thead>
                                <tr>
                                  <th> Id </th>
                                  <th> Name </th>
                                  <th> User </th>
                                  <th> Contraseña </th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr>
                                  <th scope="row"> {item.Id} </th>
                                  <td> {item.nombre} </td>
                                  <td> {item.username} </td>
                                  <td> {item.Contrasena} </td>
                                </tr>
                              </tbody>
                            </Table>
                        ))
                    )
                }
        </div>
    )
}

export default ClientList