import { ComponentPropsWithoutRef, FC, useMemo } from "react";
import styles from "./FormControl.module.scss";
import _uniqueId from 'lodash/uniqueId';
import Label from "./components/Label";


export interface LoginFormInputProps {
    error?: string;
    message?: string;
    inp: {
        name: string;
    } & ComponentPropsWithoutRef<'input'>;
}


const FormControl: FC<LoginFormInputProps> = ({ error, message, inp }) => {
    const id = useMemo(() => _uniqueId("FormInput-"), []);

    return (
        <div className={styles.formControl}>
            <Label htmlFor={id} className={styles.error}>
                {error}
            </Label>
            <input className={styles.input} id={id} {...inp} />
            <Label htmlFor={id} className={styles.message}>
                {message}
            </Label>
        </div>
    );
}


export default FormControl;