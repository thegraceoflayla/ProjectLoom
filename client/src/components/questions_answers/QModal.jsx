import React from 'react';

class QModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      name: '',
      email: '',
      badInput: false,
      missingFields: []
    };

    this.validateQuestionForm = this.validateQuestionForm.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.formInput = this.formInput.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }

  validateQuestionForm (formInputs) {
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
    console.log(missing);
    return missing;
  }

  validateEmail (email) {
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      return false;
    }
    return true;
  }

  submitQuestion (e) {
    if (e) { e.preventDefault(); };
    const missingInputFields = this.validateQuestionForm(this.state);
    if (!this.validateEmail(this.state.email)) {
      this.setState({ badInput: true, missingFields: ['valid email address'] });
      return;
    }
    if (!missingInputFields.length) {
      this.props.clickTracker('submitQuestion');
      this.props.submitQuestion(this.state);
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
        <button id='qModalClose' className='wordbtn' onClick={this.props.qModalDisplay}>Close</button>

        <div className='modalTitle'>Ask Your Question</div>
        <div className='modalSubTitle'>About the <strong>{productName}</strong></div><br/>

        <form>
          <label className='qaLabel' htmlFor='body' >Your Question*</label><br/>
          <textarea className='qaTextarea' type='text' name='body' maxLength='1000' onChange={this.formInput} required></textarea><br/><br/>

          <label className='qaLabel' htmlFor='name' >What is your nickname*</label><br/>
          <div className='subHeading'>For privacy reasons, do not use your full name or email address” will appear.</div>
          <input className='qaInput' type='text' name='name' maxLength='60' placeholder='Example: jackson11!' onChange={this.formInput} required></input><br/><br/>

          <label className='qaLabel' htmlFor='email' >Your Email*</label>
          <div className='subHeading' >For authentication reasons, you will not be emailed</div>
          <input className='qaInput' type='text' name='email' maxLength='60' placeholder='Example: jack@email.com' onChange={this.formInput} required></input><br/><br/>

          {this.state.badInput && <div className='qaError'>You must enter the following: {this.state.missingFields.map((field, index) => <span key={index}> [{field}] </span>)}</div>}
          <input type='submit' className='wordbtn qaInput' onClick={this.submitQuestion} />
        </form>

      </div>
      {this.props.breakingError && <div className='qaError'>uh oh... don't tell Leslie we broke it... {JSON.stringify(this.props.errorMessage)}</div>}
    </div>
    );
  };
};

export default QModal;
