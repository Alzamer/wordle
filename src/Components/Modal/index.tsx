import styles from './Modal.module.css'

export default function Modal(){
	const handleClick = (target: any) => {
        if(target.target.className.startsWith("Modal_info")){

        }
        else{

        }
    }
    
    return <div className={styles.container} onClick={handleClick}>
        <div className={styles.info}>
            West Coast Shit!
        </div>
	</div>
}