import { icons } from "../../../utils";
import type { Cell as ICell } from "../../../utils";
import { FC, MouseEventHandler } from "react";
import { Button } from "shared/ui";
import styles from './Cell.module.scss';
import clsx from "clsx";


export interface CellProps extends Omit<ICell, 'key'> {
    id: number;
    className?: string;
    openCell: (id: number) => void;
    toggleMarkerOnCell: (id: number) => void;
}


const Cell: FC<CellProps> = ({
    state,
    isMine,
    minesAround,
    id,
    openCell,
    toggleMarkerOnCell,
}) => {
    const handleContextMenu: MouseEventHandler = (event) => {
        event.preventDefault();
        toggleMarkerOnCell(id);
    };

    const classes = clsx(
        styles.root,
        state === "open" && (!isMine ? styles.success : styles.mine),
        state === "marked" && styles.marked,
    );
    
    return (
        <Button
            className={classes}
            onClick={() => {
                openCell(id);
            }}
            onContextMenu={handleContextMenu}
        >
            {
                state === 'marked' ? icons.mark
                    :
                    state === "open"
                    && (isMine ? icons.boomb : !!minesAround.length && minesAround.length)
            }
        </Button >
    );
}


export default Cell