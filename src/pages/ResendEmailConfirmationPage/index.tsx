import ResendEmailConfirmationForm from 'features/forms/ResendEmailConfirmationForm';
import styles from './ResendEmailConfirmationPage.module.scss';


const ResendEmailConfirmationPage = () => {
    return (
        <ResendEmailConfirmationForm
            className={styles.form}
        />
    );
};


export default ResendEmailConfirmationPage;