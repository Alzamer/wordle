export default function push(board, position, key){
    if(position.x !== 5){
        board[position.y][position.x] = key
        position.x++
    }
    return JSON.parse(JSON.stringify(board))
}