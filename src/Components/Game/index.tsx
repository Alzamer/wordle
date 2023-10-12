import Scoreboard from '../Scoreboard'
import Keyboard from '../Keyboard'
import Modal from '../Modal'
import styles from './Game.module.css'

export default function Game(){
	return <div className={styles.container}>
		<Modal/>
		<Scoreboard/>
		<Keyboard/>
	</div>
}