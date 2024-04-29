import clsx from "clsx";
import { ComponentPropsWithoutRef, FC, memo } from "react";
import styles from './Alert.module.scss';
import { CSSTransition } from 'react-transition-group';
import { MinesweeperState } from "../../../utils";


export interface AlertProps extends ComponentPropsWithoutRef<'button'> {
    restart: () => void;
    gameState: { status: MinesweeperState['status'] };
    error: any;
}


const Alert: FC<AlertProps> = memo(({ 
    className, 
    restart,
    gameState: { status },
    error,
    ...props
}) => {
    const classes = clsx(
        className,
        status === 'victory' ? styles.victoryAlert : styles.loseAlert 
    );
    const isActive = status === 'lose' || status === 'victory';
    
    return (
        <CSSTransition
            in={isActive}
            classNames={{
                enterActive: styles.entering,
                exitActive: styles.exiting,
            }}
            timeout={500}
            unmountOnExit
        >
            <button 
                className={classes} 
                onClick={restart} 
                {...props}
            >
                {
                    status === 'lose' ?
                        'you died'
                        :
                        status === 'victory' &&
                        'victory'
                }
                {
                    isActive && error &&
                        <span className={styles.alert__info}>
                            unauthorized
                        </span>
                }
            </button>
        </CSSTransition>
    );
});


export default Alert;