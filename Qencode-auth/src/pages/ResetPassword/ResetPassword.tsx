import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import styles from './ResetPassword.module.scss';
import { Header } from '@/shared/components/Header';
import { Input } from '@/shared/components/Input';
import { Button, ButtonBgColorEnum, ButtonEnum } from '@/shared/components/Button';
import { Img } from '@/shared/components/Image';
import { ResetPasswordRequest } from '@/pages/ResetPassword/ResetPassword.types.ts';
import { useShowPassword } from '@/shared/hooks';

export function ResetPassword() {
    const {
        register,
        watch,
        handleSubmit,
        formState: { errors, isValid }
    } = useForm<ResetPasswordRequest>({ mode: 'onChange' });
    const password = React.useRef({});
    password.current = watch('password', '');
    const navigate = useNavigate();
    const { inputType, handleShowState } = useShowPassword(false);
    const { inputType: confirmInputType, handleShowState: handleConfirmShowState } = useShowPassword(false);

    const onSubmit = () => {
        if (!isValid) {
            return;
        }
        toast('Password was successfully changed!');
        navigate('/');
    };
    return (
        <section>
            <Header headerType="h1">Create new Password?</Header>
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles['controls']}>
                        <Input
                            {...register('password', {
                                required: true,
                                minLength: {
                                    value: 8,
                                    message: 'Password must have at least 8 characters'
                                }
                            })}
                            rightControl={<Img src={'/images/eye.svg'} />}
                            rightControlHandler={handleShowState}
                            type={inputType}
                            className={styles['password-control']}
                            labelText="Password"
                            validationError={errors?.password?.message}
                            placeholder="Password"
                        />

                        <Input
                            {...register('password_confirm', {
                                required: true,
                                validate: (value) =>
                                    value === password.current || 'The passwords do not match'
                            })}
                            labelText="Confirm Password"
                            rightControl={<Img src={'/images/eye.svg'} />}
                            rightControlHandler={handleConfirmShowState}
                            type={confirmInputType}
                            className={styles['confirm-password-control']}
                            validationError={errors?.password_confirm?.message}
                            placeholder="Password"
                        />
                    </div>

                    <Button
                        className={styles['submit-btn']}
                        bgColor={ButtonBgColorEnum.Blue}
                        btnView={ButtonEnum.Solid}
                    >
                        Reset Password
                    </Button>
                </form>
            </div>
        </section>
    );
}
