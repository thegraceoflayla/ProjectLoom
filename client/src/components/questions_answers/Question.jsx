import React from 'react';
import Answer from './Answer.jsx';
import withClickTrackingQA from './withClickTrackingQA.jsx';
const AnswerWithClickTracking = withClickTrackingQA(Answer);

class Question extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      displayAll: false,
      liked: false
    };
  }

  displayAnswers (e) {
    this.state.displayAll === true ? this.props.clickTracker('hideAnswers') : this.props.clickTracker('displayAnswers');
    this.setState({ displayAll: !this.state.displayAll });
    this.props.displayMoreAnswers();
  }

  helpfulQuestion (e) {
    if (!this.state.liked) {
      this.props.clickTracker('helpfulQuestion');
      this.setState({ liked: true }, () => {
        this.props.likeQuestion(this.props.id);
      });
    }
  }

  reportQuestion (e) {
    this.props.clickTracker('reportQuestion');
    this.props.reportQuestion(this.props.id);
  }

  addAnswer (e) {
    e.preventDefault();
    this.props.aModalDisplay(this.props.id, this.props.question.question_body);
  }

  render () {
    return (
      <div className='Q'>
        <div className='Qblock'>
          <span className="Qb"><span className='feta-cheese-red'>Q:</span> {this.props.question
            ? this.props.question.question_body
            : 'No Questions Have Been Asked Yet!'
          }
          </span>
          <span className='Qsub subHeading' >
            Helpful?<button className='wordbtn' onClick={this.helpfulQuestion.bind(this)}>Yes</button>
              ({this.props.question.question_helpfulness})
              |  <button className='wordbtn' qid={this.props.id} onClick={this.addAnswer.bind(this)}>Add Answer</button>
              |   <button className='wordbtn' onClick={this.reportQuestion.bind(this)} >Report</button>
          </span>
        </div><br></br>

        {(Object.keys(this.props.question.answers).length > 0 && this.props.question.answers.length > 0 && this.state.displayAll === false)
          ? this.props.question.answers.slice(0, 2).map((el) =>
          <AnswerWithClickTracking
          id={el.id}
          key={el.id}
          answer={el}
          likeAnswer={this.props.likeAnswer}
          reportAnswer={this.props.reportAnswer} />)
          : this.state.displayAll
            ? this.props.question.answers.map((el) =>
            <AnswerWithClickTracking
            id={el.id}
            className='allAnswers'
            key={el.id} answer={el}
            likeAnswer={this.props.likeAnswer}
            reportAnswer={this.props.reportAnswer} />)
            : <div className='qaPlaceHolder' >Be the first to provide an answer!<br/> <br/></div> }

        {this.state.displayAll === true && <div><button className='wordbtn' onClick={this.displayAnswers.bind(this)}>Hide Answers</button><br></br><br></br></div>}

        {this.state.displayAll === false && Object.keys(this.props.question.answers).length > 2 && <div><button className='wordbtn' onClick={this.displayAnswers.bind(this)}>See More Answers</button><br></br><br></br></div>}

      </div>
    );
  }
}

export default Question;
