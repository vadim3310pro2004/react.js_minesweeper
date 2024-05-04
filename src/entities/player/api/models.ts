

export interface sendNewVictoryRequest {
    time: number;
    id: number;
}


export interface sendNewVictoryResponse {
    best_time: number;
    total_games: number;
}


export interface sendNewLoseRequest {
    id: number;
}


export interface sendNewLoseResponse {
    best_time: number;
    total_games: number;
}


export interface getPlayerResponse {
    total_games: number;
    top_5_scores: number[];
    user: number;
    user_name: string;
    success_games: number;
    averange_resoult: number;
}

export interface FetchListPlayerResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: getPlayerResponse[];
}

export interface getStatsRequest {
    id: number;
}


export interface getStatsResponse {
    total_games: number;
    top_5_scores: number[];
    user: number;
    user_name: string;
    success_games: number;
    averange_resoult: string;
}