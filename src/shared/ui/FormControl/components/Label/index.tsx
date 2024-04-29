import { ComponentPropsWithoutRef, FC } from "react"
import { CSSTransition } from 'react-transition-group';
import styles from './Label.module.scss';

export interface AnimatedRowProps extends ComponentPropsWithoutRef<'label'> {
}


const AnimatedRow: FC<AnimatedRowProps> = ({ children, className, ...props }) => {

    return (
        <CSSTransition
            in={Boolean(children)}
            timeout={100}
            classNames={{
                enterActive: styles.entering,
                exitActive: styles.exiting,
            }}
            unmountOnExit
            mountOnEnter
        >
            <label className={className} {...props} >
                {children}
            </label>
        </CSSTransition>
    );
};


export default AnimatedRow;