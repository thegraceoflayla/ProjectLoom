/* eslint-disable react/prop-types */
import React from 'react';
import axios from 'axios';

const clickTracker = (WrappedComponent, module) => {
  return class trackClicks extends React.Component {
    handleClick (e) {
      const target = e.target;
      const data = { time: new Date(), module: module };
      if (target.id) {
        data.element = `#${target.id}`;
      } else if (target.classList) {
        data.element = target.classList;
      }
      axios.post('atelier/interactions', data)
        .then((res) => {
          console.log('success in posting clicks', res);
        })
        .catch((err) => {
          console.log('error in posting clicks', err);
        });
    }

    render () {
      return (<div onClick={this.handleClick}>
        <WrappedComponent {...this.props} />
      </div>);
    }
  };
};

export default clickTracker;
