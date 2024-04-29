import { ComponentPropsWithoutRef, FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { FormControl } from "shared/ui/";
import { Button } from "shared/ui/";
import BaseAuthForm from "../BaseAuthForm";

import { RegistrationRequest } from "entities/accounts/api/accounts.models";
import { registrate } from "entities/accounts";
import { yupResolver } from "@hookform/resolvers/yup";
import { registrationSchema } from "shared/utils/validators";
import { AxiosError } from "axios";


export interface LoginFormProps extends ComponentPropsWithoutRef<'form'> { }


const RegistrationForm : FC<LoginFormProps> = ({ className }) => {
    const { 
        handleSubmit, 
        register, 
        reset, 
        formState: { errors, isValid } 
    } = useForm<RegistrationRequest>({
            mode: "onChange",
            resolver: yupResolver(registrationSchema),
            defaultValues: {
                email: "",
                password: "",
                confirmPassword: "",
                name: "",
            },
        });

    const submit: SubmitHandler<RegistrationRequest> = async (data) => {
        try {
            reset();

            await registrate(data);

            alert("Підтвердіть пошту. На вашу пошту прийшло повідомлення з кнопкою 'Підтвердити пошту'")
        } catch (error: AxiosError | any) {
            alert(
                JSON.stringify(
                    (error as AxiosError).response?.data
                )
            );
        }
    }

    return (
        <BaseAuthForm
            className={className}
            onSubmit={handleSubmit(submit)}
            buttons={[
                <Button component="a" to="/resend-email-confirmation/">confirm email</Button>,
                <Button component="a" to="/login/">sign-in</Button>,
                <Button disabled={!isValid} variant="success">send</Button>,
            ]}
        >
            <FormControl
                error={errors.email?.message}
                message={"Введіть email"}
                inp={{
                    ...register("email"),
                    type:"email",
                    placeholder: "email",
                }}
            />
            <FormControl
                error={errors.name?.message}
                message={"Введіть ім'я"}
                inp={{
                    ...register("name"),
                    type:"text",
                    placeholder: "name",
                }}
            />
            <FormControl
                error={errors.password?.message}
                message={"Введіть password"}
                inp={{
                    ...register("password"),
                    type:"password",
                    placeholder: "password",
                }}
            />
            <FormControl
                error={errors.confirmPassword?.message}
                message={"Підтвердіть password"}
                inp={{
                    ...register("confirmPassword"),
                    type:"password",
                    placeholder: "confirm password",
                }}
            />
        </BaseAuthForm>
    );
}


export default RegistrationForm ;