import styles from './Modal.module.css'
import { useState } from 'react'

export default function Modal(){
    const [showModal, setShowModal] = useState(true)

    const handleClick = (target: any) => {
        if(!target.target.className.startsWith("Modal_info")){
            setShowModal(!showModal)
        }
    }
    
    return <div className={`${styles.container} ${ showModal ? null : styles.dontShowMe}`} onClick={handleClick}>
        <div className={styles.info}>
            
        </div>
	</div>
}