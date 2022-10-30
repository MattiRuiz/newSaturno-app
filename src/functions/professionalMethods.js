import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getProfessionals() {
  try {
    const response = await axios({
      url: `${baseUrl}/professional/list`,
      method: "GET",
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}
