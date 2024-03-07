import { createBrowserRouter } from 'react-router-dom';

import AuthLayout from '@/layouts/Auth/AuthLayout.tsx';
import { NotFound } from '@/pages/NotFound/NotFound.tsx';
import { Login } from '@/pages/Login';
import { RestorePassword } from '@/pages/ForgotPassword';
import { ResetPassword } from '@/pages/ResetPassword/ResetPassword.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: 'forgot-password',
                element: <RestorePassword />
            },
            {
                path: 'reset-password',
                element: <ResetPassword />
            }
        ]
    },
    {
        path: '*',
        element: <NotFound />
    }
]);
