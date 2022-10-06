import React from "react";

import {Table} from "reactstrap";

import "./ClientList.css"
const ClientList = ({data}) => {
    return ( 
        <div >
                {
                    (data.length < 1) ? (
                        <h1> No hay datos disponibles </h1>
                    )
                    :
                    (
                        data.map((item ) => (  
                       
                            <Table key={item.id} >
                              <thead className="asd">
                                <tr>
                                  <th> Id </th>
                                  <th> Name </th>
                                  <th> User </th>
                                  <th> Descripcion </th>
                                  <th> Modificar </th>
                                  <th> Eliminar </th>
                                </tr>
                              </thead>

                              <tbody className="assd">
                                <tr >
                                  <td scope="row"> {item.id} </td>
                                  <td> {item.nombre} </td>
                                  <td> {item.username} </td>
                                  <td> {item.descripcion} </td>
                                  <td className="tdbtn"> <button className="btn_client">O</button> </td>
                                  <td className="tdbtn"><button className="btn_client">X</button></td>
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