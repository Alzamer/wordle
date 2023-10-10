import Scoreboard from '../Scoreboard'
import Keyboard from '../Keyboard'
import styles from './Game.module.css'

export default function Game(){
	return <div className={styles.container}>
		<Scoreboard/>
		<Keyboard/>
	</div>
}