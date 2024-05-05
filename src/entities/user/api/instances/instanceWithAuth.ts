import axios from "axios";

import { API_DOMAIN, REFRESH_PATH } from "shared/configs/urls.config";
import { RefreshResponse } from "shared/models";
import { 
    getAccessToken, 
    removeAccessToken, 
    setAccessToken 
} from "../api.services";


const instanceWithAuth = axios.create({
    baseURL: API_DOMAIN,
});


instanceWithAuth.interceptors.request.use(config => {
    const token = getAccessToken();

    if (token) {
        config.headers.Authorization = `JWT ${token}`;
    }

    return config;
});


instanceWithAuth.interceptors.response.use(config => config, async (error) => {
    const originalConfig = error.config;
    const token = getAccessToken();
    console.log("in interceptor");
    
    if (
        error.response?.status === 401 
        && 
        !originalConfig._isRetry 
        && 
        token
    ) {
        originalConfig._isRetry = true;
        await refresh();

        return axios.request(originalConfig);
    }

    throw error;
});


const refresh = async () => {
    try {
        const response = await instanceWithAuth.post<RefreshResponse>(
            REFRESH_PATH,
            {}, {
                withCredentials: true,
        });
        const token = response.data.access;

        if (token) {
            setAccessToken(token);
            console.log("success");
            
            return response;
        } else {
            removeAccessToken();
            
            throw new Error('Refresh response have not access token');
        }
    } catch (error: any) {
        removeAccessToken();
        throw error;
    }
};


export default instanceWithAuth;