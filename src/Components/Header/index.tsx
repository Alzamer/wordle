import styles from './Header.module.css'
import Modal from '../Modal'

import { useState } from 'react'

export default function Header(){
	const [showInfoModal, setShowInfoModal] = useState(false); 
	const [showScoreboardModal, setShowScoreboardModal] = useState(false); 

	return <div className={styles.container}>
		<div className={styles.left}></div>
		<div className={styles.middle}>
			<p>Wordle</p>
		</div>
		<div className={styles.right}>
			<Modal show={showInfoModal} setShow={setShowInfoModal}>
			Welcome to Wordle, the exciting and addictive word puzzle game that challenges your vocabulary and deduction skills! Wordle is a game that's simple to learn but endlessly engaging, making it perfect for word enthusiasts and casual gamers alike.
			</Modal>
			<p className={styles.tile}>				
				<span className="material-symbols-outlined" onClick={() => setShowInfoModal(!showInfoModal)}>
					question_mark
				</span>
			</p>
			<Modal show={showScoreboardModal} setShow={setShowScoreboardModal}>
				Welcome<h1>ASDOIB</h1> to Wordle, the exciting and addictive word puzzle game that challenges your vocabulary and deduction skills!
				Wordle is a game that's simple to learn but endlessly engaging, making it perfect for word enthusiasts and casual gamers
				alike.
			</Modal>
			<p className={styles.tile}>
				<span className="material-symbols-outlined" onClick={() => setShowScoreboardModal(!showScoreboardModal)}>
					scoreboard
				</span>
			</p>
			<p className={styles.info}>
				<a href="https://github.com/Alzamer/wordle">
					<span className="material-symbols-outlined">
						code
					</span>
					View source on GitHub
				</a>
			</p>
		</div>
	</div>
}