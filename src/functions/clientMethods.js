import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getClient() {
  try {
    const response = await axios({
      url: `${baseUrl}/cliente/list`,
      method: "GET",
    });

    return response;
  } catch (errors) {
    console.log(errors);
  }
}

export async function authClient(userName, password) {
  try {
    const response = await axios({
      url: `${baseUrl}/client/login?username=${userName}&password=${password}`,
      method: "GET",
    });
    return response.status;
  } catch (errors) {
    console.log("auth: ", errors);
  }
}
