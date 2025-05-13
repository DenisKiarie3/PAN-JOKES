import Joke from "./components/joke.jsx"

export default function App() {
  return (
    <>
    <h1 className="font-bold my-[20px] text-center sm:max-w-[720px]">PUNS BY DENIS</h1>
      <main className="sm:max-w-[720px]">
      <Joke
        punchline = "It's hard to explain puns to kleptomaniacs because they always take things literally."
      />
      <Joke
        setup = "I got my daughter a fridge for her birthday."
        punchline = "I can't wait to see her face light up when she opens it."
      />
      <Joke
        setup = "How did the hacker escape the police?"
        punchline = "He just ransomware!"
      />
      <Joke
        setup = "Why don't pirates travel on mountain roads?"
        punchline = "Scurvy."
      />
      <Joke
        setup = "Why do bees stay in the hive in the winter?"
        punchline = "Swarm."
      />
      <Joke
        setup = "What's the best thing about Switzerland?"
        punchline = "I don't know, but the flag is a big plus!"
      />
    </main>
    </>
    
  )
}