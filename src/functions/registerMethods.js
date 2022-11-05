import axios from "axios";
import { dataUsarioResponse } from "../Components/SignUp/SignUp";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getProfessionals() {
  try {
    axios({
        url: `${baseUrl}/professional/${id}`,
        method: 'POST',
        data: {dataUsarioResponse},
        headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
        }
    })
  } catch (errors) {
    console.log(errors);
  }
}

export async function IDGetProfesional(id) {
  try {
    const response = await axios({
      url: `${baseUrl}/professional/${id}`,
      method: "GET",
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}