import Style from'./square.module.css';

   
    function Square({value, onSquareClick}) {
        return (
        <button
         className={Style.square}
          onClick={onSquareClick}>
            {value}
        </button>
        );
      }


export default Square;