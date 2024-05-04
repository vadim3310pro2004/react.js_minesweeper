import { ComponentPropsWithoutRef, FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button, FormControl } from "shared/ui";
import BaseAuthForm from "../BaseAuthForm";

import { emailValidator } from "shared/utils/validators";
import resendEmailConfirmation from "entities/user/api/resendEmailConfirmation";
import { AxiosError } from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useModal from "entities/window/hooks/useModal";
import apiErrorFormatter from "shared/utils/apiErrorFormatter";


export interface ResendEmailConfirmationFormProps extends ComponentPropsWithoutRef<'div'> { }


export interface ResendEmailConfirmationFields {
    email: string;
}

export const schema = yup.object().shape({
    email: emailValidator
});


const ResendEmailConfirmationForm: FC<ResendEmailConfirmationFormProps> = ({
    className 
}) => {
    const openModal = useModal();
    const { 
        handleSubmit, 
        register, 
        reset, 
        formState: { errors, isValid } 
    } = useForm<ResendEmailConfirmationFields>({
        mode: "onChange",
        resolver: yupResolver(schema),
        defaultValues: {
            email: "",
        },
    });

    const submit: SubmitHandler<ResendEmailConfirmationFields> = async (data) => {
        reset()
        try {
            await resendEmailConfirmation(data)
            openModal('Надіслано нове письмо для підтвердження пошти');
        }
        catch (error: AxiosError | any) {
            openModal(
                apiErrorFormatter(
                    error.response?.data
                )
            );
        }
    }

    return (
        <BaseAuthForm
            className={className}
            onSubmit={handleSubmit(submit)}
            buttons={[
                <Button component="a" to="/login/">sign-in</Button>,
                <Button component="a" to="/registration/">sign-up</Button>,
                <Button disabled={!isValid} variant="success">send</Button>,
            ]}
        >
            <FormControl
                error={errors.email?.message}
                message={"Введіть email"}
                inp={{
                    ...register("email"),
                    type: "email",
                    placeholder: "email",
                }}
            />
        </BaseAuthForm>
    );
};


export default ResendEmailConfirmationForm;