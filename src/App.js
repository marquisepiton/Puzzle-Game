import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tile from "./components/Tile";
import data from "./data/data.json";
import React from "react";
/*
  Parent: 
        App will Return: ---
                            |
                            |
                            Board-------
                                        |
                                        |
                                        |
                                        Child: 
                                            |  Tile: Tile1, Tile2,......Tile 16
                                            |
                                            |
                                            Tile Properties: {ID, CurrentPosition, Valid Move, Empty}
*/
// Class App will play the role of the board.... Well kind of.
class App extends React.Component {
  constructor() {
    super();
    // Compare a winning condition
    const winningArray = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
    ];

    this.state = {
      // ./data/data.json
      data,
      // Not sure if I'm going to use this. 
      slots: [],
    };
    //=================== B I N D I N G =======================================
    this.randomizeTile = this.randomizeTile.bind(this);
    this.checkWinCondition = this.checkWinCondition.bind(this);
    this.moveTile = this.moveTile.bind(this);
    this.refreshGame = this.refreshGame.bind(this);
    //==========================================================================
  }
  //=================== M E T H O D S ========================================
  // should put the tiles in random position on the start of the game.
  randomizeTile() {
    let slotNumber = Math.floor(Math.random() * 17);
    this.setState({
      data: data.tiles[slotNumber],
    });
  }
  // Check if all the tile position are in the right spots
  checkWinCondition() {}
  // Allow the player to move the tile
  moveTile() {}
  // Restarts the game
  refreshGame() {}
  componentDidMount() {}
  componentDidUpdate() {}
  //===========================================================================

  render() {
    const mapHelper = (button, index) => {
      return (
        <Tile
          button={button}
          moveTile={this.moveTile}
          index={index}
          key={index}
          value={this.state.data.tiles[index].number}
        />
      );
    };
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row row-cols-4 row-cols-md-4">
            {this.state.data.tiles
              .sort(() => Math.random() - 0.5)
              .map(mapHelper)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
