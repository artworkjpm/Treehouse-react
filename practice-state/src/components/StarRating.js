import React, { Component } from "react";
import Star from "./Star";

class StarRating extends Component {
  state = {
    rating: 0
  };

  renderStars = () => {
    let starArray = [];
    for (let i = 0; i < 5; i++) {
      starArray.push(
        <Star
          key={i}
          onHandleRating={() => {
            this.handleRating(i + 1);
          }}
        />
      );
    }
    return starArray;
  };

  handleRating = rating => {
    this.setState({
      rating: rating
    });
  };
  render() {
    return <ul className="course--stars">{this.renderStars()}</ul>;
  }
}

export default StarRating;
