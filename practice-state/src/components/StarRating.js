import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state


<<<<<<< HEAD
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
=======
  // Write a function that returns 5 Star components


  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props


>>>>>>> parent of df74ca3... solutioned
  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
      </ul>
    );
  }
}

export default StarRating;