import axios from "axios";

let baseUrl = "";
export async function $axios(url, options) {
  const fianlOptions = Object.assign(
    {},
    {
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "includes"
    },
    options
  );
  const response = await axios(`${baseUrl}${url}`,fianlOptions);
  if (response.data) {
    return response.data;
  } else {
    const error = new Error("error");
    throw error;
  }
}
export default {
  install(Vue, options) {
    baseUrl = options.baseUrl;
    Vue.prototype.$axios = $axios;
  }
};
