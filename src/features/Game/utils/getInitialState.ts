import getMinesMap, { Cell } from "./createMinesMap"


export interface MinesweeperState {
    status: "first go" | "play" | "lose" | "victory",
    minesMap: Cell[],
}


const getInitialState = (): MinesweeperState => {
    return {
        status: 'first go',
        minesMap: getMinesMap(),
    }
}


export default getInitialState;