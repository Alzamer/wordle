import styles from './Modal.module.css'

interface propsInterface {
    show: boolean
    setShow: Function
}

export default function Modal({ show, setShow } : propsInterface){
    const handleClick = (target: any) => {
        if(!target.target.className.startsWith("Modal_info")){
            setShow(false)
        }
    }
    
    return <div className={`${styles.container} ${ show? null : styles.dontShowMe}`} onClick={handleClick}>
        <div className={styles.info}>
            
        </div>
	</div>
}