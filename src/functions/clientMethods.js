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
    const clientList = getClient();
    console.log(clientList);
    console.log(userName, password);
  } catch (errors) {
    console.log("auth: ", errors);
  }
}
