import { FC, memo } from "react";
import { Button } from "shared/ui";
import styles from './Menu.module.scss';
import Nav from "./Nav";
import DropMenu from "shared/ui/DropMenu";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export interface MenuProps {

}


const Menu: FC<MenuProps> = memo(() => {
    
    return (
        <DropMenu
            icon={
                <Button
                    className={styles.button}
                >
                    <InfoOutlinedIcon  />
                </Button>
            }
        >
            <Nav />
        </DropMenu>
    );
});


export default Menu;