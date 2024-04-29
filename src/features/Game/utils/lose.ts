import { MinesweeperState } from ".";


export type Lose = (
    state: MinesweeperState
) => MinesweeperState;


const lose: Lose = (state) => {
    state.status = 'lose';
    state.minesMap = state.minesMap.map(
        item => ({
            ...item,
            state: 'open',
        })
    );
    return state;
};


export default lose;