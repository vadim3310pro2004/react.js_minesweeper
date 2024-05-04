import { useQuery } from "@tanstack/react-query";
import { fetchPlayers } from "../api/getPlayers.api";
import sortedObject from "shared/utils/sortedObject";


const usePlayersList = (
    filters: Record<string, any> = {}, 
    anotherUrl?: string
) => {
    return useQuery({
        queryKey: ['PLAYERS_LIST', anotherUrl, JSON.stringify(sortedObject(filters))],
        queryFn: () => fetchPlayers(filters, anotherUrl),
    });
};


export default usePlayersList;