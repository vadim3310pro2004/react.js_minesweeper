import { ComponentPropsWithoutRef, FC } from "react";
import styles from './Background.module.scss';
import clsx from "clsx";
import Image from "./components/Image";
import Vawe from "./components/Vawe";
import getRandomColor from "shared/utils/getRandomColor";


export interface BackgroundProps extends ComponentPropsWithoutRef<'div'> {

}


const Background: FC<BackgroundProps> = ({ className, ...props }) => {
    const classes = clsx(
        styles.root,
        className,
    );
    
    return (
        <div className={classes} {...props}>
        
            <Image className={styles.image} />
        
            {[1, 2, 3].map(i => (
                <Vawe
                    key={i}
                    className={styles.vawe}
                    style={{
                        borderColor: `${getRandomColor()}`
                    }}
                />
            ))}
        
        </div>
    );
}


export default Background;