import { FC } from "react";
import styles from './LoginPage.module.scss';
import LoginForm from "features/forms/LoginForm";


export interface LoginPageProps {

}


const LoginPage: FC<LoginPageProps> = ({ }) => {
    return (
        <LoginForm 
            className={styles.form}
        />
    );
}


export default LoginPage;