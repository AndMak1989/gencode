import axios, { AxiosError, AxiosResponse } from 'axios';

import { PATH } from './constants';
import { HttpEnumErrorsEnum } from '@/shared/enums/HttpEnumErrors.enum.ts';
import { toast } from 'react-toastify';
import { ErrorResponse } from '@/core/http/types/error.ts';

export const httpClient = axios.create({
    baseURL: PATH,
    headers: {
        'Content-Type': 'application/json'
    }
});

httpClient.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        const { data, status } = error.response as AxiosResponse<ErrorResponse>;
        if (status === HttpEnumErrorsEnum.Unauthorized) {
            toast(data.detail.toString(), { type: 'error' });
            return;
        }

        return Promise.reject(error);
    }
);
