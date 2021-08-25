import React from 'react';
import axios from 'axios';
import QuestionList from './QuestionList.jsx';
import QModal from './QModal.jsx';
import AModal from './AModal.jsx';
import Search from './Search.jsx';
import withClickTrackingQA from './withClickTrackingQA.jsx';
const QModalWithTracking = withClickTrackingQA(QModal);
const AModalWithTracking = withClickTrackingQA(AModal);
const SearchWithTracking = withClickTrackingQA(Search);

class QuestionsAnswers extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      id: this.props.id,
      questions: [],
      filteredQuestions: [],
      activeSearch: false,
      orgLength: 0,
      Qlength: 2,
      Alength: false,
      qModalStatus: false,
      aModalStatus: false,
      question_id: '',
      questionBody: '',
      qlDisplay: false,
      breakingError: false,
      errorMessage: null
    };

    this.submitSearch = this.submitSearch.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.displayMoreAnswers = this.displayMoreAnswers.bind(this);
    this.likeAnswer = this.likeAnswer.bind(this);
    this.likeQuestion = this.likeQuestion.bind(this);
    this.reportQuestion = this.reportQuestion.bind(this);
    this.reportAnswer = this.reportAnswer.bind(this);
    this.aModalDisplay = this.aModalDisplay.bind(this);
    this.displayMoreQuestions = this.displayMoreQuestions.bind(this);
    this.qModalDisplay = this.qModalDisplay.bind(this);
    this.loadProductPage = this.loadProductPage.bind(this);
  }

  componentDidUpdate (prevProps) {
    if (this.state.id !== this.props.id) {
      this.loadProductPage(this.props.id);
    }
  }

  componentDidMount () {
    this.loadProductPage(this.props.id);
  }

  loadProductPage (productId) {
    const url = window.location.href;
    axios.get(`${url}atelier/initialQA`, {
      method: 'GET',
      params: {
        product_id: productId
      }
    })
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({
          questions: orderedAnswers,
          orgLength: receivedLength,
          id: productId,
          Qlength: 2
        });
      })
      .catch((err) => {
        this.setState({ errorMessage: err, breakingError: true });
      });
  }

  submitSearch (searchPhrase) {
    const filterResults = [];
    if (searchPhrase === '') {
      this.setState({ filteredQuestions: this.state.questions });
    }

    if (searchPhrase.length < 3) {
      this.setState({ activeSearch: false });
      return;
    }

    this.state.questions.forEach((el) => {
      const lowerEl = el.question_body.toLowerCase();
      if (lowerEl.indexOf(searchPhrase) !== -1) {
        filterResults.push(el);
      }
    });
    this.setState({ filteredQuestions: filterResults, activeSearch: true });
  }

  sortQuestions (questions) {
    const newOrder = [];
    for (const key of questions) {
      newOrder.push([key.question_id, key.question_helpfulness]);
    }
    const finalOrder = questions.sort((a, b) => {
      return b.question_helpfulness - a.question_helpfulness;
    });
    return finalOrder;
  }

  sortAnswers (questions) {
    for (const q of questions) {
      let array = [];
      let sellerArray = [];
      for (const a in q.answers) {
        if (q.answers[a].answerer_name.toLowerCase() === 'seller') {
          sellerArray.push(q.answers[a]);
        } else {
          array.push(q.answers[a]);
        }
      }
      const finalOrder = array.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      const finalSellerOrder = sellerArray.sort((a, b) => {
        return b.helpfulness - a.helpfulness;
      });
      q.answers = sellerArray.concat(finalOrder);
    }
    return questions;
  }

  displayMoreQuestions () {
    this.props.clickTracker('displayMoreQuestions');
    this.setState({ Qlength: this.state.Qlength + 2, qlDisplay: true });
  }

  displayMoreAnswers () {
    this.setState({ Alength: !this.state.Alength });
  }

  likeAnswer (answerID) {
    const url = window.location.href;
    axios.put(`${url}atelier/likeAnswer`, {
      id: answerID,
      product: this.props.id
    })
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ questions: orderedAnswers, orgLength: receivedLength });
      })
      .catch((err) => {
        this.setState({ errorMessage: err, breakingError: true });
      });
  }

  likeQuestion (questionID) {
    const url = window.location.href;
    axios.put(`${url}atelier/likeQuestion`, {
      id: questionID,
      product: this.props.id
    })
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ questions: orderedAnswers, orgLength: receivedLength });
      })
      .catch((err) => {
        this.setState({ errorMessage: err, breakingError: true });
      });
  }

  reportAnswer (answerID) {
    const url = window.location.href;
    axios.put(`${url}atelier/reportAnswer`, {
      id: answerID,
      product: this.props.id
    })
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ questions: orderedAnswers, orgLength: receivedLength });
      })
      .catch((err) => {
        this.setState({ errorMessage: err, breakingError: true });
      });
  }

  reportQuestion (questionID) {
    const url = window.location.href;
    axios.put(`${url}atelier/reportQuestion`, {
      id: questionID,
      product: this.props.id
    })
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ questions: orderedAnswers, orgLength: receivedLength });
      })
      .catch((err) => {
        this.setState({ errorMessage: err, breakingError: true });
      });
  }

  qModalDisplay (e) {
    e.preventDefault();
    this.state.qModalStatus ? this.props.clickTracker('addQuestionClose') : this.props.clickTracker('addQuestionOpen');
    this.setState({ qModalStatus: !this.state.qModalStatus });
  }

  aModalDisplay (qid, questionBody) {
    this.state.aModalStatus ? this.props.clickTracker('addAnswerClose') : this.props.clickTracker('addAnswerOpen');
    this.setState({ aModalStatus: !this.state.aModalStatus, question_id: qid, questionBody: questionBody });
  }

  submitQuestion (formResults) {
    formResults.product_id = this.props.id;
    const url = window.location.href;
    axios.post(`${url}atelier/submitQuestion`, formResults)
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ qModalStatus: false, questions: orderedAnswers, orgLength: receivedLength });
      })
      .catch((err) => {
        this.setState({ errorMessage: err, breakingError: true });
      });
  }

  submitAnswer (formResults) {
    formResults.product_id = this.props.id;
    const url = window.location.href;
    axios.post(`${url}atelier/submitAnswer`, formResults)
      .then((response) => {
        const ordered = this.sortQuestions(response.data);
        const orderedAnswers = this.sortAnswers(ordered);
        const receivedLength = response.data.length;
        this.setState({ aModalStatus: false, questions: orderedAnswers, orgLength: receivedLength });
      })
      .catch((err) => {
        console.log('WE OUT HERE', err);
        this.setState({ errorMessage: err, breakingError: true });
      });
  }

  render () {
    return (
      <div className='QA'>
        <div id='Qtitle' className='Qtitle'><h3>Questions and Answers</h3></div><br></br>

        <div className='searchContainer'><SearchWithTracking submitSearch={this.submitSearch} /></div><br></br>

        <QuestionList
        questions={this.state.activeSearch ? this.state.filteredQuestions : this.state.questions}
        length={this.state.Qlength}
        displayMoreAnswers={this.displayMoreAnswers}
        likeAnswer={this.likeAnswer}
        likeQuestion={this.likeQuestion}
        reportQuestion={this.reportQuestion}
        reportAnswer={this.reportAnswer}
        aModalDisplay={this.aModalDisplay}
        qlDisplay={this.state.qlDisplay}
        />

        {this.state.qModalStatus === true && <QModalWithTracking errorMessage={this.state.errorMessage} breakingError={this.state.breakingError} submitQuestion={this.submitQuestion} qModalDisplay={this.qModalDisplay} />}

        {this.state.aModalStatus === true && <AModalWithTracking errorMessage={this.state.errorMessage} breakingError={this.state.breakingError} questionBody={this.state.questionBody} submitAnswer={this.submitAnswer} aModalDisplay={this.aModalDisplay} qid={this.state.question_id} />}

        { this.state.questions.length > 2 && this.state.orgLength > this.state.Qlength && !this.state.activeSearch && <button className='btn' onClick={this.displayMoreQuestions} >More Answered Questions</button>
        }

        { this.state.filteredQuestions.length > 2 && this.state.filteredQuestions.length > this.state.Qlength && this.state.activeSearch && <button className='btn' onClick={this.displayMoreQuestions} >More Answered Questions</button>
        }
        <button className='btn' onClick={this.qModalDisplay} >Add A Question + </button>

        {this.state.breakingError && <div className='qaError'>uh oh... don't tell Leslie we broke it... {JSON.stringify(this.state.errorMessage)}</div>}

        </div>
    );
  }
}

export default QuestionsAnswers;
