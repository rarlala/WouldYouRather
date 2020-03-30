import React from 'react';
import { connect } from 'react-redux';
import { Tab } from 'semantic-ui-react';
import Question from './Question';

const panes = [
  {
    menuItem: 'Unanswered Questions',
    render: () => (
      <Tab.Pane attached={false}>
        <ul className="dashboard-list">
          <li>Test1</li>
        </ul>
      </Tab.Pane>
    )
  },
  {
    menuItem: 'Answered Questions',
    render: () => (
      <Tab.Pane attached={false}>
        <ul className="dashboard-list">
          <li>Test2</li>
        </ul>
      </Tab.Pane>
    )
  }
];

const TabTabularFalse = () => (
  <Tab menu={{ attached: false, tabular: false }} panes={panes}></Tab>
);

function mapStateToProps({ questions }) {
  return {
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    )
  };
}

export default connect(mapStateToProps)(TabTabularFalse);
