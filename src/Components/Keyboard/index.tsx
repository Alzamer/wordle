import KeyboardRow from '../KeyboardRow'
import styles from './Keyboard.module.css'

type keyboardKeysType = Array<Array<String>>

export default function Keyboard(){
    const keyboardKeys : keyboardKeysType = [
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['X', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'X', 'X']
    ]

	return <div className={styles.container}>
        <KeyboardRow>{ keyboardKeys[0] }</KeyboardRow>
        <KeyboardRow>{ keyboardKeys[1] }</KeyboardRow>
        <KeyboardRow>{ keyboardKeys[2] }</KeyboardRow>
	</div>
}