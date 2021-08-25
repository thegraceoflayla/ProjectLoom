import React from 'react';

class Answer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      liked: false,
      photoDisplay: false,
      photoLink: ''
    };

    this.sellerCheck = this.sellerCheck.bind(this);
    this.displayFullScreenPhoto = this.displayFullScreenPhoto.bind(this);
  }

  helpfulAnswer (e) {
    if (!this.state.liked) {
      this.props.clickTracker('helpfulAnswer');
      this.setState({ liked: true }, () => {
        this.props.likeAnswer(this.props.id);
      });
    }
  }

  reportAnswer (e) {
    this.props.clickTracker('reportAnswer');
    this.props.reportAnswer(this.props.id);
  }

  dateToMonth (date) {
    if (date === '01') {
      return 'January';
    } else if (date === '02') {
      return 'February';
    } else if (date === '03') {
      return 'March';
    } else if (date === '04') {
      return 'April';
    } else if (date === '05') {
      return 'May';
    } else if (date === '06') {
      return 'June';
    } else if (date === '07') {
      return 'July';
    } else if (date === '08') {
      return 'August';
    } else if (date === '09') {
      return 'September';
    } else if (date === '10') {
      return 'October';
    } else if (date === '11') {
      return 'November';
    } else if (date === '12') {
      return 'December';
    }
  }

  generateDate (numbersDate) {
    const month = this.dateToMonth(numbersDate.slice(5, 7));
    const day = numbersDate.slice(8, 10);
    const year = numbersDate.slice(0, 4);
    return `${month} ${day}, ${year}`;
  }

  sellerCheck (name) {
    if (!name) {
      return;
    }
    if (name.toLowerCase() === 'seller') {
      return <span className='seller'>Seller</span>;
    } else {
      return <span>{name}</span>;
    }
  }

  displayFullScreenPhoto (e) {
    if (this.state.photoDisplay === true) {
      this.props.clickTracker('hideFullscreenAnswerPhoto');
    } else {
      this.props.clickTracker('showFullscreenAnswerPhoto');
    }
    this.setState({ photoDisplay: !this.state.photoDisplay, photoLink: e.target.src });
  }

  render () {
    return (
      <div className='A'>
        <div>
          <div className='Qblock'><span className='feta-cheese-red'>A:</span> <span className='mid' >{this.props.answer.body}</span>
          </div>
          {this.props.answer.photos.length > 0 &&
          this.props.answer.photos.map((photo) => <img className='qaPhoto' key={Math.random() * 100000} src={photo} onClick={this.displayFullScreenPhoto} loading='lazy' />)}
        </div>
        <div className='subHeading'>
          by: {this.sellerCheck(this.props.answer.answerer_name)}, {this.generateDate(this.props.answer.date.slice(0, 10))}   |   Helpful? <button className='wordbtn' onClick={this.helpfulAnswer.bind(this)} key={this.props.id} >Yes</button>({this.props.answer.helpfulness})   |   <button className='wordbtn' onClick={this.reportAnswer.bind(this)} >Report</button>
          </div>

        {this.state.photoDisplay === true && <div className='modalContainer'><img className='QAfullscreenPhoto' src={this.state.photoLink} onClick={this.displayFullScreenPhoto} loading='lazy' /></div> }

      </div>
    );
  }
}

export default Answer;
