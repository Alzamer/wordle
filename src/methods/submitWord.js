export default function submitWord(position, dictionary, word, guess, current_word){
    if(position.x !== 5 || !dictionary.includes(current_word.join('').toLowerCase()))
        return { result : guess, correct: false } 
        
    position.y++
    position.x = 0

    const result = [0, 0, 0, 0, 0]
    let _word = word
    let _current_word = JSON.parse(JSON.stringify(current_word))

    for(let i = 0; i < _current_word.length; ++i){
        if(_current_word[i] === _word[i]){
            result[i] = 1
            _current_word.splice(i, 1, '0')

            if(i === _current_word.length)
                _word = _word.substr(0, i) + '0'
            else
                _word = _word.substr(0, i) + '0' + _word.substr(i + 1) 
        }
    }

    for(let i = 0; i < _current_word.length; ++i){
        if(_word.includes(_current_word[i]) && _current_word[i] !== '0'){
            result[i] = 2
            _current_word.splice(i, 1, '0')
            _word = _word.slice(0, i - 1) + '0' + _word.slice(i)
        }
    }

    return { result, correct: true }
}