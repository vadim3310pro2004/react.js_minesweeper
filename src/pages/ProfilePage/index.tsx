import { FC } from "react";
import ProfileCard from "features/ProfileCard";


export interface ProflePageProps {

}


const ProfilePage: FC<ProflePageProps> = () => {
    
    return (
        <div>
            <ProfileCard />
        </div>
    );
};


export default ProfilePage;