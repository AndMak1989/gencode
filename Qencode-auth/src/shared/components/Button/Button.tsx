import cn from 'classnames';

import { ButtonProps } from './Button.types.ts';
import styles from './Button.module.scss';

export function Button({ children, btnView, bgColor, isDisabled, className, ...props }: ButtonProps) {
    const cssClasses = cn(styles.basic, className, styles[btnView], bgColor && styles[bgColor]);
    return (
        <button disabled={isDisabled} className={cssClasses} {...props}>
            {children}
        </button>
    );
}
