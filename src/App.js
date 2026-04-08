import { useState, useEffect } from "react"
import Cell from "./components/Cell"

const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState(null)

  const message = "It is now " + go + "'s go."

  useEffect(() => {
    const winningCombos = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ]
    
    winningCombos.forEach(combo => {
      if (combo.every(cell => cells[cell] === "circle")) {
        setWinningMessage("Circle Wins!")
      } else if (combo.every(cell => cells[cell] === "cross")) {
        setWinningMessage("Cross Wins!")
      }
    })
  }, [cells])

  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  )
}

export default App