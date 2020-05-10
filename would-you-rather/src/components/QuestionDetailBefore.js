import React, { Component } from 'react';

class QuestionDetailBefore extends Component {
  render() {
    return <div></div>;
  }
}

function mapStateToProps({ questions }, props) {
  const { id } = props.match.params;
  const question = questions[id];

  return {
    id,
  };
}

export default connect(mapStateToProps)(QuestionDetailBefore);
