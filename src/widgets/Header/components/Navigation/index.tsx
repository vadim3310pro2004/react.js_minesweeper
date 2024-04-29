import { Button } from "shared/ui";
import DropMenu from "shared/ui/DropMenu";
import styles from './Navigation.module.scss';


const Navigation = () => {
    return (
        <DropMenu
            icon={
                <Button
                    style={{ width: '110px' }}
                    className={styles.toggle_button}
                >
                    navigation
                </Button>
            }
        >
            <Button component='a' to='minesweeper'>minesweeper</Button>
            <Button component='a' to='top-players'>top playes</Button>
        </DropMenu>
    );
};


export default Navigation;