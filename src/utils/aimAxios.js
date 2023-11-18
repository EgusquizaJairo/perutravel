import axios from 'axios';
import { backendURL as baseUrl } from 'src/config';
// import { localURL as baseUrl} from 'src/config';


const certifyAxios = axios.create({
  baseURL: baseUrl
})

const certifyAxiosImages = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  }
})

certifyAxios.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'There is an error!'
    )
);

certifyAxiosImages.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'There is an error!'
    )
);




export default certifyAxios;
