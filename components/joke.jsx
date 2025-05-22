import React from "react"
export default function Joke(props) {

    const [isShown, setIsShown] = React.useState(false)
    function toggleShown () {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <>
            {props.setup && <h1 className="mb-[5px]"><span className="font-bold text-amber-900">Setup:</span> {props.setup}</h1>}
            {isShown ? <h1><span className="font-bold text-amber-900">Punchline:</span> {props.punchline}</h1> : null}
            <button className="border border-black p-[3px] rounded-[5px] mb-[10px] bg-gray-200" onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            <hr />
            <br />
        </>
    )
}