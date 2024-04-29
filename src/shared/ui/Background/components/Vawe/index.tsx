import { ComponentPropsWithoutRef, FC } from "react";
import styles from './Vawe.module.scss';
import clsx from "clsx";


export interface VaweProps extends ComponentPropsWithoutRef<'div'> { }


const Vawe: FC<VaweProps> = ({ 
    className, 
    ...props 
}) => {
    const classes = clsx(
        styles.vawe,
        className,
    );

    return (
        <div 
            className={classes}
            {...props}
        >
        </div>
    );
};


export default Vawe;