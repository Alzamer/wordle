import styles from './Header.module.css'
import Modal from '../Modal'

import { useState, useEffect } from 'react'

interface result{
	id: string,
	date: string
	correctWord: string,
	try: number
}

export default function Header(){
	const [showInfoModal, setShowInfoModal] = useState(false); 
	const [showScoreboardModal, setShowScoreboardModal] = useState(false); 
	const [localStorageData, setLocalStorageData] = useState<Array<result>>([]);

	useEffect(() => {
		const resultArray : Array<result> = []

		for (let i = 0; i < localStorage.length; i++) {
			const key = localStorage.key(i)
			if(key?.startsWith("wordle")){
			const value = JSON.parse(localStorage.getItem(key) as string)
			const temp = {
				id: key,
				date : value.date,
				correctWord: value.correctWord,
				try: value.try
			}
			resultArray.push(temp)
			}
		}

		setLocalStorageData(resultArray);
	}, [showInfoModal])

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
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Correct Word</th>
							<th>Try</th>
						</tr>
					</thead>
					<tbody>
					{	
						localStorageData.map(x => <tr key={x.id}>
							<th>{ x.date }</th>
							<th>{ x.correctWord }</th>
							<th>{ x.try + 1 }</th>
						</tr>)
					}
					</tbody>
				</table>
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