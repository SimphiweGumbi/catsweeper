// importing necessary dependencies
import React from "react";
import Board from "./Board";

//combinning the game
class Display extends React.Component {
  //initial state of our squares on the board (ie. it will be a 5x5 board with 10 dogs)
  state = {
    //providing 25 sqaures with dogs and cat
    height: 5,
    width: 5,
    dogs: 10,
  };

  render() {
    //render the state of our hard coded values
    const { height, width, dogs } = this.state;
    //rendering the functionality of the game
    return (
      <div className="display">
        <div className="display-board">
          {/*will pass in the height, width and num of dogs as props*/}
          <Board height={height} width={width} dogs={dogs} />
        </div>
      </div>
    );
  }
}

//exports for use in other files
export default Display;
