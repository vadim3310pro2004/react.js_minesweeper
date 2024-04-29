
import { MinesweeperState, lose } from ".";

type OpenCeilWithCellsAroundWithoutMines = (
    state: MinesweeperState,
    cell: number
) => MinesweeperState;


const openCellWithCellsAroundWithoutMines: OpenCeilWithCellsAroundWithoutMines = 
    (state, cell) => {
        if (state.minesMap[cell].isMine) {
            if (state.minesMap[cell].state === 'marked') {

            }
            else {
                state = lose(state);
            }
        }

        else if (
            state.minesMap[cell].minesAround.length === 0 && 
            state.minesMap[cell].state === "default"
        ) {
            state.minesMap[cell].cellsAround.forEach(element => {
                state.minesMap[cell].state = "open";
                state = openCellWithCellsAroundWithoutMines(state, element);
            });
        }

        else if (!state.minesMap[cell].isMine) {
            state.minesMap[cell].state = "open";
        }

        return state;
    };


export default openCellWithCellsAroundWithoutMines;