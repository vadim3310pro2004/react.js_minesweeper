import { ComponentPropsWithoutRef, FC } from "react";
import styles from './Loader.module.scss';
import clsx from "clsx";


export interface LoaderProps extends ComponentPropsWithoutRef<'div'> { }


const Loader: FC<LoaderProps> = ({ className, ...props }) => {
    const classes = clsx(styles.loader, className);

    return (
        <div 
            className={classes} 
            {...props}
        >

        </div>
    );
};


export default Loader;