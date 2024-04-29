import { setAccessToken } from "./api.services";

import { 
    LOGIN_PATH, 
    REGISTRATION_PATH, 
    USER_RETRIVE_UPDATE_DELETE_PATH 
} from "shared/configs/urls.config";

import { 
    FetchUserDataResponse, 
    LoginRequest, 
    LoginResponse, 
    RegistrationRequest 
} from "./accounts.models";

import { DEFAUTL_INSTANCE, INSTANCE_WITH_AUTH } from "shared/configs/api.config";


export const login = async ({ email, password }: LoginRequest) => {
    const response = await DEFAUTL_INSTANCE.post<LoginResponse>(
        LOGIN_PATH,
        {
            email,
            password,
        }
    );

    setAccessToken(response.data.access);
    
    return response.data;
};


export const registrate = async ({ email, password, name, confirmPassword }: RegistrationRequest) => {
    const response = await DEFAUTL_INSTANCE.post<LoginResponse>(
        REGISTRATION_PATH,
        {
            email,
            name,
            password,
            re_password: confirmPassword,
        }
    );
    return response.data;
};


export const fetchUserData = async (): Promise<FetchUserDataResponse> => {
    return (await INSTANCE_WITH_AUTH.get<FetchUserDataResponse>(
        USER_RETRIVE_UPDATE_DELETE_PATH
    )).data;
};