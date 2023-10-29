import Scoreboard from '../Scoreboard'
import Keyboard from '../Keyboard'
import styles from './Game.module.css'
import { reset } from './gameSlice'
import { useDispatch, useSelector } from 'react-redux'
import Modal from '../Modal'

export default function Game(){
	const dispatch = useDispatch()
	const showWin = useSelector((state : any) => state.game.gameWin)
	const showOver = useSelector((state : any) => state.game.gameOver)
	const setShowWin = () => {
		dispatch(reset())
	}
	const setShowGameOver = () => {
		dispatch(reset())
	}

	return <div className={styles.container}>
		<Modal show={showWin} setShow={setShowWin}>
			<h1>Congratulations!</h1>
			<h2>You won!</h2>
		</Modal>
		<Modal show={showOver} setShow={setShowGameOver}>
			<h1>You've lost</h1>
			<h2>Good luck next time!</h2>
		</Modal>
		<Scoreboard/>
		<Keyboard/>
	</div>
}