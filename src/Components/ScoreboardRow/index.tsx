import ScoreboardCell from '../ScoreboardCell'
import styles from './ScoreboardRow.module.css'

export default function ScoreboardRow(){
	return <div className={styles.container}>
        <ScoreboardCell/>
        <ScoreboardCell/>
        <ScoreboardCell/>
        <ScoreboardCell/>
        <ScoreboardCell/>
    </div>
}