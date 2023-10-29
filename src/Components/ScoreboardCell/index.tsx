import styles from './ScoreboardCell.module.css'

interface childrenInterface{
    children: {
        word: string,
        guess: number
    }
}

export default function ScoreboardCell({ children } : childrenInterface){
    console.log(children);
    return <div className={`${styles.container} ${children.guess === 1 ? styles.badPosition : null} 
        ${children.guess === 2 ? styles.correct: null}`}>
        {
            children.word.toUpperCase()
        }
    </div>
}