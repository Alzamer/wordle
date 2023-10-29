import styles from './Modal.module.css'
import { useEffect } from 'react'

interface propsInterface {
    show: boolean
    setShow: Function,
    children: any
}

export default function Modal({ show, setShow, children } : propsInterface){
    const handleClick = (target: any) => {
        if(!target.target.className.startsWith("Modal_info")){
            setShow(false)
        }
    }
    
    useEffect(() => {
        console.log(show);
    }, [])

    return <div className={`${styles.container} ${ show ? null : styles.dontShowMe}`} onClick={handleClick}>
        <div className={styles.info}>
            {
                children
            }
        </div>
	</div>
}