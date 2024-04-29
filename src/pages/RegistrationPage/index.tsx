import { FC } from "react";
import styles from './RegistrationPage.module.scss';
import RegistrationForm from "features/forms/RegistrationForm";


export interface LoginPageProps {

}


const RegistrationPage: FC<LoginPageProps> = ({}) => {
    return (
        <RegistrationForm 
            className={styles.form}
        />
    );
}


export default RegistrationPage;