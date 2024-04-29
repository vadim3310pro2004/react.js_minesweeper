import { Link } from 'react-router-dom';
import styles from './StartPage.module.scss';
import { useAppSelector } from 'shared/hooks';


const StartPage = () => {
    const user = useAppSelector(store => store.accounts.user);

    return (
        <div className={styles.startPage}>
            <span className={styles.hi}>
                Hi
            </span>
            <div className={styles.buttons}>
                {
                    user.isAuthorized ?
                        <>
                            <Link
                                to='minesweeper'
                                className={styles.button}
                            >
                                minesweeper
                            </Link>
                            <Link
                                to='profile'
                                className={styles.button}
                            >
                                profile
                            </Link>
                        </>
                        :
                        <>
                            <Link
                                to='login'
                                className={styles.button}
                            >
                                login
                            </Link>
                            <Link
                                to='registration'
                                className={styles.button}
                            >
                                registration
                            </Link>
                        </>
                }
            </div>
        </div>
    );
};


export default StartPage;