import './App.css'
import { useState } from 'react'

function Cell({value, whenClicked}){
  return(
    <button onClick={whenClicked}>{value}</button>
  )
}

function Board(){
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [rule, setRule] = useState("X")

  function isWinner(squares){
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0 ; i < lines.length ; i++){
      let [a, b, c] = lines[i]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
        return squares[a]
      }
    }
    return null
  }

  function handleClick(n){
    let newSquares = squares.slice()
    if (newSquares[n] != null || isWinner(squares)){
      return
    }
    newSquares[n] = rule
    rule == "X"? setRule("O"): setRule("X")
    setSquares(newSquares)
    console.log(newSquares)
    console.log(squares)
  }
  
  return(
    <div className='board'>
      <div>
        {isWinner(squares) == null ? "rule: "+rule : "the winner is "+isWinner(squares)}
      </div>
      
      <div className='row'>
        <Cell value={squares[0]} whenClicked={() => handleClick(0)}/>
        <Cell value={squares[1]} whenClicked={() => handleClick(1)}/>
        <Cell value={squares[2]} whenClicked={() => handleClick(2)}/>
      </div>
      
      <div className='row'>
        <Cell value={squares[3]} whenClicked={() => handleClick(3)}/>
        <Cell value={squares[4]} whenClicked={() => handleClick(4)}/>
        <Cell value={squares[5]} whenClicked={() => handleClick(5)}/>
      </div>
      
      <div className='row'>
        <Cell value={squares[6]} whenClicked={() => handleClick(6)}/>
        <Cell value={squares[7]} whenClicked={() => handleClick(7)}/>
        <Cell value={squares[8]} whenClicked={() => handleClick(8)}/>
      </div>
      
    </div>
  )
}

export default function App() {
  return (
    <div>
      <Board/>
    </div>
  )
}
