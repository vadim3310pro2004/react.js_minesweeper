import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "pages/layouts/MainLayout";
import OnlyFormLayout from "pages/layouts/OnlyFormLayout";

// import MinesweeperPage from "pages/MinesweeperPage";
// import LoginPage from "pages/LoginPage";
// import RegistrationPage from "pages/RegistrationPage";
// import PlayersListPage from "pages/PlayersListPage";
// import ProfilePage from "pages/ProfilePage";
// import ResendEmailConfirmationPage from "pages/ResendEmailConfirmationPage";
// import StartPage from "pages/StartPage";
const MinesweeperPage = lazy(() => import("pages/MinesweeperPage"))
const LoginPage = lazy(() => import("pages/LoginPage"))
const RegistrationPage = lazy(() => import("pages/RegistrationPage"))
const PlayersListPage = lazy(() => import("pages/PlayersListPage"))
const ProfilePage = lazy(() => import("pages/ProfilePage"))
const StartPage = lazy(() => import("pages/StartPage"))
const ResendEmailConfirmationPage = lazy(() => import("pages/ResendEmailConfirmationPage"))


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <StartPage />,
            },

            // auth-forms
            {
                path: '',
                element: <OnlyFormLayout />,
                children: [
                    {
                        path: 'login/',
                        element: <LoginPage />,
                    },
                    {
                        path: 'registration/',
                        element: <RegistrationPage />,
                    },
                    {
                        path: 'resend-email-confirmation/',
                        element: <ResendEmailConfirmationPage />,
                    },
                ]
            },

            {
                path: 'minesweeper/',
                element: <MinesweeperPage />,
            },
            {
                path: 'top-players/',
                element: <PlayersListPage />,
            },
            {
                path: 'profile/',
                element: <ProfilePage />,
            },
        ],
    },
]);


export default router;