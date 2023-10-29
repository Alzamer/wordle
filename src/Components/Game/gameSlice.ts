import { createSlice } from '@reduxjs/toolkit'
import { getRandomWord, markLetters, isFullWord, isCorrect } from '../../utils'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    correctWord: '',
    gameOver: false,
    gameWin: false,
    currentWords: [
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', ''],
      ['', '', '', '', '']
    ],
    markedLetters: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0]
    ],
    cursorX: 0,
    cursorY: 0
  },
  reducers: {
    setCorrectWord: (state) => {
      state.correctWord = getRandomWord()
    },
    addLetter: (state, action) => {
      if(state.cursorX === 5)
        return;

      const temp = [...state.currentWords]
      temp[state.cursorY][state.cursorX] = action.payload
      state.currentWords = temp

      state.cursorX++
    },
    deleteLetter: (state) => {
      if(state.cursorX > 0)
        state.cursorX--

      const temp = [...state.currentWords]
      temp[state.cursorY][state.cursorX] = ''
      state.currentWords = temp
    },
    checkWord: (state) => {
      if(!isFullWord([...state.currentWords[state.cursorY]]))
        return

      const temp = [...state.markedLetters]
      temp[state.cursorY] = markLetters(state.correctWord, [...state.currentWords[state.cursorY]])
      state.markedLetters = temp

      if(isCorrect(temp[state.cursorY]))
        state.gameWin = true;

      state.cursorY++
      state.cursorX = 0
    },
    switchGameWin: (state) => {
      state.gameWin = !state.gameWin
    }
  }
})

export const { setCorrectWord, addLetter, deleteLetter, checkWord, switchGameWin } = gameSlice.actions
export default gameSlice.reducer