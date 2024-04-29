import { MinesweeperState } from "../utils";


export interface ClickAction {
    type: 'OPEN' | 'TOGGLE_MARK';
    payload: number;
}

export interface RestartAction {
    type: 'RESTART';
}

export interface SetStatusAction {
    type: 'SET_STATUS';
    payload: MinesweeperState['status'];
}

export interface SetTimeAction {
    type: 'SET_TIME';
    payload: number | ((prev: number) => number);
}
