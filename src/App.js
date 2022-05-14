import React, { useState, useEffect } from 'react'

import Game from './components/Game.js'

import getDictionary from './methods/getDictionary.js'
import getRandomWord from './methods/getRandomWord.js'

const StateContext = React.createContext()

function App(){
  const [word, setWord] = useState(null)
  const [dictionary, setDictionary] = useState(null)
  const [board, setBoard] = useState([
    ['', '', '', '', '', ],
    ['', '', '', '', '', ],
    ['', '', '', '', '', ],
    ['', '', '', '', '', ],
    ['', '', '', '', '', ],
    ['', '', '', '', '', ],
  ])

  const [guess, setGuess] = useState([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])

  const [win, setWin] = useState(false)
  const [lose, setLose] = useState(false)

  let _dictionary = null
  let _word = null

  useEffect(() => {
    async function fetch_data(){
      _dictionary = await getDictionary()
      _word = await getRandomWord(_dictionary)

      setWord(_word)
      setDictionary(_dictionary)
    }

    fetch_data()
  }, [])

  return (
    <div className="App">
      <StateContext.Provider value={{ word, setWord, dictionary, board, setBoard, guess, setGuess, win, setWin, lose, setLose }}>
        { dictionary && word && <Game/>}
      </StateContext.Provider>
    </div>
  );
}

export { StateContext }
export default App