import Joke from "./components/joke.jsx"
import jokesData from "./jokesData.js"

export default function App() {
  const jokeElements = jokesData.map((joke) => {
    return (
      <Joke 
        setup = {joke.setup}
        punchline = {joke.punchline}
      />
    )
  })
  return (
    <>
    <h1 className="font-bold my-[20px] text-center sm:max-w-[720px]">PUNS BY DENIS</h1>
      <main className="sm:max-w-[720px]">
        {jokeElements}
      </main>
    </>
    
  )
}