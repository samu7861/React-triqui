const Board = ({squares}) => {

    const createSquares = values =>(
        values.map(value => (
            <div>{value}</div>
        ))
    )

    return(
        <div className="board">
            <div className="row">

            </div>
            <div className="row">

            </div>
            <div className="row">

            </div>
        </div>
    )
}

export default Board