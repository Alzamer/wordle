import { configureStore } from '@reduxjs/toolkit'
import gameSlice from './Components/Game/gameSlice'

export default configureStore({
  reducer: {
    game: gameSlice
  }
})