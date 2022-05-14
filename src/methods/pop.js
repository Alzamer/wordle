export default function pop(board, position){
    if(position.x !== 0){
        position.x--
        board[position.y][position.x] = ''
    }
    
    return JSON.parse(JSON.stringify(board))
}