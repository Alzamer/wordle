export default function getRandomWord(dict){
    const rand_num = Math.floor(Math.random() * (dict.length - 1))
    return dict[rand_num].toUpperCase()
}