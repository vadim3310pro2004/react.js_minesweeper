import { Reducer } from "react";


export type StopwatchPayload = number | ((prev: number) => number);

export type StopwatchReducer = Reducer<number, {
    type: 'SET_TIME';
    payload: StopwatchPayload;
}>;


const stopwatchReducer: StopwatchReducer = (state, { payload, type }) => {
    switch (type) {
        case 'SET_TIME':
            if (typeof payload === 'number') {
                state = payload;
                break;
            }

            state = payload(state);
            break;
    }
    
    return JSON.parse(JSON.stringify(state));
}


export default stopwatchReducer;