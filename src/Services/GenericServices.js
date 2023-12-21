import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem("token");

class GenericService {
  get = (url) =>
    new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  post = (url, data) =>
    new Promise((resolve, reject) => {
      debugger;
      axios
        .post(url, data)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
}
export default GenericService;
