import Square from './Square'
import './Board.css'

export default function Board({squares, onClick}){

  function renderSquare(i) {
    return <Square 
      value={squares[i]}
      onClick={() => onClick(i)} />
  }
  
  return (
    <div className='board-wrapper'>
      <div className='board-low'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='board-low'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='board-low'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
    )
}
