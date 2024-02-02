"use client"

import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from "@/store/index"
import { setNumbers } from "@/slices/numbersSlice"
import { cn } from "@/lib/utils"

const NumberDisplay = () => {
  const dispatch = useDispatch()

  const [previousNumber, setPreviousNumber] = useState<number | null>(null)
  const [color, setColor] = useState<string>("")

  const currentNumber = useSelector((state: RootState) => state.numbers.value)

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001/ws")

    ws.onmessage = (event) => {
      const message = JSON.parse(event.data)
      const newNumber = message.number

      if (previousNumber !== null) {
        setColor(
          newNumber > previousNumber
            ? "text-success"
            : newNumber < previousNumber
            ? "text-destructive"
            : "text-white"
        )
      }

      dispatch(setNumbers(newNumber))
      setPreviousNumber(newNumber)
    }

    return () => {
      ws.close()
    }
  }, [dispatch, previousNumber])

  return (
    <div className="flex flex-col items-center border hover:p-8 p-4 duration-300 rounded-md select-none gap-4 hover:gap-8">
      <p className="text-xl md:text-4xl">Quadra Test</p>
      <div
        // I've used cn() utility function to avoid conflicts on color change
        className={cn(
          "bg-accent p-4 w-[140px] md:w-[240px] text-center rounded-md md:text-5xl text-2xl",
          color
        )}
      >
        {currentNumber}
      </div>
    </div>
  )
}

export default NumberDisplay
