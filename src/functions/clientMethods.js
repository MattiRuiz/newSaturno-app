import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getClient() {
  try {
    const response = await axios({
      url: `${baseUrl}/client`,
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
    return response;
  } catch (errors) {
    console.log("auth: ", errors);
  }
}

export async function DeleteClient(id) {
  console.log("function: ", id);
  try {
    const response = await axios({
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE",
      },
      url: `${baseUrl}/client/${id}`,
      method: "DELETE",
    });
    return response;
  } catch (errors) {
    console.log("auth: ", errors);
  }
}
