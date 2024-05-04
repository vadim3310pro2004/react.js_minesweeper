import { 
    useGoogleLogin
} from "@react-oauth/google";
import { updateUserData } from "entities/user/store/account.slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "shared/hooks";

import loginByGoogleJwt from "entities/user/api/loginByGoogleJWT";
import styles from './GoogleAuthButton.module.scss';
import clsx from "clsx";

import { Button } from "shared/ui";
import { ComponentPropsWithoutRef, FC } from "react";
import GoogleLogoPixelSvg from "shared/assets/GoogleLogoPixel";
import useModal from "entities/window/hooks/useModal";


export interface GoogleAuthButtonProps extends ComponentPropsWithoutRef<'button'> { }


const GoogleAuthButton: FC<GoogleAuthButtonProps> = ({ className, ...props }) => {
    const openModal = useModal();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleSuccess = async ({ credential }: any) => {
        if (credential) {
            await loginByGoogleJwt({ token: credential });
            dispatch(updateUserData([]));
            navigate('/profile/');
        }
        else {
            openModal('error');
        }
    };

    const login = useGoogleLogin({
        onSuccess: (data) => {handleSuccess(data)},
    });
      

    return (
        <Button
            className={clsx(styles.googleAuthButton, className)}
            onClick={login}
            type="button"
            {...props}
        > 
            <GoogleLogoPixelSvg 
                className={styles.googleAuthButton__icon} 
            />
            <span 
                className={styles.googleAuthButton__text}
            >
                sign-in with google
            </span>
        </Button>
    );
};


export default GoogleAuthButton;
