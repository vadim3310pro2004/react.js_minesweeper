import { FC, memo, useContext } from "react";
import styles from './Menu.module.scss';
import Stopwatch from "shared/ui/Stopwatch";
import { menuContext } from "../../StateProvider/contexts";
import { Draggable } from "shared/ui";


export interface MenuProps {
}


const Menu: FC<MenuProps> = memo(
    () => {
        const {
            restart,
            time,
            setTime,
            gameState: { status, minesMap }
        } = useContext(menuContext);
        
        return (
            <Draggable
                className={styles.root}
            >
                <div>
                    {minesMap.filter(item => item.state === 'marked').length}/9
                </div>
                <Stopwatch
                    time={time}
                    incrementTime={() => setTime(prev => prev + 1)}
                    isActive={status === 'play'}
                    className={styles.stopwatch}
                />
                <button
                    className={styles.restart}
                    onClick={restart}
                >
                    restart
                </button>
            </Draggable >
        );
    }
);


export default Menu;