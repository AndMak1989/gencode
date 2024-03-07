import { DividerProps } from './Divider.types.ts';
import styles from './DIvider.module.scss';

export function Divider({ children }: DividerProps) {
    return (
        <div className={styles['divider']}>
            {children && <span className={styles['content']}>{children}</span>}
        </div>
    );
}
