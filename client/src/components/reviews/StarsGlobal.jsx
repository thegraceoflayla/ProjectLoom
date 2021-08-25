/* eslint-disable react/prop-types */
import React from 'react';
import Rating from '@material-ui/lab/Rating';

class StarsGlobal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    return (
    <div className='StarsGlobal'>
      <Rating value={this.props.value} precision={0.1} readOnly/>
    </div>);
  }
}
export default StarsGlobal;
