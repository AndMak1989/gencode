import React from 'react';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

import { ErrorDetail, ErrorResponse } from '@/core/http/types/error.ts';
import { HttpEnumErrorsEnum } from '@/shared/enums/HttpEnumErrors.enum.ts';
import { RestorePasswordRequest } from '@/pages/ForgotPassword/RestorePassword.types.ts';

export function useRestorePassword() {
    const [formData, setFormData] = React.useState<RestorePasswordRequest | null>(null);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [errors, setErrors] = React.useState<ErrorDetail[] | null>(null);

    const handleFormData = React.useCallback((data: RestorePasswordRequest) => {
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
                toast(`Please check your email ${formData.email} to complete the password reset process.`);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                if (error instanceof AxiosError) {
                    const { data, status } = error?.response as AxiosResponse<ErrorResponse>;
                    if (status === HttpEnumErrorsEnum.UnprocessableEntity) {
                        setErrors(data.detail);
                    }
                }
                throw new Error('Unable to reset the password.');
            }
        };
        fetchLoginData();
    }, [formData]);

    return {
        handleFormData,
        clearErrors,
        loading,
        errors
    };
}
