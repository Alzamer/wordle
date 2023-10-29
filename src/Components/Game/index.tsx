import Scoreboard from '../Scoreboard'
import Keyboard from '../Keyboard'
import styles from './Game.module.css'
import { setCorrectWord, switchGameWin } from './gameSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Modal from '../Modal'

export default function Game(){
	const dispatch = useDispatch()
	const showWin = useSelector((state : any) => state.game.gameWin)
	const setShowWin = () => {
		dispatch(switchGameWin())
	}
	const setShowGameOver = () => {

	}

	useEffect(() => {
		dispatch(setCorrectWord())
	}, [])

	return <div className={styles.container}>
		<Modal show={showWin} setShow={setShowWin}>
			<h1>Congratulations!</h1>
			<h2>You won!</h2>
		</Modal>
		<Scoreboard/>
		<Keyboard/>
	</div>
}