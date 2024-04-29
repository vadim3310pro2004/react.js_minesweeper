import { Outlet } from "react-router-dom";
import styles from './OnlyFormLayout.module.scss';


const OnlyFormLayout = () => {
    return (
        <span className={styles.formWrapper}>
            <Outlet />
        </span>
    );
};


export default OnlyFormLayout;