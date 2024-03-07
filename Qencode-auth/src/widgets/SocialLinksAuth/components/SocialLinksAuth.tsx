import styles from './SocialLinks.module.scss';

import { Button, ButtonEnum } from '@/shared/components/Button';
import { Img } from '@/shared/components/Image';

export function SocialLinksAuth() {
    return (
        <section className={styles['social-media']}>
            <div className={styles['btn-wrapper']}>
                <Button type="button" btnView={ButtonEnum.Outline}>
                    <Img src="/images/google.svg" />
                    <p className={styles['btn-title']}>Google</p>
                </Button>
            </div>
            <div className={styles['btn-wrapper']}>
                <Button type="button" btnView={ButtonEnum.Outline}>
                    <Img src="/images/github.svg" />
                    <p className={styles['btn-title']}>Github</p>
                </Button>
            </div>
        </section>
    );
}
