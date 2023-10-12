import styles from './Key.module.css'

interface propsInterface {
	children: String
}

export default function Key(props : propsInterface){
	return <div className={styles.container}>
        {
			props.children
		}
	</div>
}