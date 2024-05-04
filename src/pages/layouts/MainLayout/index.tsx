import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import styles from './MainLayout.module.scss';

import { Background } from "shared/ui";
import Header from "widgets/Header";
import Loader from "shared/ui/Loader";
import Modal from "features/Modal";


const MainLayout = () => {
    return (
        <>
            <Modal />
            <Background className={styles.bg} />
            <Header className={styles.header} />
            <main className={styles.main}>
                <Suspense fallback={
                    <Loader className={styles.loader} />
                }>
                    <Outlet />
                </Suspense>
            </main>
            {/* <footer className={styles.footer}>
            
            </footer> */}
        </>
    );
}


export default MainLayout;