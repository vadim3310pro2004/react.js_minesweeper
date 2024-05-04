import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ComponentPropsWithoutRef, FC } from "react";

import { FormControl } from "shared/ui/";
import { Button } from "shared/ui/";

import { loginSchema } from "shared/utils/validators";
import { LoginRequest } from "shared/models";
import { login } from "entities/user";
import { useAppDispatch } from "shared/hooks";
import { updateUserData } from "entities/user/store/account.slice";
import { useNavigate } from "react-router-dom";
import BaseAuthForm from "../BaseAuthForm";
import { AxiosError } from "axios";
import useModal from "entities/window/hooks/useModal";
import apiErrorFormatter from "shared/utils/apiErrorFormatter";


export interface LoginFormProps extends ComponentPropsWithoutRef<'form'> { }


const Login: FC<LoginFormProps> = ({ className }) => {
    const dispatch = useAppDispatch();
    const openModal = useModal();
    const navigate = useNavigate();
    const { 
        handleSubmit, 
        register, 
        reset, 
        formState: { errors, isValid } 
    } = useForm<LoginRequest>({
        mode: "onChange",
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const submit: SubmitHandler<LoginRequest> = async (data) => {
        try {
            reset();

            await login(data);
            dispatch(updateUserData([]));
            navigate('/profile/');
        } catch (error: AxiosError | any) {
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
                <Button component="a" to="/resend-email-confirmation/">activate email</Button>,
                <Button component="a" to="/registration/">sign-up</Button>,
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
                error={errors.password?.message}
                message={"Введіть password"}
                inp={{
                    ...register("password"),
                    type:"password",
                    placeholder: "password",
                }}
            />
        </BaseAuthForm>
    );
}


export default Login;