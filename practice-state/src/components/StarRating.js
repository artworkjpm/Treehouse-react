import React, { Component } from "react";
import Star from "./Star";

class StarRating extends Component {
  state = {
    rating: 0
  };

  // Write a function that returns 5 Star components
  renderStars = () => {
    let stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          onHandleRating={() => this.handleUpdateRating(i + 1)}
          toggleClass={this.state.rating > i}
        />
      );
      console.log("i:" + i, "rating:" + this.state.rating);
    }
    console.log(stars);
    return stars;
  };
  //loop and push method to push stars to an array, render the stars to the dom

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props

  handleUpdateRating = rating => {
    if (this.state.rating === rating) {
      this.setState({ rating: 0 });
    } else {
      this.setState({
        rating: rating
      });
    }
  };

  render() {
    return <ul className="course--stars">{this.renderStars()}</ul>;
  }
}

export default StarRating;
