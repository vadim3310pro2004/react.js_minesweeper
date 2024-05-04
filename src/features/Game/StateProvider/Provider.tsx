import { FC, ReactNode, useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { MinesweeperState, getInitialState } from "../utils";
import minesweeperReducer from "./reducers/gameReducer";
import stopwatchReducer, { StopwatchPayload } from "./reducers/timeReducer";
import { gameContext, menuContext } from "./contexts";
import { sendNewLose, sendNewVictory } from "entities/player/api/sendNewResoult.api";
import { useAppSelector } from "shared/hooks";


export interface ProviderProps {
    children: ReactNode;
}



const Provider: FC<ProviderProps> = ({ children }) => {
    const [gameState, gameDispatch] = useReducer(minesweeperReducer, getInitialState());
    const [time, timeDispatch] = useReducer(stopwatchReducer, 0);
    const [error, setError] = useState<any>(null);
    const user = useAppSelector(state => state.accounts.user);

    useEffect(
        () => {
            if (!user.error) {
                try {
                    if (gameState.status === 'lose') {
                        user.id && sendNewLose({ id: user.id });
                    }
                    else if (gameState.status === 'victory') {
                        user.id && sendNewVictory({
                            id: user.id,
                            time,
                        });
                    }
                }
                catch (e) {
                    setError(e);
                }
            }
            else {
                setError(user.error);
            }
        }, [gameState.status]
    );

    const setTime = useCallback(
        (payload: StopwatchPayload) => {
            timeDispatch({
                type: 'SET_TIME',
                payload,
            });
        }, []
    );

    const openCell = useCallback(
        (payload: number) => {
            gameDispatch({
                type: 'OPEN',
                payload
            })
        }, []
    );

    const toggleMarkerOnCell = useCallback(
        (payload: number) => {
            gameDispatch({
                type: 'TOGGLE_MARK',
                payload
            });
        }, []
    );

    const restart = useCallback(
        () => {
            timeDispatch({
                type: 'SET_TIME',
                payload: 0
            });
            gameDispatch({
                type: 'RESTART',
            });
        }, []
    );

    const setStatus = useCallback(
        (status: MinesweeperState['status']) => {
            gameDispatch({
                type: 'SET_STATUS',
                payload: status,
            });
        }, []
    );

    return (
        <gameContext.Provider
            value={{
                gameState,
                setStatus,
                restart,
                openCell,
                toggleMarkerOnCell,
                error
            }}
        >
            {
                useMemo(
                    () => (
                        <menuContext.Provider
                            value={{
                                time,
                                setTime,
                                restart,
                                gameState,
                            }}
                        >
                            {children}
                        </menuContext.Provider>
                    ), [children, time, setTime, gameState]
                )
            }
        </gameContext.Provider>
    );
}; 


export default Provider;


