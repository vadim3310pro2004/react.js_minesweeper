
import * as yup from "yup";


export const emailValidator = 
    yup.string()
    .max(254, "не більше 32 символів")
    .email("не коректний email")
    .required("це поле обов'язкове");


export const nameValidator = 
    yup.string()
    .min(2, "не менше 2 символів")
    .max(32, "не більше 32 символів")
    .required("це поле обов'язкове")
    .matches(/^[a-zA-Z0-9А-Яа-я_іїє]+$/, "тільки циври, літери та нижнє підкреслення");


export const passwordValidator =
    yup.string()
    .min(8, "не менше 8 символів")
    .max(32, "не більше 32 символів")
    .required("це поле обов'язкове")
    .matches(/^[0-9A-Za-z]+$/, "тільки циври та латинські літери")
    .matches(/(?=.*[a-z])(?=.*[A-Z])/, "має містити великі та малі літери")
    .matches(/(?=.*[0-9])/, "має містити числа");


export const confirmPasswordValidator =
    passwordValidator.oneOf([yup.ref('password')], "паролі не збігаються");


export const registrationSchema = yup.object().shape({
    email: emailValidator,
    name: nameValidator,
    password: passwordValidator,
    confirmPassword: confirmPasswordValidator,
});


export const loginSchema = yup.object().shape({
    email: emailValidator,
    password: passwordValidator,
});