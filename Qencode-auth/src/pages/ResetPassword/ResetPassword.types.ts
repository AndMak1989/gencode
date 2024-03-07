export interface ResetPasswordRequest {
    token: string;
    secret: string;
    password: string;
    password_confirm: string;
}
