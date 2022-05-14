import React, { useContext } from 'react'

import Letter from './Letter.js'
import { StateContext } from '../App.js'

import '../styles/boardWrapper.css'

export default function Board() {
  const _board = useContext(StateContext)

  return (
    <div className="boardWrapper">
        <Letter guessed={ _board.guess[0][0] }>{ _board.board[0][0] }</Letter>
        <Letter guessed={ _board.guess[0][1] }>{ _board.board[0][1] }</Letter>
        <Letter guessed={ _board.guess[0][2] }>{ _board.board[0][2] }</Letter>
        <Letter guessed={ _board.guess[0][3] }>{ _board.board[0][3] }</Letter>
        <Letter guessed={ _board.guess[0][4] }>{ _board.board[0][4] }</Letter>

        <Letter guessed={ _board.guess[1][0] }>{ _board.board[1][0] }</Letter>
        <Letter guessed={ _board.guess[1][1] }>{ _board.board[1][1] }</Letter>
        <Letter guessed={ _board.guess[1][2] }>{ _board.board[1][2] }</Letter>
        <Letter guessed={ _board.guess[1][3] }>{ _board.board[1][3] }</Letter>
        <Letter guessed={ _board.guess[1][4] }>{ _board.board[1][4] }</Letter>

        <Letter guessed={ _board.guess[2][0] }>{ _board.board[2][0] }</Letter>
        <Letter guessed={ _board.guess[2][1] }>{ _board.board[2][1] }</Letter>
        <Letter guessed={ _board.guess[2][2] }>{ _board.board[2][2] }</Letter>
        <Letter guessed={ _board.guess[2][3] }>{ _board.board[2][3] }</Letter>
        <Letter guessed={ _board.guess[2][4] }>{ _board.board[2][4] }</Letter>

        <Letter guessed={ _board.guess[3][0] }>{ _board.board[3][0] }</Letter>
        <Letter guessed={ _board.guess[3][1] }>{ _board.board[3][1] }</Letter>
        <Letter guessed={ _board.guess[3][2] }>{ _board.board[3][2] }</Letter>
        <Letter guessed={ _board.guess[3][3] }>{ _board.board[3][3] }</Letter>
        <Letter guessed={ _board.guess[3][4] }>{ _board.board[3][4] }</Letter>

        <Letter guessed={ _board.guess[4][0] }>{ _board.board[4][0] }</Letter>
        <Letter guessed={ _board.guess[4][1] }>{ _board.board[4][1] }</Letter>
        <Letter guessed={ _board.guess[4][2] }>{ _board.board[4][2] }</Letter>
        <Letter guessed={ _board.guess[4][3] }>{ _board.board[4][3] }</Letter>
        <Letter guessed={ _board.guess[4][4] }>{ _board.board[4][4] }</Letter>

        <Letter guessed={ _board.guess[5][0] }>{ _board.board[5][0] }</Letter>
        <Letter guessed={ _board.guess[5][1] }>{ _board.board[5][1] }</Letter>
        <Letter guessed={ _board.guess[5][2] }>{ _board.board[5][2] }</Letter>
        <Letter guessed={ _board.guess[5][3] }>{ _board.board[5][3] }</Letter>
        <Letter guessed={ _board.guess[5][4] }>{ _board.board[5][4] }</Letter>
    </div>
  )
}