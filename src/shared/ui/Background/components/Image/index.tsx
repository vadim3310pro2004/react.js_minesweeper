import clsx from "clsx";
import { ComponentPropsWithoutRef, FC } from "react";
import styles from './Image.module.scss';
import img from 'shared/assets/angryFloppa.gif'

export interface ImageProps extends ComponentPropsWithoutRef<'img'> {

}


const Image: FC<ImageProps> = ({ className }) => {
    const classes = clsx(
        className,
        styles.root,
    );

    return (
        <img
            className={classes}
            src={img}
            alt="background image cat clown"
        />
    );
}


export default Image;