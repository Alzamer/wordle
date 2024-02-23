import { createSlice } from '@reduxjs/toolkit'
import { getRandomWord, markLetters, isFullWord, isCorrect } from '../../utils'

const initialState = {
  correctWord: getRandomWord(),
  gameOver: false,
  gameWin: false,
  yellowLetters: [] as unknown[],
  greenLetters: [] as unknown[],
  blackLetters: [] as unknown[],
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
  cursorY: 0,
  incorrectWord: false,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
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
      if(!isFullWord([...state.currentWords[state.cursorY]])){
        state.incorrectWord = true;
        return
      }

      const temp = [...state.markedLetters]
      temp[state.cursorY] = markLetters(state.correctWord, [...state.currentWords[state.cursorY]])
      state.markedLetters = temp

      if(isCorrect(temp[state.cursorY])){
        const currentDate = new Date();
        const currentDateString = currentDate.getDate() + "/"
        + (currentDate.getMonth()+1)  + "/" 
        + currentDate.getFullYear() + " "  
        + currentDate.getHours() + ":"  
        + currentDate.getMinutes() + ":" 
        + currentDate.getSeconds();

        localStorage.setItem(`wordle${localStorage.length}`, JSON.stringify({
          date: currentDateString,
          correctWord: state.correctWord,
          try: state.cursorY,
        }));
        state.gameWin = true;
      }

      state.yellowLetters = [...temp[state.cursorY].map((x, i) => {
        if(x === 1)
          return state.currentWords[state.cursorY][i]
      }), ...state.yellowLetters]

      state.greenLetters = [...temp[state.cursorY].map((x, i) => {
        if(x === 2)
          return state.currentWords[state.cursorY][i]
      }), ...state.greenLetters]

      state.blackLetters = [...temp[state.cursorY].map((x, i) => {
        if(x === 0)
          return state.currentWords[state.cursorY][i]
      }), ...state.blackLetters]

      state.cursorY++
      state.cursorX = 0

      if(state.cursorY === 6)
        state.gameOver = true
    },
    reset: () => {
      return {...initialState, correctWord: getRandomWord()}
    },
    switchIncorrectWord: (state) => {
      state.incorrectWord = !state.incorrectWord
    }
  }
})

export const { addLetter, deleteLetter, checkWord, reset, switchIncorrectWord } = gameSlice.actions
export default gameSlice.reducer