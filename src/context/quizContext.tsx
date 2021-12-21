import React,{ createContext, useState, ReactNode, useContext } from "react";

type Quiz = {
    numberQuestion:number
    setNumberQuestion:React.Dispatch<React.SetStateAction<number>>;
    started:boolean
    setStarted:React.Dispatch<React.SetStateAction<boolean>>;
    correctQuestion:number
    setCorrectQuestion:React.Dispatch<React.SetStateAction<number>>;
}

export const QuizContext = createContext({} as Quiz)

type QuizContextProviderProps = {
    children:ReactNode
}

export default function QuizProvider({children}:QuizContextProviderProps){

    const [numberQuestion,setNumberQuestion] = useState(1);
    const [started,setStarted] = useState(false);
    const [correctQuestion,setCorrectQuestion] = useState(0)


    return(
        <QuizContext.Provider value={{
            numberQuestion,setNumberQuestion,
            started,setStarted,
            correctQuestion,setCorrectQuestion
        }}>
            {children}
        </QuizContext.Provider>
    )
}