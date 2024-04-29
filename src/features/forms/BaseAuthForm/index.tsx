import { ComponentPropsWithoutRef, FC, ReactNode } from "react";

import styles from './BaseAuthForm.module.scss';
import clsx from "clsx";
import GoogleAuth from "features/GoogleAuth";


export interface BaseAuthFormProps extends ComponentPropsWithoutRef<'form'> {
    buttons: ReactNode[]; 
}


const BaseAuthForm: FC<BaseAuthFormProps> = ({ 
    className,
    children,
    buttons,
    ...props 
}) => {
    return (
        <form
            className={clsx(className, styles.root)}
            {...props}
        >
            {children}
 
            <div className={styles.buttons}>
                {...buttons}
            </div>
            <div className={styles.oauth_buttons}>
                <GoogleAuth />
            </div>
        </form>
    );
};


export default BaseAuthForm;