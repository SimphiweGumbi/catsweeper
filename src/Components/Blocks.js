//IMPORTING necessary dependencies
import React from "react";
import Fail from "../pics/fail.png";
import Win from "../pics/win.png";
import Misc from "../pics/main.png";

//rendering the cells

export default class Blocks extends React.Component {
  //will get the value of the cell upon state changes
  getValue() {
    //if the cells are shown the cat reveled
    if (!this.props.value.isRevealed) {
      return this.props.value.isCat ? <img src={Win} alt="" /> : null;
    }
    //if the cell is revealed and a dog, then a dog will be shown
    if (this.props.value.isDog) {
      return <img src={Fail} alt="" className="image-loss" />;
    }
    //if the cell is revealed as a default door and is not a dog, then the cats closest to it will be revealed
    if (this.props.value.neighbour) {
      return <img src={Win} alt="" className="image-win" />;
    }
    //by default a closed door will be shown
    if (this.props.value.neighbour === 0) {
      return <img src={Misc} alt="" className="image-misc" />;
    }
    //return this.props.value.neighbour;
  }

  render() {
    //changes the className of each square upon randomisation of cats, doors, or default
    let className =
      "square" +
      (this.props.value.isRevealed ? " " : " hidden") +
      (this.props.value.isDog ? "is-dog" : " ") +
      (this.props.value.isCat ? "is-cat" : " ");
    //render the squares with data as props
    return (
      <div ref="square" onClick={this.props.onClick} className={className}>
        {this.getValue()}
      </div>
    );
  }
}
