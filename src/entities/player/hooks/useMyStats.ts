import { useQuery } from "@tanstack/react-query"
import fetchMyStats from "../api/fetchMyStats";


const useMyStats = () => {
    return useQuery({
        queryFn: fetchMyStats,
        queryKey: ['MY_STATS'],
    });
};


export default useMyStats;