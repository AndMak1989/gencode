import { Outlet } from 'react-router-dom';
import { ReactElement } from 'react';

import styles from './AuthLayout.module.scss';
import { Img } from '@/shared/components/Image/Image.tsx';

export default function AuthLayout(): ReactElement {
    return (
        <div className={styles.layout}>
            <div className={styles.logo}>
                <Img src="/images/logo.svg" />
            </div>
            <div className={styles['content']}>
                <Outlet />
            </div>
        </div>
    );
}
