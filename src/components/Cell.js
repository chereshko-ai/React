const Cell = ({ id, cell, go, setGo, cells, setCells, winningMessage }) => {
    const handleClick = (e) => {
        if (winningMessage) return
      
        const firstChild = e.target.firstChild
        const isElement = firstChild && firstChild.nodeType === 1
      
        const taken = (isElement && (firstChild.classList.contains("circle") || firstChild.classList.contains("cross"))) ||
                      e.target.classList.contains("circle") || 
                      e.target.classList.contains("cross")
      
        if (!taken) {
          if (go === "circle") {
            isElement && firstChild.classList.add("circle")
            handleCellChange("circle")
            setGo("cross")
          }
          if (go === "cross") {
            isElement && firstChild.classList.add("cross")
            handleCellChange("cross")
            setGo("circle")
          }
        }
      }
      
    const handleCellChange = (className) => {
        const nextCells = cells.map((cell, index) => {
            return index === id ? className : cell
        })
        setCells(nextCells)
    }

    return (
        <div className="square" id={id} onClick={handleClick}>
            <div>{cell}</div>
        </div>
    )
}

export default Cell