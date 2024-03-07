export interface RestorePasswordRequest {
    email: string;
}

export interface RestorePasswordResponse {
    error: number;
    detail: string[];
    timestamp: number;
}
