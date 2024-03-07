export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    error: number;
    detail: string[];
    timestamp: number;
    access_token: string;
    refresh_token: string;
    token_expire: number;
    refresh_token_expire: number;
}
