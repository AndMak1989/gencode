import cn from 'classnames';

import { TextProps } from './Text.types.ts';
import styles from './Text.module.scss';

export function Text({ children, className, ...props }: TextProps) {
    return (
        <p className={cn(styles['text'], className)} {...props}>
            {children}
        </p>
    );
}
