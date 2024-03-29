import axios from "axios";

const BASE_URL = "https://gorgeous-turtleneck-bat.cyclic.app/api/";
let TOKEN;
if (JSON.parse(localStorage.getItem("persist:root"))) {
  TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
    .currentUser
    ? `${
        JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
          .currentUser.accessToken
      }`
    : "";
}
console.log(TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
