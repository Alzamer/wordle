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
			<Modal show={showInfoModal} setShow={setShowInfoModal}/>
			<p className={styles.tile}>				
				<span className="material-symbols-outlined" onClick={() => setShowInfoModal(!showInfoModal)}>
					question_mark
				</span>
			</p>
			<Modal show={showScoreboardModal} setShow={setShowScoreboardModal}/>
			<p className={styles.tile}>
				<span className="material-symbols-outlined" onClick={() => setShowScoreboardModal(!showScoreboardModal)}>
					scoreboard
				</span>
			</p>
			<Modal show={showSettingsModal} setShow={setShowSettingsModal}/>
			<p className={styles.tile}>
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