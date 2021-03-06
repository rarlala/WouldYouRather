import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleAddQuestion } from '../actions/questions';
import { Redirect } from 'react-router-dom';
// import { handleAddQuestionUser } from '../actions/users';

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  };

  handleChange_one = e => {
    this.setState({
      optionOneText: e.target.value
    });
  };

  handleChange_two = e => {
    this.setState({
      optionTwoText: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit complete');

    const { optionOneText, optionTwoText } = this.state;
    const { dispatch, id } = this.props;

    dispatch(handleAddQuestion(optionOneText, optionTwoText, id));
    // dispatch(handleAddQuestionUser(optionOneText, optionTwoText, id));

    this.setState(() => ({
      optionOneText: '',
      optionTwoText: '',
      toHome: true
    }));
  };

  render() {
    const { optionOneText, optionTwoText, toHome } = this.state;

    if (toHome === true) {
      return <Redirect to="/" />;
    }

    return (
      <div className="content">
        <div className="NewQuestion">
          <h2>Create New Question</h2>
          <div className="NewQuestion-box">
            Complete the questions:
            <h3>Would you rather ...</h3>
            <form className="NewQuestion-form" onSubmit={this.handleSubmit}>
              <input
                type="text"
                value={optionOneText}
                placeholder="Enter Option One Text Here"
                onChange={this.handleChange_one}
              />
              <div className="or">OR</div>
              <input
                type="text"
                value={optionTwoText}
                placeholder="Enter Option Two Text Here"
                onChange={this.handleChange_two}
              />
              <button
                className="button"
                type="submit"
                disabled={optionOneText === '' || optionTwoText === ''}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(NewQuestion);
