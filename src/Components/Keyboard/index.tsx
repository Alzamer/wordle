import { KeyboardEvent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addLetter, deleteLetter, checkWord } from '../Game/gameSlice'
import KeyboardRow from '../KeyboardRow'
import styles from './Keyboard.module.css'

type keyboardKeysType = Array<Array<string>>

export default function Keyboard(){
	const dispatch = useDispatch()
    const keyboardKeys : keyboardKeysType = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['check', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'backspace']
    ]

    const handleKeydown = (event: any) => {        
        if(event.key.match(/^[a-zA-Z]$/))
            dispatch(addLetter(event.key))
        else if(event.key === "Enter")
            dispatch(checkWord())
        else if(event.key === "Backspace")
            dispatch(deleteLetter())
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeydown)
        return () => document.removeEventListener('keydown', handleKeydown)
    })

	return <div className={styles.container}>
        <KeyboardRow>{ keyboardKeys[0] }</KeyboardRow>
        <KeyboardRow>{ keyboardKeys[1] }</KeyboardRow>
        <KeyboardRow>{ keyboardKeys[2] }</KeyboardRow>
	</div>
}