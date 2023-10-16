import ScoreboardRow from '../ScoreboardRow'
import { useSelector } from 'react-redux'
import styles from './Scoreboard.module.css'
import { useEffect } from 'react'

export default function Scoreboard(){
    const words = useSelector((state: any) => state.game.currentWords)

    return <div className={styles.container}>
        <ScoreboardRow>{ words[0] }</ScoreboardRow>
        <ScoreboardRow>{ words[1] }</ScoreboardRow>
        <ScoreboardRow>{ words[2] }</ScoreboardRow>
        <ScoreboardRow>{ words[3] }</ScoreboardRow>
        <ScoreboardRow>{ words[4] }</ScoreboardRow>
        <ScoreboardRow>{ words[5] }</ScoreboardRow>
    </div>
}