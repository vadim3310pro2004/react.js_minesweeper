import { MINESWEEPER_CRUD_PATH, API_DOMAIN } from "shared/configs/urls.config";
import { getStatsRequest, getStatsResponse } from "./models";
import { INSTANCE_WITH_AUTH } from "shared/configs/api.config";


export const getStats = async (
    { id }: getStatsRequest
): Promise<getStatsResponse> => {
    const url = `${API_DOMAIN}${MINESWEEPER_CRUD_PATH}${id}/`;

    try {
        return (await INSTANCE_WITH_AUTH.get<getStatsResponse>(url)).data;
    } catch (e) {
        throw e;
    }
};