import { createSlice } from '@reduxjs/toolkit'
import { getRandomWord, markLetters, isFullWord } from '../../utils'

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    correctWord: '',
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
      state.cursorY++
      state.cursorX = 0
    }
  }
})

export const { setCorrectWord, addLetter, deleteLetter, checkWord } = gameSlice.actions
export default gameSlice.reducer