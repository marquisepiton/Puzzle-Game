function Tile(props) {
  //Helper Function
  function clickButton() {
    props.moveTile();
  }
  return (
   
        <button
          className="sliders"
          key={props.data}
          button={props.button}
          onClick={clickButton}
          type="button"
          id={props.data}
          value={props.data}
          index={props.index}          
        >
          {props.value}
        </button> 

       
  );
}
export default Tile;
