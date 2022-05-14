export default function isWin(matrix){
    for(let i = 0; i < matrix.length; ++i)
        if(matrix[i] !== 1)
            return false
    return true
}