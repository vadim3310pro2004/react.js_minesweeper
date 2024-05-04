import { RouterProvider, RouterProviderProps } from "react-router-dom";
import router from "./router";
import { FC, } from "react";
import { updateUserData } from "entities/user/store/account.slice";
import { useAppDispatch } from "shared/hooks";


export interface AppRouterProviderProps extends Omit<RouterProviderProps, "router"> { }


export const AppRouterProvider: FC<AppRouterProviderProps> = (props) => {
    // fetch info about user into redux
    const dispatch = useAppDispatch();
    dispatch(
        updateUserData([])
    );

    return (
        <RouterProvider
            router={router}
            {...props}
        />
    );
};