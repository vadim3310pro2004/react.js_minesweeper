import { ReactNode } from "react";
import boombIcon from 'shared/assets/bomb.svg';
import AssistantPhotoTwoToneIcon from '@mui/icons-material/AssistantPhotoTwoTone';


export interface Icons extends Record<'boomb' | 'mark', ReactNode> { }


const icons: Icons = {
    boomb: <img src={boombIcon} />,
    mark: <AssistantPhotoTwoToneIcon 
        sx={{ 
            fill: 'black',
        }} 
    />,
}


export default icons;