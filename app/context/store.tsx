
'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
import { Code } from "@/interfaces/ProblemNameCode.interface";

type Props = {
    children: React.ReactNode;
};

interface ContextProps {
    detailsCard: Partial<Code> | any,
    setDetailsCard: Dispatch<SetStateAction<Object>>,

}

const GlobalContext = createContext<ContextProps>({
    detailsCard: {},
    setDetailsCard: (): any => {},
})

export const GlobalContextProvider = ({ children }:Props) => {
    const [detailsCard, setDetailsCard] = useState({});
    
    return (
        <GlobalContext.Provider value={{ detailsCard, setDetailsCard }}>
            {children}
        </GlobalContext.Provider>
    )
};

export const useGlobalContext = () => useContext(GlobalContext);