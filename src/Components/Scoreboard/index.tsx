import ScoreboardRow from '../ScoreboardRow'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Scoreboard.module.css'
import { useSpring, animated } from '@react-spring/web'
import { switchIncorrectWord } from '../Game/gameSlice'
import { RootState } from '../Game/gameSlice';

export default function Scoreboard(){
    const words = useSelector((state: RootState) => state.game.currentWords)
    const guesses = useSelector((state: RootState) => state.game.markedLetters)
    const currentY = useSelector((state: RootState) => state.game.cursorY)
    const incorrectWord = useSelector((state: RootState) => state.game.incorrectWord)
    const dispatch = useDispatch()
    const shakeAnimation = useSpring({
        from: { transform: 'translateX(0px)' },
        to: [
            { transform: 'translateX(15px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(5px)' },
            { transform: 'translateX(0px)' },
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(-15px)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(-5px)' },
            { transform: 'translateX(0px)' },
        ],
        config: { duration: 15 },
        reset: true,
        onRest: () => {
            if (incorrectWord)
                dispatch(switchIncorrectWord());
        }
      });

    return <div className={styles.container}>
        <animated.div style={currentY === 0 && incorrectWord ? shakeAnimation : undefined}>
            <ScoreboardRow>{{ word: words[0], guess: guesses[0] }}</ScoreboardRow>
        </animated.div>
        <animated.div style={currentY === 1 && incorrectWord ? shakeAnimation : undefined}>
            <ScoreboardRow>{{ word: words[1], guess: guesses[1] }}</ScoreboardRow>
        </animated.div>
        <animated.div style={currentY === 2 && incorrectWord ? shakeAnimation : undefined}>
            <ScoreboardRow>{{ word: words[2], guess: guesses[2] }}</ScoreboardRow>
        </animated.div>
        <animated.div style={currentY === 3 && incorrectWord ? shakeAnimation : undefined}>
        <ScoreboardRow>{{ word: words[3], guess: guesses[3] }}</ScoreboardRow>
        </animated.div>
        <animated.div style={currentY === 4 && incorrectWord ? shakeAnimation : undefined}>
            <ScoreboardRow>{{ word: words[4], guess: guesses[4] }}</ScoreboardRow>
        </animated.div>
        <animated.div style={currentY === 5 && incorrectWord ? shakeAnimation : undefined}>
            <ScoreboardRow>{{ word: words[5], guess: guesses[5] }}</ScoreboardRow>
        </animated.div>
    </div>
}