import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    },
    baseURL: `https://samirlilienfeld-mypath.herokuapp.com`
  });
};

export default axiosWithAuth;