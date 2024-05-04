import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "shared/hooks";

import styles from './ProfileButton.module.scss';
import { logout } from "entities/user/store/account.slice";
import { removeAccessToken } from "entities/user/api/api.services";

import { Button } from "shared/ui";
import DropMenu from "shared/ui/DropMenu";
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import useModal from "entities/window/hooks/useModal";
import Confirm from "./components/Confirm";
import { setModalIsOpen } from "entities/window/store/window.slice";


export interface ProfileButtonProps {
    isAutentificated: boolean;
}


const ProfileButton: FC<ProfileButtonProps> = ({ isAutentificated }) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const openModal = useModal();

    const handleLogout = () => {
        openModal(<Confirm 
            onSuccess={() => {
                dispatch(logout());
                navigate('/');
                removeAccessToken();
                dispatch(setModalIsOpen(false))
            }} 
            onReject={() => {
                dispatch(setModalIsOpen(false))
            }}
        />)
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
                activate email
            </Button>
        </DropMenu>
    );
}


export default ProfileButton;