import styles from './SpecialKey.module.css'

interface propsInterface {
	children: String
}

export default function SpecialKey(props : propsInterface){
	return <div className={styles.container}>
        <span className="material-symbols-outlined">
        {
            props.children
        }
        </span>
	</div>
}       