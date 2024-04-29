import { FC } from "react";

import styles from "./Paginator.module.scss";

import { Button } from "shared/ui";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export interface PaginatorProps {
    previos: {
        isDisabled: boolean;
        onClick: () => void;
    };
    next: {
        isDisabled: boolean;
        onClick: () => void;
    };
    pageNumber: number;
}


const Paginator: FC<PaginatorProps> = ({ previos, next, pageNumber }) => {
    return (
        <div className={styles.pagination}>
            <Button 
                onClick={previos.onClick}
                disabled={previos.isDisabled}
            >
                <ArrowBackIcon />
            </Button>
            <span className={styles.pageNumber}>
                {pageNumber}
            </span>
            <Button
                onClick={next.onClick}
                disabled={next.isDisabled}
            >
                <ArrowForwardIcon />
            </Button>
        </div>
    );
};


export default Paginator;