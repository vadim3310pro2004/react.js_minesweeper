import { FC, ReactNode } from "react";
import styles from './Button.module.scss';
import clsx from "clsx";
import { Link } from "react-router-dom";


export interface ButtonProps {
    [key: string]: any;
    children?: string | ReactNode;
    className?: string;
    component?: 'a' | 'button';
    variant?: 'success' | 'default'; 
    to?: string;
}


const Button: FC<ButtonProps> 
    = ({ children, className, variant = 'default', to='#', component, ...props }) => {
    
    const classes = clsx(
        styles.button,
        styles[variant],
        className,
    );

    if (component === 'a') {
        return (
            <Link className={classes} to={to} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}


export default Button;