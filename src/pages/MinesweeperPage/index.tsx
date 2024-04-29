import { FC } from "react";
import styles from './MinesweeperPage.module.scss';
import Minesweeper from "features/Game";


export interface MinesweeperPageProps {

}


const MinesweeperPage: FC<MinesweeperPageProps> = () => {
    
    return (
        <Minesweeper 
            className={styles.root} 
        />
    );
}


export default MinesweeperPage;