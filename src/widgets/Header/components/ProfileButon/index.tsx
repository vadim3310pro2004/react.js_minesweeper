import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "shared/hooks";

import styles from './ProfileButton.module.scss';
import { logout } from "entities/accounts/store/account.slice";
import { removeAccessToken } from "entities/accounts/api/api.services";

import { Button } from "shared/ui";
import DropMenu from "shared/ui/DropMenu";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';


export interface ProfileButtonProps {
    isAutentificated: boolean;
}


const ProfileButton: FC<ProfileButtonProps> = ({ isAutentificated }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    const handleLogout = () => {
        if (
            confirm('you sure wont to logout ?')
        ) {
            dispatch(logout());
            navigate('/');
            removeAccessToken();
        }
    };

    if (isAutentificated) {
        return (
            <DropMenu
                className={ styles.root }
                icon={
                    <Button
                        className={styles.iconButton}
                    >
                        <PersonOutlinedIcon fontSize="large" />
                    </Button>
                }
            >
                <Button
                    className={styles.nowrap}
                    component='a'
                    to='profile'
                >
                    profile
                </Button>
                <Button
                    className={styles.nowrap}
                    onClick={handleLogout}
                >
                    logout
                </Button>
            </DropMenu>
        );
    }

    return (
        <DropMenu
            className={ styles.root }
            icon={
                <Button
                    className={styles.iconButton}
                >
                    <PersonOutlinedIcon fontSize="large" />
                </Button>
            }
        >

            <Button
                component='a'
                to='login'
                className={styles.nowrap}
            >
                sign-in
            </Button>
            <Button
                className={styles.nowrap}
                component='a'
                to='registration'
            >
                sign-up
            </Button>
            <Button
                className={styles.nowrap}
                component='a'
                to='resend-email-confirmation'
            >
                resend email confirmation
            </Button>
        </DropMenu>
    );
}


export default ProfileButton;