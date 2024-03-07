import React from 'react';
import { ButtonBgColorEnum, ButtonEnum } from './Button.enum.ts';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    btnView: ButtonEnum;
    children?: React.ReactNode;
    bgColor?: ButtonBgColorEnum;
    isDisabled?: boolean;
}
