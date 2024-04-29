import { FC } from "react";
import styles from './Minesweeper.module.scss';
import clsx from "clsx";
import StateProvider from "./StateProvider/";
import MinesField from "./components/MinesField";
import Menu from "./components/Menu";


export interface GameProps {
    className?: string,
}


const Game: FC<GameProps> = ({ className }) => {
    const classes = clsx(
        className,
        styles.root
    );

    return (
        <StateProvider>
            <Menu />
            <MinesField className={classes} />
        </StateProvider>
    );
};


export default Game;