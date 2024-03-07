import { HeaderProps } from './Header.types.ts';
import styles from './Header.module.scss';
export function Header({ children, headerType }: HeaderProps) {
    return <p className={styles[headerType]}>{children}</p>;
}
