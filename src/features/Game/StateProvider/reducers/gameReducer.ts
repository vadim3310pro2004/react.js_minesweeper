import { MinesweeperState, getInitialState, lose, openWithCellsAround } from "../../utils";
import { Reducer } from "react";
import openCellWithCellsAroundWithoutMines from "../../utils/openCellWithCellsAroundWithoutMines";


export type MinesweeperReducer = Reducer<MinesweeperState, {
    type: 'OPEN' | 'TOGGLE_MARK';
    payload: number;
} | {
    type: 'RESTART';
} | {
    type: 'SET_STATUS';
    payload: MinesweeperState['status'];
}>;


const minesweeperReducer: MinesweeperReducer = (state, action) => {
    switch (action.type) {
        case 'OPEN':
            if (state.minesMap[action.payload].state === 'default') {
                if (state.status === 'first go') {
                    while (state.minesMap[action.payload].isMine) {
                        state.minesMap = getInitialState().minesMap;
                    }
                    state.status = 'play';
                }

                if (state.minesMap[action.payload].isMine) {
                    state = lose(state);
                }

                else {
                    state.minesMap = openWithCellsAround(state.minesMap, action.payload);
                }
            }
            else if (state.minesMap[action.payload].state === 'open') {
                if (
                    state.minesMap[action.payload].minesAround.length
                    ===
                    state.minesMap[action.payload].cellsAround.filter(
                        element => state.minesMap[element].state === 'marked'
                    ).length
                ) {
                    state.minesMap[action.payload].cellsAround.forEach(element => {
                        state = openCellWithCellsAroundWithoutMines(state, element);
                    });
                }
            }
            if (state.status !== 'lose') {
                if (state.minesMap.filter(i => i.state === "open").length === 72) {
                    state.status = 'victory';
                }
            }
            break;

        case 'TOGGLE_MARK':
            switch (state.minesMap[action.payload].state) {
                case 'marked':
                    state.minesMap[action.payload].state = 'default';
                    break;
                case 'default':
                    state.minesMap[action.payload].state = 'marked';
                    break;
            }
            break;

        case 'RESTART':
            state = getInitialState();
            break;

        case 'SET_STATUS':
            state.status = action.payload;
            break;

        default:
            throw new Error();
    }

    return JSON.parse(JSON.stringify(state));
};


export default minesweeperReducer;