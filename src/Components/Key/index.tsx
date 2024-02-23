import styles from './Key.module.css'
import { useDispatch, useSelector } from 'react-redux'
import {
	RootState,
	addLetter
} from '../Game/gameSlice'

interface propsInterface {
	children: string
}

export default function Key(props : propsInterface){
	const dispatch = useDispatch()
	const yellowLetters = useSelector((state: RootState) => state.game.yellowLetters);
	const greenLetters = useSelector((state: RootState) => state.game.greenLetters);
	const blackLetters = useSelector((state: RootState) => state.game.blackLetters);
	const handleClick = () => {
		dispatch(addLetter(
			`${props.children}`
		))
	}

	return <div className={`${styles.container} ${yellowLetters.includes(props.children.toLowerCase()) ? styles.yellow : null} 
		${greenLetters.includes(props.children.toLowerCase()) ? styles.green : null}
		${blackLetters.includes(props.children.toLowerCase()) ? styles.black : null}`}
		onClick={handleClick}>
        {
			props.children
		}
	</div>
}