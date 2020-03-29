import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewQuestions extends Component {
  state = {
    optionOne: '',
    optionTwo: ''
  };

  render() {
    return (
      <div className="content">
        <div className="NewQuestion">
          <h2>Create New Question</h2>
          <div className="NewQuestion-box">
            Complete the questions:
            <h3>Would you rather ...</h3>
            <form className="NewQuestion-form">
              <input type="text" placeholder="Enter Option One Text Here" />
              <div class="or">OR</div>
              <input type="text" placeholder="Enter Option Two Text Here" />
              <button className="button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewQuestions;
