import { forwardRef } from 'react';
import classNames from 'classnames';

import { InputProps } from './Input.types.ts';
import styles from './Input.module.scss';

type InputRef = HTMLInputElement;
export const Input = forwardRef<InputRef, InputProps>(
    ({ rightControl, rightControlHandler, className, labelText, validationError, ...props }, ref) => {
        const inputCssClasses = classNames(
            styles['input'],
            styles['rightPadding'],
            className,
            validationError && styles['error']
        );

        return (
            <section>
                {validationError && <div className="error-message">{validationError}</div>}
                {labelText && <label className={styles['label']}>{labelText}</label>}
                <div className={styles['input-wrapper']}>
                    <input className={inputCssClasses} {...props} ref={ref} />
                    {rightControl && (
                        <button onClick={rightControlHandler} className={styles['right-control-container']}>
                            {rightControl}
                        </button>
                    )}
                </div>
            </section>
        );
    }
);
