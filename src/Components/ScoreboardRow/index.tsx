import ScoreboardCell from '../ScoreboardCell'
import styles from './ScoreboardRow.module.css'

interface propsInterface{
    children: Array<string>
}

export default function ScoreboardRow({ children } : propsInterface){
	return <div className={styles.container}>
        <ScoreboardCell>{ children[0] }</ScoreboardCell>
        <ScoreboardCell>{ children[1] }</ScoreboardCell>
        <ScoreboardCell>{ children[2] }</ScoreboardCell>
        <ScoreboardCell>{ children[3] }</ScoreboardCell>
        <ScoreboardCell>{ children[4] }</ScoreboardCell>
    </div>
}