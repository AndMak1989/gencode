import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { Header } from '@/shared/components/Header';
import { Input } from '@/shared/components/Input';
import styles from './RestorePassword.module.scss';
import { LoginRequest } from '@/pages/Login/Login.types.ts';
import { Button, ButtonBgColorEnum, ButtonEnum } from '@/shared/components/Button';
import { ValidationPatternsEnum } from '@/shared/enums/ValidationPatterns.enum.ts';
import { RestorePasswordRequest } from '@/pages/ForgotPassword/RestorePassword.types.ts';
import { useRestorePassword } from '@/pages/ForgotPassword/hooks/useRestorePassword.ts';

export function RestorePassword() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginRequest>({ mode: 'onChange' });
    const navigate = useNavigate();
    const { handleFormData } = useRestorePassword();
    const cancelRestoration = (): void => {
        navigate('/');
    };

    const onSubmit = (formData: RestorePasswordRequest) => {
        handleFormData(formData);
        navigate('/reset-password');
    };
    return (
        <section>
            <Header headerType="h1">Forgot Password?</Header>
            <div className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles['controls']}>
                        <Input
                            {...register('email', {
                                required: true,
                                validate: (value) => {
                                    return (
                                        new RegExp(ValidationPatternsEnum.Email, 'gi').test(value) ||
                                        'Please enter a valid email'
                                    );
                                }
                            })}
                            type="text"
                            placeholder="Enter your email"
                            validationError={errors?.email?.message}
                        />
                    </div>

                    <Button
                        className={styles['submit-btn']}
                        bgColor={ButtonBgColorEnum.Blue}
                        btnView={ButtonEnum.Solid}
                    >
                        Send
                    </Button>

                    <Button type="button" onClick={cancelRestoration} btnView={ButtonEnum.OutlineLong}>
                        Cancel
                    </Button>
                </form>
            </div>
        </section>
    );
}
