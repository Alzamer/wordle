import styles from './ScoreboardCell.module.css'

interface childrenInterface{
    children: String
}

export default function ScoreboardCell({ children } : childrenInterface){
	return <div className={styles.container}>
        {
            children.toUpperCase()
        }
    </div>
}