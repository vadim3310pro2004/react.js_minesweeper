import { MotionProps, motion } from "framer-motion";
import { FC } from "react";


export interface DraggableProps extends MotionProps {
    className?: string;
}


const Draggable: FC<DraggableProps> = ({ className, children, ...props }) => {
    return (
        <motion.div
            drag
            dragTransition={{
                power: 0,
            }}
            className={className}
            {...props}
        >
            {children}
        </motion.div>
    );
};


export default Draggable;