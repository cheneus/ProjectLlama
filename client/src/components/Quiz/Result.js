import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
    <div className="card">
      <img className="card-img-top" src={props.resultImg} alt={props.quizResult} />
      <div className="card-body" style={{ "text-align": "center" }}>
        <button
          className="btn"
          type="submit"
          onClick={props.handleRetakeButton}
        >
        Retake Quiz
        </button>
        <button
          className="btn"
          type="submit"
          onClick={props.handleItinerary}
        >
        View Itinerary
        </button>
      </div>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired,
};

export default Result;
