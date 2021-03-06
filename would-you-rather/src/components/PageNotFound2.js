import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class PageNotFound extends Component {
  render() {
    return (
      <div
        style={{
          'text-align': 'center',
          border: '1px solid #ccc',
          margin: '10px',
          padding: '10px',
          'border-radius': '10px',
        }}
      >
        <h1>404 PageNotFound</h1>
        <p>
          There is no corresponding question. <br></br>Please check again and
          proceed.
        </p>
        <button
          style={{
            'font-size': '15px',
            border: 'none',
            width: '100px',
            height: '30px',
            'border-radius': '3px',
            background: 'forestgreen',
            color: 'white',
          }}
          onClick={() => this.props.history.push('/')}
        >
          Home
        </button>
      </div>
    );
  }
}

export default PageNotFound;
