import { 
    ME_MENESWEEPER_DETAIL_PATH, 
    API_DOMAIN 
} from 'shared/configs/urls.config';

import { getStatsResponse } from './models';

import { INSTANCE_WITH_AUTH } from 'shared/configs/api.config';


const fetchMyStats = async (): Promise<getStatsResponse> => {
    const url = API_DOMAIN + ME_MENESWEEPER_DETAIL_PATH;
    
    return (await INSTANCE_WITH_AUTH.get<getStatsResponse>(url)).data;
};


export default fetchMyStats;