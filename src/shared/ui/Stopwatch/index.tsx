import { FC, memo, useEffect, useRef } from "react";
import { timeFormaterMMSS } from "shared/utils/timeFormators";


export interface StopwatchProps {
    className?: string;
    time: number;
    incrementTime: (
        () => void
    );
    isActive: boolean;
}


const Stopwatch: FC<StopwatchProps> = memo(
    ({ 
        className,
        time,
        incrementTime,
        isActive,
    }) => {
        const interval = useRef<any>(0);
        
        useEffect(() => {
            if (interval.current === 0) {
                interval.current = setInterval(() => {
                    isActive && incrementTime();
                }, 1000);
            }
            return () => {
                clearInterval(interval.current)
                interval.current = 0;
            }
        }, [isActive]);

        return (
            <span className={className}>
                {timeFormaterMMSS(time)}
            </span>
        );
    }
);


export default Stopwatch;