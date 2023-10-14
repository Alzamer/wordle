import styles from './Header.module.css'
import Modal from '../Modal'

import { useState } from 'react'

export default function Header(){
	const [showInfoModal, setShowInfoModal] = useState(false); 
	const [showScoreboardModal, setShowScoreboardModal] = useState(false); 
	const [showSettingsModal, setShowSettingsModal] = useState(false); 

	return <div className={styles.container}>
		<div className={styles.left}></div>
		<div className={styles.middle}>
			<p>Wordle</p>
		</div>
		<div className={styles.right}>
			<p className={styles.tile}>
				<Modal show={showInfoModal} setShow={setShowInfoModal}/>
				<span className="material-symbols-outlined" onClick={() => setShowInfoModal(!showInfoModal)}>
					question_mark
				</span>
			</p>
			<p className={styles.tile}>
				<Modal show={showScoreboardModal} setShow={setShowScoreboardModal}/>
				<span className="material-symbols-outlined" onClick={() => setShowScoreboardModal(!showScoreboardModal)}>
					scoreboard
				</span>
			</p>
			<p className={styles.tile}>
				<Modal show={showSettingsModal} setShow={setShowSettingsModal}/>
				<span className="material-symbols-outlined" onClick={() => setShowSettingsModal(!showSettingsModal)}>
					settings
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