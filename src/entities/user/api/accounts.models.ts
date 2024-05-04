

export interface LoginRequest {
    email: string;
    password: string;
}


export interface RegistrationRequest {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}


export interface LoginResponse {
    access: string;
    refresh: string;
}   


export interface RegistrationResponse {
    username: string;
    pk: number;
}


export interface FetchUserDataResponse {
    id: number;
    is_admin: boolean;
    email: string;
    name: string;
}


export interface ResendEmailConfirmationRequest {
    email: string;
}


export interface LoginByGoogleJwtRequest {
    token: string;
}


export interface LoginByGoogleJwtResponse extends LoginResponse { }
