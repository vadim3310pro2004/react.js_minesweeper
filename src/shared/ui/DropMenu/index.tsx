import { 
    ComponentPropsWithoutRef, 
    FC, 
    MouseEventHandler, 
    ReactNode, 
    useEffect, 
    useId, 
    useRef, 
    useState 
} from "react";
import styles from './DropMenu.module.scss';
import clsx from "clsx";
import { CSSTransition } from 'react-transition-group';


export interface DropMenuProps extends ComponentPropsWithoutRef<'div'> {
    icon: ReactNode;
}


const DropMenu: FC<DropMenuProps> = ({ icon, children, className, ...props }) => {
    const [isOpen, setIsOpen] = useState(false);
    const id = useId().slice(1, -1);
    const ref = useRef<HTMLDivElement>(null) as { current: HTMLDivElement};

    const classes = clsx(
        className,
        styles.root,
        id,
        isOpen? styles.open : styles.close
    );
    
    const handleToggle: MouseEventHandler = () => {
        setIsOpen(prev => !prev);
        if (!isOpen) {
            setTimeout(
                () => {
                    const width = window.innerWidth;
                    const height = window.innerHeight;
                    
                    const styles = window.getComputedStyle(ref.current);
                    const elemTop = +styles.top.slice(0, -2);
                    const elemLeft = ref.current.getBoundingClientRect().x;
                    const elemStyleLeft = +styles.left.slice(0, -2);
                    const elemWidth = +styles.width.slice(0, -2);
                    const elemHeight = +styles.height.slice(0, -2);

                    if (elemTop + elemHeight > height && elemHeight < height) {
                        ref.current.style.top = `${height - elemTop}px`;
                    }
                    else if (elemTop < 0) {
                        ref.current.style.top = "5px";
                    }
                    if (elemLeft + elemWidth > width && elemWidth < width) {
                        ref.current.style.left = `${elemStyleLeft - elemLeft - elemWidth + width - 5}px`;
                    }
                    else if (elemTop + elemHeight < 0) {
                        ref.current.style.left = `${elemStyleLeft + elemLeft + elemWidth - width + 5}px`;
                    }
                }, 1);
        }
    }

    const listener = useRef<EventListener>(null as any);
    useEffect(() => {
        if (isOpen === true) {
            listener.current = ({ target }: any) => {
                if (!target.closest(`.${id}`)) {
                    setIsOpen(false);
                }
            };
            document.addEventListener('click', listener.current);
        } else {
            document.removeEventListener('click', listener.current);
        }

        return () => document.removeEventListener('click', listener as any);
    }, [isOpen]);

    return (
        <div className={classes} {...props}>
            <div 
                className={styles.icon} 
                onClick={handleToggle}
            >
                {icon}
            </div>
            <CSSTransition
                in={isOpen}
                timeout={500}
                classNames={{
                    enterActive: styles.entering,
                    exitActive: styles.exiting,
                    exitDone: styles.exitDone,
                }}
                mountOnEnter
            >
                <div className={styles.body} ref={ref}>
                    {children}
                </div>
            </CSSTransition>
        </div>
    );
};


export default DropMenu;