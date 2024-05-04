import { ReactNode } from "react";
import { useAppDispatch } from "shared/hooks";
import { setModalBody, setModalIsOpen } from "../store/window.slice";


const useModal = () => {
    const dispath = useAppDispatch();

    return (
        body: ReactNode,
    ) => {
        dispath(setModalBody(body));
        dispath(setModalIsOpen(true));
    }
};


export default useModal;