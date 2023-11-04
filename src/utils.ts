import { WORDS } from './words'

export function getRandomWord(){
    return WORDS[Math.floor(Math.random() * (WORDS.length - 1))]
}

export function markLetters(correctWord: string, word: Array<string>){
    const result = [0, 0, 0, 0, 0]

    for(let i = 0; i < correctWord.length; ++i){
        if(correctWord[i] === word[i])
            result[i] = 2            
    }

    const remaining : string[] = []
    for(let i = 0; i < correctWord.length; ++i){
        if(result[i] !== 2)
            remaining.push(correctWord[i])
    }

    for(let i = 0; i < correctWord.length; ++i){
        if(result[i] !== 2 && remaining.includes(word[i])){
            result[i] = 1
            remaining.splice(remaining.indexOf(word[i]), 1)
        }
    }

    return result
}

export function isFullWord(word: Array<string>){
    return WORDS.includes(word.join(''))
}

export function isCorrect(word: Array<number>){
    return word.every(x => x === 2)
}