import { FC } from "react";
import styles from './PlayerCard.module.scss';
import { timeFormaterMMSS } from "shared/utils/timeFormators";


export interface PlayerCardProps {
    totalGames: number;
    topFiveScores: number[];
    userName: string
};


const PlayerCard: FC<PlayerCardProps> = ({ totalGames, topFiveScores, userName }) => (
    <table className={styles.playerCard}>
        <caption>
            {userName}
        </caption>
        <tbody>
            <tr>
                <th>
                    total games
                </th>
                <td>
                    {totalGames}
                </td>
            </tr>
            <tr>
                <th>
                    top five scores
                </th>
                <td>
                    <ol>
                        {topFiveScores.map((item, index) => (
                            <li key={index}>
                                {timeFormaterMMSS(item)}
                            </li>
                        ))}
                    </ol>
                </td>
            </tr>
        </tbody>
    </table>
)



export default PlayerCard;