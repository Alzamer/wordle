import styles from './SpecialKey.module.css'
import { useDispatch } from 'react-redux'
import { deleteLetter, checkWord } from '../Game/gameSlice'

interface propsInterface {
	children: String
}

export default function SpecialKey(props : propsInterface){
    const dispatch = useDispatch()
    const handleClick = (target: any) => {
        if(target.target.innerText === "backspace")
            dispatch(deleteLetter())
        else
            dispatch(checkWord())
    }
    
    return <div className={styles.container} onClick={handleClick}>
        <span className="material-symbols-outlined">
        {
            props.children
        }
        </span>
	</div>
}       