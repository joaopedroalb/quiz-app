import '../styles/globals.css'
import type { AppProps } from 'next/app'
import QuizProvider from '../context/quizContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
