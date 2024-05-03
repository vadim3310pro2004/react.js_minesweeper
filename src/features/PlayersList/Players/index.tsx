import { FC } from "react";

import styles from './Players.module.scss';
import { getPlayerResponse } from "entities/minesweeper/api/models";

import Loader from "shared/ui/Loader";
import PlayerCard from "./PlayerCard";


export type PlayersProps = {
    players: getPlayerResponse[];
    isLoading: false; 
} | {
    isLoading: true; 
    players: any;
};


const Players: FC<PlayersProps> = ({ isLoading, players }) => {
    if (isLoading) {
        return (
            <div className={styles.players} >
                {[1, 2, 3, 4, 5].map(i => (
                    <Loader key={i}
                        className={styles.loader}
                    />
                ))}
        </div>
        );
    }

    return (
        <div className={styles.players} >
            {players.map(item => (
                <PlayerCard
                    key={item.user}
                    userName={item.user_name}
                    topFiveScores={item.top_5_scores}
                    totalGames={item.total_games}
                    averangeResoult={item.averange_resoult}
                />
            ))}
        </div>
    );
};


export default Players;