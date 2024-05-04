import { GOOGLE_JWT_AUTH_PATH } from "shared/configs/urls.config"
import { LoginByGoogleJwtRequest, LoginByGoogleJwtResponse } from "./accounts.models";
import { setAccessToken } from "./api.services";
import { DEFAUTL_INSTANCE } from "shared/configs/api.config";


type LoginByGoogleJwt = (props: LoginByGoogleJwtRequest) => Promise<LoginByGoogleJwtResponse>;


const loginByGoogleJwt: LoginByGoogleJwt = async ({ token }) => {
    const response = await DEFAUTL_INSTANCE.post(GOOGLE_JWT_AUTH_PATH, { token });

    setAccessToken(response.data.access);

    return response.data;
};


export default loginByGoogleJwt;
