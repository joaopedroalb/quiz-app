import React,{ createContext, useState, ReactNode, useContext } from "react";

type Quiz = {
    numberQuestion:number
    setNumberQuestion:React.Dispatch<React.SetStateAction<number>>;
    started:boolean
    setStarted:React.Dispatch<React.SetStateAction<boolean>>;
}

export const QuizContext = createContext({} as Quiz)

type QuizContextProviderProps = {
    children:ReactNode
}

export default function WeatherProvider({children}:QuizContextProviderProps){

    const [numberQuestion,setNumberQuestion] = useState(1);
    const [started,setStarted] = useState(false);


    return(
        <QuizContext.Provider value={{
            numberQuestion,setNumberQuestion,
            started,setStarted
        }}>
            {children}
        </QuizContext.Provider>
    )
}