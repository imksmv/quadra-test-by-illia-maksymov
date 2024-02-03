import { setNumber } from "@/slices/numberSlice"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { toast } from "sonner"
import { useConfetti } from "./useConfetti"

export const useWebSocket = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3001/ws") // Simulate an error by changing the port to 3002, for instance.

    ws.onopen = () => {
      toast.success("Hooorey! It works! 😎", {
        position: "top-center",
      })

      useConfetti()
    }

    ws.onerror = () => {
      toast.error("Oh no! An error... 😮‍💨", {
        position: "top-center",
      })
    }

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data)
      const number = data.number

      dispatch(setNumber(number)) // Saves the number from the websocket to global state
    }

    return () => ws.close()
  }, [])
}
