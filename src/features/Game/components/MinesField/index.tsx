import { FC, useContext } from "react";
import clsx from "clsx";
import Cell from "./Cell";
import styles from './Body.module.scss';
import Alert from "./Alert";
import { gameContext } from "../../StateProvider/contexts";


export interface GameProps {
    className?: string;
}


const Game: FC<GameProps> = ({ className }) => {
    const { 
        gameState, 
        openCell,
        toggleMarkerOnCell,
        restart,
        error
    } = useContext(gameContext);
    
    const classes = clsx(
        className,
        styles.minesCanvas,
    );

    return (
        <div 
            className={classes} 
            onContextMenu={(e) => e.preventDefault()}
        >
            {gameState.minesMap.map((cell) =>
                <Cell
                    openCell={openCell}
                    toggleMarkerOnCell = {toggleMarkerOnCell}
                    id={cell.key}
                    {...cell}
                />
            )}
            <Alert 
                error={error}
                restart={restart} 
                gameState={gameState} 
            />
        </div>
    );
}


export default Game;