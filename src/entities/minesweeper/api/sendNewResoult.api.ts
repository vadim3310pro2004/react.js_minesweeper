
import { 
    MINESWEEPER_CRUD_PATH,
    API_DOMAIN, 
} from "shared/configs/urls.config";

import { 
    sendNewLoseRequest,
    sendNewLoseResponse,
    sendNewVictoryRequest, 
    sendNewVictoryResponse 
} from "./models";

import { INSTANCE_WITH_AUTH } from "shared/configs/api.config";


export const sendNewVictory = async (
    { time, id }: sendNewVictoryRequest
): Promise<sendNewVictoryResponse> => {
    const url = `${API_DOMAIN}${MINESWEEPER_CRUD_PATH}${id}/`;
    const data = {
        time,
    };

    try {
        return await INSTANCE_WITH_AUTH.patch(url, data);
    } catch (e) {
        throw e;
    }
};


export const sendNewLose = async (
    { id }: sendNewLoseRequest
): Promise<sendNewLoseResponse> => {
    const url = `${API_DOMAIN}${MINESWEEPER_CRUD_PATH}${id}/`;
    const data = {
    };

    try {
        return await INSTANCE_WITH_AUTH.patch(url, data);
    } catch (e) {
        throw e;
    }
};