import { ComponentPropsWithoutRef, FC } from "react";
import clsx from "clsx";
import styles from './Header.module.scss';
// import Menu from "./components/Menu";
import ThemeToggle from "./components/Menu/ThemeToggle";
import ProfileButton from "./components/ProfileButon";
import { useAppSelector } from "shared/hooks";
import Navigation from "./components/Navigation";


export interface HeaderProps extends ComponentPropsWithoutRef<'header'> { }


const Header: FC<HeaderProps> = ({ className, children, ...props }) => {
    const classes = clsx(
        className,
        styles.root,
    );

    const user = useAppSelector(state => state.accounts.user);
    
    return (
        <header className={classes} {...props}>

            <span className={styles.toolbar}>
               <Navigation />
            </span>
            
            <span className={styles.toolbar}>
                <ProfileButton isAutentificated={user.isAuthorized || false} />
                <ThemeToggle />
                {/* <Menu /> */}
            </span>
            
        </header>
    );
}


export default Header;