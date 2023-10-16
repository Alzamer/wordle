import styles from './Key.module.css'
import { useDispatch } from 'react-redux'
import {
	addLetter
} from '../Game/gameSlice'

interface propsInterface {
	children: String
}

export default function Key(props : propsInterface){
	const dispatch = useDispatch()
	const handleClick = (element: any) => {
		dispatch(addLetter(
			`${props.children}`
		))
	}

	return <div className={styles.container} onClick={handleClick}>
        {
			props.children
		}
	</div>
}