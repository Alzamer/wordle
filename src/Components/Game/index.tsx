import Scoreboard from '../Scoreboard'
import Keyboard from '../Keyboard'
import styles from './Game.module.css'
import { setCorrectWord } from './gameSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function Game(){
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(setCorrectWord())
	}, [])

	return <div className={styles.container}>
		<Scoreboard/>
		<Keyboard/>
	</div>
}