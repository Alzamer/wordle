import Board from './Board.js'
import Keyboard from './Keyboard.js'
import GameOver from './GameOver.js'
import Win from './Win.js'

import { StateContext } from '../App.js'
import React, { useEffect, useContext, useCallback } from 'react'

import push from '../methods/push.js'
import pop from '../methods/pop.js'
import submitWord from '../methods/submitWord.js'
import isWin from '../methods/isWin.js'

function Game() {
  const letters = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['BACKSPACE', 'Z','X','C','V','B','N','M', 'ENTER']
  ]

  const position = {
    x : 0,
    y : 0
  }

  const { board, setBoard, dictionary, word, guess, setGuess, win, setWin, lose, setLose } = useContext(StateContext)
  console.log(word)
  const handleUserAction = useCallback((key) => {
      if(win){
        console.log(win)
        return
      }

      if(position.y > 5)
        return

      if(key === 'ENTER'){
        const matrix= submitWord(position, dictionary, word, guess, board[position.y])
        
        if(matrix.correct)
          guess[position.y - 1] = matrix.result

        setGuess(guess)
        setBoard(board)
        
        if(isWin(matrix.result))
          setWin(true)

        if(position.y === 6)
          setLose(true)        
      }
      else if(key === 'BACKSPACE'){
        const curr = pop(board, position)
        setBoard(curr)
      }
      else{
        const curr = push(board, position, key)
        setBoard(curr)
      }
    }
  )

  const handleKeydown = (event) => {
    let key = event.key.toUpperCase()

    if(letters.flat().includes(key))
      handleUserAction(key)
  }

  const handleMouseClick = (event) => {
    let key = event.target.outerText.toUpperCase()

    if(letters.flat().includes(key) && event.target.className.trim() === 'key' || event.target.className.trim() === 'key big')
      handleUserAction(key)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [])

  useEffect(() => {
    document.addEventListener('click', handleMouseClick)
    return () => document.removeEventListener('click', handleMouseClick)
  }, [])

  return (
    <div className="Game">
        { lose && <GameOver word={word}/> }
        { win && <Win win={win}/> }
        <Board/>
        <Keyboard letters={letters}/>
    </div>
  );
}

export default Game;