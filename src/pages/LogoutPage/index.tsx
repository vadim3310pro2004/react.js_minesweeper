import { removeAccessToken } from "entities/user/api/api.services";
import { logout } from "entities/user/store/account.slice";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "shared/hooks";


const LogoutPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(logout());
        navigate('/');
        removeAccessToken();
    }, []);

    return null;
};



export default LogoutPage;