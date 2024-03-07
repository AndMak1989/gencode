import { httpClient } from '@/core/http';

import { LoginRequest, LoginResponse } from '@/pages/Login/Login.types.ts';
import { AxiosError, AxiosResponse } from 'axios';
import { ErrorDetail, ErrorResponse } from '@/core/http/types/error.ts';
import { HttpEnumErrorsEnum } from '@/shared/enums/HttpEnumErrors.enum.ts';
import React from 'react';
import { toast } from 'react-toastify';

export function useLogin() {
    const [formData, setFormData] = React.useState<LoginRequest | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [response, setResponse] = React.useState<LoginResponse>();
    const [errors, setErrors] = React.useState<ErrorDetail[] | null>(null);

    const handleFormData = React.useCallback((data: LoginRequest) => {
        setFormData(data);
    }, []);

    const clearErrors = React.useCallback(() => {
        setErrors(null);
    }, []);
    React.useEffect(() => {
        if (!formData) {
            return;
        }
        setLoading(true);
        const fetchLoginData = async () => {
            try {
                const { data } = await httpClient.post<LoginResponse>('/v1/auth/login', formData);
                toast('User logged in successfully');
                setResponse(data);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                if (error instanceof AxiosError) {
                    const { data, status } = error?.response as AxiosResponse<ErrorResponse>;
                    if (status === HttpEnumErrorsEnum.UnprocessableEntity) {
                        setErrors(data.detail);
                    }
                }
                throw new Error('Unable to get a token.');
            }
        };
        fetchLoginData();
    }, [formData]);

    return {
        response,
        handleFormData,
        clearErrors,
        loading,
        errors
    };
}
