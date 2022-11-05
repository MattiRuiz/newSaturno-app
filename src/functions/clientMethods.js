import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getClient(){
    try{
        const response = await axios({
            url: `${baseUrl}/cliente/list`,
            method: 'GET',
        })
        
        return response
    }catch (errors) {
        console.log(errors)
    }
}

