import React from 'react';
import axios from 'axios';

function withClickTrackingQA (WrappedComponent) {
  return class ClickTracking extends React.Component {
    clickTracker (el) {
      const currentDate = new Date().toLocaleString();
      const url = window.location.href;
      axios.post(`${url}atelier/logInteraction`, {
        element: el,
        widget: 'Questions and Answers',
        time: currentDate
      })
        .then((response) => {
          console.log('BIG BROTHER IS WATCHING YOU CLICK', el);
        })
        .catch((err) => {
          console.log('interaction error', err);
        });
    }

    render () {
      return <WrappedComponent { ...this.props } clickTracker={ this.clickTracker } />;
    }
  };
}

export default withClickTrackingQA;
