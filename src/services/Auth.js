import axios from "axios";

// const API = "https://vigilant-vaughan.74-208-39-204.plesk.page/deepia";
// const ENV = process.env;
const API = process.env.NEXT_PUBLIC_API_LOGIN;

export const loginService = async (values) => {
  // console.log(values, "values on atuh login");
  try {
    // const response = await axios.post(`${API}/users/login`, {
    console.log({API});
    const response = await axios.post(`${API}/users/login`, {
      username: values.username,
      password: values.password,
    });
    return response;
    // console.log(response);
  } catch (error) {
    console.error(error);
  }
};
