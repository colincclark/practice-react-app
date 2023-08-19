import { useState } from "react"

const Timer = () => {
  const [accumlatedTime, setAccumulatedTime] = useState(0)
  const [count, setCount] = useState(0)
  const [timer, setTimer] = useState<ReturnType<typeof setInterval> | null>()

  const handleStart = () => {
    if (timer) return

    const now = Date.now() - accumlatedTime

    const startTimer = setInterval(() => {
      const elapsed = Date.now() - now
      setAccumulatedTime(elapsed)
      setCount(elapsed)
    }, 1000)

    setTimer(startTimer)
  }

  const handlePause = () => {
    if (!timer) return
    clearInterval(timer)
    setTimer(null)
  }

  const handleReset = () => {
    setAccumulatedTime(0)
    setCount(0)
  }

  return (
    <section>
      <p>{count}</p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </section>
  )
}

export default Timer
