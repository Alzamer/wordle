import ScoreboardRow from '../ScoreboardRow'
import { useSelector } from 'react-redux'
import styles from './Scoreboard.module.css'

export default function Scoreboard(){
    const words = useSelector((state: any) => state.game.currentWords)
    const guesses = useSelector((state: any) => state.game.markedLetters)

    return <div className={styles.container}>
        <ScoreboardRow>{{ word: words[0], guess: guesses[0] }}</ScoreboardRow>
        <ScoreboardRow>{{ word: words[1], guess: guesses[1] }}</ScoreboardRow>
        <ScoreboardRow>{{ word: words[2], guess: guesses[2] }}</ScoreboardRow>
        <ScoreboardRow>{{ word: words[3], guess: guesses[3] }}</ScoreboardRow>
        <ScoreboardRow>{{ word: words[4], guess: guesses[4] }}</ScoreboardRow>
        <ScoreboardRow>{{ word: words[5], guess: guesses[5] }}</ScoreboardRow>
    </div>
}