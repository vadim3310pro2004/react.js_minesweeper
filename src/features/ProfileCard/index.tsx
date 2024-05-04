import { ComponentPropsWithoutRef, FC } from 'react';
import { useAppSelector } from 'shared/hooks';
import useMyStats from 'entities/player/hooks/useMyStats';

import styles from './ProfileCard.module.scss';
import clsx from 'clsx';

import profileIcon from 'shared/assets/profile.svg';
import Loader from 'shared/ui/Loader';
import InfoTable from './InfoTable';


export interface ProfileProps extends ComponentPropsWithoutRef<'div'> {
}


const Profile: FC<ProfileProps> = ({ className }) => {
    const classes = clsx(
        className,
        styles.root
    );
    
    const user = useAppSelector(state => state.accounts.user);
    const player = useMyStats();

    if (player.isLoading) {        
        return (
            <Loader
                className={styles.loader}
            />
        );
    }

    if (user.error || player.error) {        
        return (
            <>unauthorized</>
        );
    }

    return (
        <div className={classes}>
            <img src={profileIcon} alt="profile image" />

            <InfoTable 
                totalGames={player.data?.total_games}
                topFiveScores={player.data?.top_5_scores}
                name={user.name}
                successGames={player.data?.success_games}
                averangeResoult={player.data?.averange_resoult}
            />
        </div>
    );
};


export default Profile;