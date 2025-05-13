export default function Joke(props) {
    return (
        <>
            {props.setup && <h1><span className="font-bold text-amber-900">Setup:</span> {props.setup}</h1>}
            <h1><span className="font-bold text-amber-900">Punchline:</span> {props.punchline}</h1>
            <hr />
            <br />
        </>
    )
}