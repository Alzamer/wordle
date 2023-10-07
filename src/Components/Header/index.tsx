import styles from './Header.module.css'

export default function Header(){
	return <div className={styles.container}>
		<div className={styles.left}></div>
		<div className={styles.middle}>
			<p>Wordle</p>
		</div>
		<div className={styles.right}>
			<p className={styles.tile}>
				<span className="material-symbols-outlined">
					question_mark
				</span>
			</p>
			<p className={styles.tile}>
				<span className="material-symbols-outlined">
					scoreboard
				</span>
			</p>
			<p className={styles.tile}>
				<span className="material-symbols-outlined">
					settings
				</span>
			</p>
			<p className={styles.info}>
				<a href="#">
					<span className="material-symbols-outlined">
						code
					</span>
					View source on GitHub
				</a>
			</p>
		</div>
	</div>
}