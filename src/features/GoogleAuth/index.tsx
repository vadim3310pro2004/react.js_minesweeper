import { FC } from "react";
import { 
    GoogleOAuthProvider,
} from "@react-oauth/google";

import { GOOGLE_OAUTH2_CLIENT_ID } from "shared/configs/oauth2.config";

import GoogleAuthButton, { GoogleAuthButtonProps } from "./GoogleAuthButton";


const GoogleAuth: FC<GoogleAuthButtonProps> = (props) => {
    return (
        <GoogleOAuthProvider
            clientId={GOOGLE_OAUTH2_CLIENT_ID}
        >
            <GoogleAuthButton {...props} />
        </GoogleOAuthProvider>
    );
};


export default GoogleAuth;
