import ScoreboardCell from '../ScoreboardCell'
import styles from './ScoreboardRow.module.css'

interface propsInterface{
    children: {
        word: Array<string>,
        guess: Array<number>
    }
}

export default function ScoreboardRow({ children } : propsInterface){
    return <div className={styles.container}>
        <ScoreboardCell>{{ word: children.word[0], guess: children.guess[0] }}</ScoreboardCell>
        <ScoreboardCell>{{ word: children.word[1], guess: children.guess[1] }}</ScoreboardCell>
        <ScoreboardCell>{{ word: children.word[2], guess: children.guess[2] }}</ScoreboardCell>
        <ScoreboardCell>{{ word: children.word[3], guess: children.guess[3] }}</ScoreboardCell>
        <ScoreboardCell>{{ word: children.word[4], guess: children.guess[4] }}</ScoreboardCell>
    </div>
}