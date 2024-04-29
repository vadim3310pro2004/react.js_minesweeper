import { GOOGLE_JWT_AUTH_PATH } from "shared/configs/urls.config"
import { LoginByGoogleJwtRequest, LoginByGoogleJwtResponse } from "./accounts.models";
import { setAccessToken } from "./api.services";
import axios from "axios";


type LoginByGoogleJwt = (props: LoginByGoogleJwtRequest) => Promise<LoginByGoogleJwtResponse>;


const loginByGoogleJwt: LoginByGoogleJwt = async ({ token }) => {
    const response = await axios.post(GOOGLE_JWT_AUTH_PATH, { token });

    setAccessToken(response.data.access);

    return response.data;
};


export default loginByGoogleJwt;
