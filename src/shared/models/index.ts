

export interface RefreshResponse {
    access: string;
}


export interface LoginResponse {
    access: string;
    refresh: string;
}


export interface LoginRequest {
    email: string;
    password: string;
}