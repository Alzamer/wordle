import { createSlice } from '@reduxjs/toolkit'

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
    cursorX: 0,
    cursorY: 0
  },
  reducers: {
    setCorrectWord: (state, action) => {
      state.correctWord = action.payload
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
    }
  }
})

export const { setCorrectWord, addLetter, deleteLetter } = gameSlice.actions
export default gameSlice.reducer