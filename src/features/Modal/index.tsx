import { ComponentPropsWithoutRef, FC, MouseEventHandler, useRef } from 'react';
import styles from './Modal.module.scss';
import clsx from 'clsx';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { setModalIsOpen } from 'entities/window/store/window.slice';


export interface ModalProps extends ComponentPropsWithoutRef<'div'> {
    
}


const Modal: FC<ModalProps> = ({
    className,
}) => {
    const dispatch = useAppDispatch();
    const wrapperRef = useRef(null);
    const modal = useAppSelector(state => state.window.modal);
    const classes = clsx(
        styles.modal, 
        className,
    );

    const handleWrapperClick: MouseEventHandler = ({ target }) => {
        if (target === wrapperRef.current) {
            dispatch(setModalIsOpen(false));
        }
    }

    return (
        modal.isOpen?
            <div
                ref={wrapperRef}
                className={styles.wrapper}
                onClick={handleWrapperClick}
            >
                <div className={classes}>
                    <div className={styles.modal__body}>
                        {modal.body}
                    </div>
                </div>
            </div>
        :
          <></>
    );
};


export default Modal;