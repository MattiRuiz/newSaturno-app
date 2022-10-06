import React, {useState, useEffect, Fragment} from 'react';
import {getClient} from "../functions/clientMethods";
import ClientList from './ClientList';

const Client = () => {
    const [client, setClient] = useState([])

    useEffect( () => {
        async function loadClient() {
            const response = await getClient();  
            if (response.status === 200) {
                setClient(response.data)
            }
        }
        loadClient();
    }, [])

  return (
    <Fragment>
        <div> <ClientList data={client}/> </div>
    </Fragment>
  )
}

export default Client