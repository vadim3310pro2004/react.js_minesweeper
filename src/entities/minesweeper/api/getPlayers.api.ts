import { MINESWEEPER_CRUD_PATH, API_DOMAIN } from "shared/configs/urls.config";
import { FetchListPlayerResponse } from "./models";
import { INSTANCE_WITH_AUTH } from "shared/configs/api.config";


export const fetchPlayers = async (
    filters: Record<string, any> = {},
    anotherUrl?: string
) => {
    let url: string;

    if (anotherUrl) {
        url = anotherUrl;
    }
    else {
        url = API_DOMAIN + MINESWEEPER_CRUD_PATH + '?';
        for (let i in filters) {
            url += `${i}=${filters[i]}&`;
        }
    }
    
    try {
        return (await INSTANCE_WITH_AUTH.get<FetchListPlayerResponse>(url)).data;
    }
    catch (e) {
        throw e;
    }
}