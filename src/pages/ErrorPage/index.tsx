import { ComponentPropsWithoutRef, FC } from 'react';
import styles from './ErrorPage.module.scss';
import clsx from 'clsx';


export interface ErrorPageProps extends ComponentPropsWithoutRef<'main'> {

}


const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
    const classes = clsx(
        className,
        styles.root
    );

    return (
        <section className={classes}>
            <h1 className={styles.error__title}>
                Error
            </h1>
            <p className={styles.error__subtitle}>
                Oups... somethin went wrong
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste molestias enim a aut, quidem fuga nostrum consectetur cum ipsum. Nobis sequi quidem, fugit architecto maiores obcaecati eveniet minima asperiores facilis.
            </p>
        </section>
    );  
}


export default ErrorPage;