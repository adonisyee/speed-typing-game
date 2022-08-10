import {useState, useEffect, useRef} from "react"

function useGame(STARTING_TIME=15) {
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
    const [isRunning, setIsRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const textAreaRef = useRef(null)

    function handleChange(e) {
        setText(e.target.value)
    }

    function calculateWordCount(text) {
        const wordMatches = text.match(/(\w+)/g)
        return wordMatches.length
    }

    function startGame() {
        setIsRunning(true)
        setTimeRemaining(STARTING_TIME)
        setText("")
        textAreaRef.current.disabled = false
        textAreaRef.current.focus()
    }

    function endGame() {
        setIsRunning(false)
        setWordCount(calculateWordCount(text))
    }

    useEffect(() => {
        if(isRunning && timeRemaining > 0) {
            setTimeout(() => {
                setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 1)
            }, 1000)
        } else if(timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isRunning])

    return [text, timeRemaining, isRunning, wordCount, textAreaRef, handleChange, startGame]
}
export default useGame
