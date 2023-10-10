import Key from '../Key'
import styles from './KeyboardRow.module.css'

type propsType = {
    children: Array<String>
}

export default function KeyboardRow({ children } : propsType){
	return <div className={styles.container}>
        { 
            children.map(x => <Key></Key>)
        }
	</div>
}