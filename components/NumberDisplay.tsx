"use client"

import { useWebSocket } from "@/hooks/useWebSocket"
import { RootState } from "@/store/index"
import { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"

const NumberDisplay = () => {
  const [color, setColor] = useState<string>("text-white")
  const currentNumber = useSelector((state: RootState) => state.number.value)
  const previousNumberRef = useRef<number>(currentNumber)

  useWebSocket() // I used separation of concerns principle, for more code readability.

  useEffect(() => {
    const previousNumber = previousNumberRef.current

    const newColor =
      currentNumber > previousNumber
        ? "text-success"
        : currentNumber < previousNumber
        ? "text-destructive"
        : "text-white"

    setColor(newColor)

    previousNumberRef.current = currentNumber
  }, [currentNumber])

  return (
    <div className="flex flex-col items-center border hover:p-8 p-4 duration-300 rounded-md select-none gap-4 hover:gap-8">
      <h1 className="text-xl md:text-4xl">Quadra Test</h1>
      <div
        className={`bg-accent p-4 w-[140px] md:w-[240px] text-center rounded-md md:text-5xl text-2xl ${color}`}
      >
        {currentNumber}
      </div>
    </div>
  )
}

export default NumberDisplay
