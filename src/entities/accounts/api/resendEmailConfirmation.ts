import { RESEND_EMAIL_CONFIRMATION_PATH, API_DOMAIN } from "shared/configs/urls.config";
import { ResendEmailConfirmationRequest } from "./accounts.models";
import { INSTANCE_WITH_AUTH } from "shared/configs/api.config";


const resendEmailConfirmation = (
    {
        email
    }: ResendEmailConfirmationRequest
) => {
    const url = API_DOMAIN + RESEND_EMAIL_CONFIRMATION_PATH;

    return (
        INSTANCE_WITH_AUTH.post(
            url,
            {
                email
            }
        )
    );
};


export default resendEmailConfirmation;