import React from "react"
import useGame from "./useGame"
import "./styles.css"

function App() {
    const STARTING_TIME = 10

    const [text, timeRemaining, isRunning, wordCount, textAreaRef,
        handleChange, startGame] = useGame(STARTING_TIME)

    return ( 
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                ref={textAreaRef}
                onChange={handleChange}
                value={text}
                disabled={!isRunning}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button
                onClick={startGame}
                disabled={isRunning}
            >
                Start
            </button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App
