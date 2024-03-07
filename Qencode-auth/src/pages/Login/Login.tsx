import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useForm } from 'react-hook-form';

import styles from './Login.module.scss';
import { Img } from '@/shared/components/Image/Image.tsx';
import { Button, ButtonBgColorEnum, ButtonEnum } from '@/shared/components/Button';
import { Header } from '@/shared/components/Header';
import { useShowPassword } from '@/shared/hooks';
import { Divider } from '@/shared/components/Divider';
import { Input } from '@/shared/components/Input';
import { Text } from '@/shared/components/Text';
import { SocialLinksAuth } from '@/widgets/SocialLinksAuth/components/SocialLinksAuth.tsx';
import { LoginRequest } from './Login.types.ts';
import { ValidationPatternsEnum } from '@/shared/enums/ValidationPatterns.enum.ts';
import { useLogin } from '@/pages/Login/hooks/useLogin.ts';

export function Login() {
    const { errors: loginErrors, loading, handleFormData, clearErrors } = useLogin();
    const {
        register,
        handleSubmit,
        getFieldState,
        formState: { errors, isValid }
    } = useForm<LoginRequest>({ mode: 'onChange' });

    const isPasswordDisplayed = !getFieldState('email').invalid && getFieldState('email').isDirty;
    function onSubmit(formData: LoginRequest) {
        clearErrors();
        if (isValid) {
            handleFormData(formData);
        }
    }
    const { inputType, handleShowState } = useShowPassword(false);
    return (
        <div className="login">
            <Header headerType="h1">Log in to your account</Header>
            <SocialLinksAuth />
            <Divider>
                <span className={styles['divider-text']}>or</span>
            </Divider>

            <section className="form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles['controls']}>
                        <div className="error-list">
                            {loginErrors?.map((error) => (
                                <Text className="error-message">
                                    {error.field_name.toUpperCase()}: {error.error}
                                </Text>
                            ))}
                        </div>
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
                            className={cn(isPasswordDisplayed && styles.control)}
                            type="text"
                            placeholder="Work email"
                            validationError={errors?.email?.message}
                        />

                        {isPasswordDisplayed && (
                            <div className="password">
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
                                    validationError={errors?.password?.message}
                                    placeholder="Password"
                                />

                                <Link className={cn('link', styles['password-link'])} to={'/forgot-password'}>
                                    Forgot your password?
                                </Link>
                            </div>
                        )}
                    </div>

                    <Button isDisabled={loading} bgColor={ButtonBgColorEnum.Blue} btnView={ButtonEnum.Solid}>
                        Log in to Qencode
                    </Button>
                </form>

                <Text className={styles['sign-up-text']}>
                    Is your company new to Qencode?{' '}
                    <Link className="link" to="/sign-up">
                        Sign up
                    </Link>
                </Text>
            </section>
        </div>
    );
}
