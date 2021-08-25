import React from 'react';

const AddDescription = (props) => {
  if (props.name === 'Size') {
    return (<div onChange={props.description} className='reviewRadio'>
      <div className='radios'>
        <label htmlFor='sizeSmall'>A size to small</label>
        <input type='radio' id='sizeSmall' name='Size' value='1'></input>
      </div>
      <div className='radios'>
        <label htmlFor='small'>1/2 size to small</label>
        <input type='radio' id='small' name='Size' value='2'></input>
      </div>
      <div className='radios'>
        <label htmlFor='perfect'>Perfect</label>
        <input type='radio' id='perfect' name='Size' value='3'></input>
      </div>
      <div className='radios'>
        <label htmlFor='sizeBig'>1/2 size to big</label>
        <input type='radio' id='sizeBig' name='Size' value='4'></input>
      </div>
      <div className='radios'>
        <label htmlFor='wide'>A size to wide</label>
        <input type='radio' id='wide' name='Size' value='5'></input>
      </div>
    </div>);
  }
  if (props.name === 'Comfort') {
    return (<div onChange={props.description} className='reviewRadio'>
      <div className='radios'>
        <label htmlFor='uncomfortable'>Uncomfortable</label>
        <input type='radio' id='uncomfortable' name='Comfort' value='1'></input>
      </div>
      <div className='radios'>
        <label htmlFor='sligthlyUncomfortable'>Sligthly Uncomfortable</label>
        <input type='radio' id='sligthlyUncomfortable' name='Comfort' value='2'></input>
      </div>
      <div className='radios'>
        <label htmlFor='ok'>Ok</label>
        <input type='radio' id='ok' name='Comfort' value='3'></input>
      </div>
      <div className='radios'>
        <label htmlFor='comfortable'>Comfortable</label>
        <input type='radio' id='comfortable' name='Comfort' value='4'></input>
      </div>
      <div className='radios'>
        <label htmlFor='comfortPerfect'>Perfect</label>
        <input type='radio' id='comfortPerfect' name='Comfort' value='5'></input>
      </div>
    </div>);
  }
  if (props.name === 'Length') {
    return (<div onChange={props.description} className='reviewRadio'>
      <div className='radios'>
        <label htmlFor='short'>Runs Short</label>
        <input type='radio' id='short' name='Length' value='1'></input>
      </div>
      <div className='radios'>
        <label htmlFor='slightlyShort'>Runs slightly Short</label>
        <input type='radio' id='slightlyShort' name='Length' value='2'></input>
      </div>
      <div className='radios'>
        <label htmlFor='lengthPerfect'>Perfect</label>
        <input type='radio' id='lengthPerfect' name='Length' value='3'></input>
      </div>
      <div className='radios'>
        <label htmlFor='slightlyLong'>Runs slightly long</label>
        <input type='radio' id='sligthlyLong' name='Length' value='4'></input>
      </div>
      <div className='radios'>
        <label htmlFor='lengthLong'>Runs Long</label>
        <input type='radio' id='lengthLong' name='Length' value='5'></input>
      </div>
    </div>);
  }
  if (props.name === 'Fit') {
    return (<div onChange={props.description} className='reviewRadio'>
      <div className='radios'>
        <label htmlFor='tight'>Runs tight</label>
        <input type='radio' id='tight' name='Fit' value='1'></input>
      </div>
      <div className='radios'>
        <label htmlFor='slightlyTight'>Rungs slightly tight</label>
        <input type='radio' id='slightlyTight' name='Fit' value='2'></input>
      </div>
      <div className='radios'>
        <label htmlFor='fitPerfect'>Perfect</label>
        <input type='radio' id='fitPerfect' name='Fit' value='3'></input>
      </div>
      <div className='radios'>
        <label htmlFor='fitLong'>Runs slightly long</label>
        <input type='radio' id='fitLong' name='Fit' value='4'></input>
      </div>
      <div className='radios'>
        <label htmlFor='fitLonger'>Runs Long</label>
        <input type='radio' id='fitLonger' name='Fit' value='5'></input>
      </div>
    </div>);
  }
  if (props.name === 'Quality') {
    return (<div onChange={props.description} className='reviewRadio'>
      <div className='radios'>
        <label htmlFor='poor'>Poor</label>
        <input type='radio' id='poor' name='Quality' value='1'></input>
      </div>
      <div className='radios'>
        <label htmlFor='belowAverage'>Below Average</label>
        <input type='radio' id='belowAverage' name='Quality' value='2'></input>
      </div>
      <div className='radios'>
       <label htmlFor='expected'>What I expected</label>
       <input type='radio' id='expected' name='Quality' value='3'></input>
      </div>
      <div className='radios'>
        <label htmlFor='great'>Pretty Great</label>
        <input type='radio' id='great' name='Quality' value='4'></input>
      </div>
      <div className='radios'>
        <label htmlFor='qualityPerfect'>Perfect</label>
        <input type='radio' id='qualityPerfect' name='Quality' value='5'></input>
      </div>
    </div>);
  }
  if (props.name === 'Width') {
    return (<div onChange={props.description} className='reviewRadio'>
      <div className='radios'>
        <label htmlFor='tooNarrow'>Too Narrow</label>
        <input type='radio' id='tooNarrow' name='Width' value='1'></input>
      </div>
      <div className='radios'>
        <label htmlFor='slightlyNarrow'>Slightly Narrow</label>
        <input type='radio' id='slightlyNarrow' name='Width' value='2'></input>
      </div>
      <div className='radios'>
        <label htmlFor='widthPerfect'>Perfect</label>
        <input type='radio' id='widthPerfect' name='Width' value='3'></input>
      </div>
      <div className='radios'>
        <label htmlFor='sligthlyWide'>Sligthly Wide</label>
        <input type='radio' id='sligthlyWide' name='Width' value='4'></input>
      </div>
      <div className='radios'>
        <label htmlFor='tooWide'>Too Wide</label>
        <input type='radio' id='tooWide' name='Width' value='5'></input>
      </div>
    </div>);
  }
};

export default AddDescription;
