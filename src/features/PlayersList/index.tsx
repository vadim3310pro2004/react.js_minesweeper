import { ComponentPropsWithoutRef, FC, useState } from 'react';
import styles from './PlayersList.module.scss';
import clsx from 'clsx';
import usePlayersList from 'entities/minesweeper/hooks/usePlayersList';
import Paginator from './Paginator';
import Players from './Players';


export interface PlayersListProps extends ComponentPropsWithoutRef<'div'> {

}


const PlayersList: FC<PlayersListProps> = ({ className, ...props }) => {
    const classes = clsx(
        styles.root,
        className
    );
    
    const [page, setPage] = useState<{
        url: string | null;
        number: number;
    }>({
        url: null,
        number: 1
    });

    const { error, isLoading, data } = usePlayersList({
        top_players: '_',
        limit: 6 
    }, page.url as string | undefined);

    if (error) {
        return (
            <span style={{ color: 'red' }}>Error</span>
        );
    }

    return (
        <div className={classes} {...props}>
            <Paginator
                pageNumber={page.number}
                previos={{
                    onClick: () => setPage({ 
                        number: page.number - 1, 
                        url: data?.previous as string 
                    }),
                    isDisabled: !data?.previous,
                }}
                next={{
                    onClick: () => setPage({ 
                        number: page.number + 1, 
                        url: data?.next as string 
                    }),
                    isDisabled: !data?.next,
                }}
            />
            <Players 
                players={data?.results as any}
                isLoading={isLoading}
            />
        </div>
    );
};


export default PlayersList;