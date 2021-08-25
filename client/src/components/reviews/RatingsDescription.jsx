/* eslint-disable react/prop-types */
import React from 'react';

const RatingsDescription = (props) => {
  return (<div>
    {props.description === 'Fit' && (<div className='reviewDetail'>
      <span>Runs Tight</span>
      <span className='two'>Perfect</span>
      <span>Runs Long</span>
    </div>
    )}
    {props.description === 'Length' && (<div className='reviewDetail'>
      <span>Runs Short</span>
      <span className='two'>Perfect</span>
      <span>Runs Long</span>
    </div>
    )}
    {props.description === 'Quality' && (<div className='reviewDetail'>
      <span>Poor</span>
      <span className='two'>Average</span>
      <span>Perfect</span>
    </div>
    )}
    {props.description === 'Comfort' && (<div className='reviewDetail'>
      <span>Uncomfortable</span>
      <span className='two'>Ok</span>
      <span>Perfect</span>
    </div>
    )}
    {props.description === 'Wide' && (<div className='reviewDetail'>
      <span>Too Narrow</span>
      <span className='two'>Perfect</span>
      <span>Too Wide</span>
    </div>
    )}
    {props.description === 'Size' && (<div className='reviewDetail'>
      <span>Too small</span>
      <span className='two'>Perfect</span>
      <span>Too Wide</span>
    </div>
    )}
  </div>);
  // if (description === 'Fit' || description === 'Size') {
  //   return (<div className='reviewDetail'>
  //     <span>Too Small</span>
  //     <span className='two'>Perfect</span>
  //     <span>Too big</span>
  //    </div>);
  // }
  // if (description === 'Comfort') {
  //   return (<div className='reviewDetail'>
  //     <span>Poor</span>
  //     <span>Perfect</span>
  //    </div>);
  // }
  // if (description === 'Length') {
  //   return (<div className='reviewDetail'>
  //     <span>Too Short</span>
  //     <span className='two'>Perfect</span>
  //     <span>Too Long</span>
  //    </div>);
  // }
  // if (description === 'Fit' || description === 'Width') {
  //   return (<div className='reviewDetail'>
  //     <span>Too Loose</span>
  //     <span className='two'>Perfect</span>
  //     <span>Too Tight</span>
  //    </div>);
  // }
  // if (description === 'Quality') {
  //   return (<div className='reviewDetail'>
  //     <span>Poor</span>
  //     <span>Excelent</span>
  //    </div>);
  // }
  // return (<div className='reviewDetail'>
  //   <span >Poor</span>
  //   <span>Excelent</span>
  //  </div>);
};

export default RatingsDescription;
