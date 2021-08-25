import React from 'react';

class AModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      body: '',
      name: '',
      email: '',
      photos: [],
      badInput: false,
      missingFields: []
    };

    this.validateAnswerForm = this.validateAnswerForm.bind(this);
    this.formInput = this.formInput.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateAnswerForm (formInputs) {
    const missing = [];
    if (formInputs.body.length === 0) {
      missing.push('body');
    }
    if (formInputs.name.length === 0) {
      missing.push('name');
    }
    if (formInputs.email.length === 0) {
      missing.push('email');
    }
    return missing;
  }

  validateEmail (email) {
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      return false;
    }
    return true;
  }

  submitAnswer (e) {
    if (e) { e.preventDefault(); }
    const formOutput = {
      ...this.state,
      ...this.props
    };
    const missingInputFields = this.validateAnswerForm(this.state);
    if (!this.validateEmail(formOutput.email)) {
      this.setState({ badInput: true, missingFields: ['valid email address'] });
      return;
    }
    if (!missingInputFields.length) {
      this.props.clickTracker('submitAnswer');
      this.props.submitAnswer(formOutput);
    } else {
      this.setState({ badInput: true, missingFields: missingInputFields });
    }
  }

  formInput (e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render () {
    const productName = this.props.productName || document.getElementsByClassName('product_name info')[0].innerText;

    return (
      <div className='modalContainer'>
        <div className='modalContent'>
          <button id='aModalClose' className='wordbtn' onClick={this.props.aModalDisplay}>Close</button>
          <div className='qaModalTitle'>Submit Answer</div>
          <div className='qaModalSubTitle'>{productName}: {this.props.questionBody}</div><br/>

          <form>
            <label className='qaLabel' htmlFor='body' >Your Answer*</label><br/>
            <textarea className='qaTextarea' type='text' name='body' maxLength='1000' onChange={this.formInput}></textarea><br/><br/>

            <label className='qaLabel' htmlFor='name' >What is your nickname*</label><br/>
            <div className='subHeading'>For privacy reasons, do not use your full name or email address</div>
            <input className='qaInput' type='text' name='name' maxLength='60' placeholder='Example: jack543!'onChange={this.formInput}></input><br/><br/>

            <label className='qaLabel' htmlFor='email' >Your Email*</label>
            <div className='subHeading' >For authentication reasons, you will not be emailed</div>
            <input className='qaInput' type='text' name='email' maxLength='60' placeholder='Example: jack@email.com' onChange={this.formInput}></input><br/><br/>

            {/* <form>
            <label className='qaLabel' htmlFor='images'>Add Images</label>
            <input className='qaInput' type='file' name='images' onChange={this.formInput.bind(this)} /><br></br>
            <button type='submit' onSubmit={this.uploadPhoto}>Upload Photo</button>
            </form> */}

            {this.state.badInput && <div className='qaError'>You must enter the following: {this.state.missingFields.map((field, index) => <span key={index}> [{field}] </span>)}</div>}
            <input className='qaInput wordbtn' type='submit' onClick={this.submitAnswer} />
          </form>

        </div>
        {this.props.breakingError && <div className='qaError'>uh oh... don't tell Leslie we broke it... {JSON.stringify(this.props.errorMessage)}</div>}
    </div>
    );
  };
};

export default AModal;
