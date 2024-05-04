import { ComponentPropsWithoutRef, FC } from "react";
import styles from './Confirm.module.scss';
import clsx from "clsx";


export interface ConfirmProps extends ComponentPropsWithoutRef<'div'> {
    onSuccess?: () => void;
    onReject?: () => void;
}


const Confirm: FC<ConfirmProps> = ({
    onSuccess,
    onReject,
    className
}) => {
    const classes = clsx(
        className,
        styles.confirm,
    ); 
    

    return (
        <div className={classes}>
            Вийти ? 
            <div className={styles.confirm__buttons}>
                <button 
                    className={styles.confirm__buttons__yes}
                    onClick={onSuccess}
                >
                    так
                </button>
                <button 
                    className={styles.confirm__buttons__no}
                    onClick={onReject}
                >
                    ні
                </button>
            </div>
        </div>
    );
};


export default Confirm;