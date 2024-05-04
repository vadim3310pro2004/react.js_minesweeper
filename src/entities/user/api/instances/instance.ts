import axios from "axios";
import { API_DOMAIN } from "shared/configs/urls.config";


const instance = axios.create({
    baseURL: API_DOMAIN,
});


export default instance;