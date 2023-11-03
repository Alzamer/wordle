import styles from './Key.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
	addLetter
} from '../Game/gameSlice'

interface propsInterface {
	children: String
}

export default function Key(props : propsInterface){
	const dispatch = useDispatch()
	const yellowLetters = useSelector((state: any) => state.game.yellowLetters);
	const greenLetters = useSelector((state: any) => state.game.greenLetters);
	const handleClick = (element: any) => {
		dispatch(addLetter(
			`${props.children}`
		))
	}

	return <div className={`${styles.container} ${yellowLetters.includes(props.children.toLowerCase()) ? styles.yellow : null} 
		${greenLetters.includes(props.children.toLowerCase()) ? styles.green : null}`} onClick={handleClick}>
        {
			props.children
		}
	</div>
}