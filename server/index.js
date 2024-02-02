const express = require("express")
const expressWs = require("express-ws")(express())
const app = expressWs.app

app.ws("/ws", (ws) => {
  const intervalId = setInterval(() => {
    const number =
      Math.floor(Math.random() * (9_999_999 - 1_000_000 + 1)) + 1_000_000
    ws.send(JSON.stringify({ number }))
  }, 100)

  ws.on("close", () => {
    clearInterval(intervalId)
    console.log("Client disconnected from WebSocket")
  })
})

const PORT = 3001
app.listen(PORT, () => console.log(`WebSocket server running on port ${PORT}`))
