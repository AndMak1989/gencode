import React, { ReactElement } from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    labelText?: string;
    ref?: HTMLElement;
    rightControl?: ReactElement;
    rightControlHandler?: () => void;
    validationError?: string;
}
