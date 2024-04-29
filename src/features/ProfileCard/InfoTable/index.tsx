import { FC } from 'react';
import styles from './InfoTable.module.scss';
import { timeFormaterMMSS } from 'shared/utils/timeFormators';


export interface InfoTableProps {
    name?: string;
    totalGames?: number;
    topFiveScores?: number[];
    averangeResoult?: string;
    successGames?: number;
}


const InfoTable: FC<InfoTableProps> = ({ 
    name, 
    topFiveScores, 
    totalGames,
    averangeResoult,
    successGames,
}) => {
    return (
        <table className={styles.table}>
            <caption>
                {name}
            </caption>
            <tbody>
                <tr>
                    <th scope='row'>
                        total games
                    </th>
                    <td scope='row'>
                        {totalGames}
                    </td>
                </tr>
                <tr>
                    <th scope='row'>
                        success games
                    </th>
                    <td scope='row'>
                        {successGames}
                    </td>
                </tr>
                <tr>
                    <th scope='row'>
                        averange time
                    </th>
                    <td scope='row'>
                        {averangeResoult ? averangeResoult :<>-</>}
                    </td>
                </tr>
                <tr>
                    <th scope='row'>
                        best time
                    </th>
                    <td scope='row'>
                        {topFiveScores && topFiveScores[0] ?
                            <ol className={styles.scoresList}>
                                {topFiveScores && topFiveScores.map(
                                    (item, index) => (
                                        <li className={styles.scoresItem} key={index}>
                                            {timeFormaterMMSS(item)}
                                        </li>
                                    )
                                )}
                            </ol>
                            :
                            <>-</>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    );
};


export default InfoTable;