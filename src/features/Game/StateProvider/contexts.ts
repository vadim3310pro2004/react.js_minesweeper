import { MinesweeperState } from "../utils";
import { createContext } from "react";

export interface GameContextProps {
    gameState: MinesweeperState;
    openCell: (payload: number) => void;
    toggleMarkerOnCell: (payload: number) => void;
    restart: () => void;
    setStatus: (status: MinesweeperState['status']) => void;
    error?: any;
}


export const gameContext = createContext<GameContextProps>({} as GameContextProps);


export interface MenuContextProps {
    time: number;
    setTime: (fn: number | ((prev: number) => number)) => void;
    gameState: MinesweeperState;
    restart: () => void;
}

export const menuContext = createContext<MenuContextProps>({} as MenuContextProps);