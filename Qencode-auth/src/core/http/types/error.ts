export interface ErrorResponse {
    error: number;
    detail: ErrorDetail[];
}

export interface ErrorDetail {
    field_name: string;
    error: string;
}
