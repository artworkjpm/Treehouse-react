import React, { Component } from "react";
import Star from "./Star";

class StarRating extends Component {
  state = {
    rating: 0
  };

  handleRating = rating => {
    if (rating === this.state.rating) {
      this.setState({
        rating: 0
      });
    } else {
      this.setState({
        rating: rating
      });
    }
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
          toggleClass={this.state.rating > i}
        />
      );
    }
    return starArray;
  };

  render() {
    return <ul className="course--stars">{this.renderStars()}</ul>;
  }
}

export default StarRating;
