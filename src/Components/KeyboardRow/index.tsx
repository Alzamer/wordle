import Key from '../Key'
import SpecialKey from '../SpecialKey'
import styles from './KeyboardRow.module.css'

type propsType = {
    children: Array<string>,
}

function keyFunc(x: string, index: number, array: Array<string> ){
    if(x.length === 1)
        return <Key key={index}>{ x }</Key>
    return <SpecialKey key={index}>{ x }</SpecialKey>
}

export default function KeyboardRow({ children } : propsType){
	return <div className={styles.container}>
        { 
            children.map(keyFunc)
        }
	</div>
}