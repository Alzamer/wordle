import wordbank from '../wordbank.txt'

export default async function getDictionary(){
    let data = await fetch(wordbank)
    let parsed_data = await data.text()
    return parsed_data.split('\r\n')
}