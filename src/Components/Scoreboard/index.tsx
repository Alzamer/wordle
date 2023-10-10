import ScoreboardRow from '../ScoreboardRow'
import styles from './Scoreboard.module.css'

export default function Scoreboard(){
	return <div className={styles.container}>
        <ScoreboardRow/>
        <ScoreboardRow/>
        <ScoreboardRow/>
        <ScoreboardRow/>
        <ScoreboardRow/>
        <ScoreboardRow/>
    </div>
}