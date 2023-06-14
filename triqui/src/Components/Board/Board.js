import Square from "../Square/Square"

const Board = ({squares}) => {

    const createSquares = values =>(
        values.map(value => (
            <Square value={squares[value]}></Square>
        ))
    )

    return(
        <div className="board">
            <div className="row">
                {createSquares([0,1,2])}
            </div>
            <div className="row">
                {createSquares([3,4,5])}
            </div>
            <div className="row">
                {createSquares([6,7,8])}
            </div>
        </div>
    )
}

export default Board