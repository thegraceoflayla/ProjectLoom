/**
 * @jest-environment jsdom
 */

/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import QuestionsAnswers from '../components/questions_answers/QuestionsAnswers.jsx';
import QuestionList from '../components/questions_answers/QuestionList.jsx';
import Question from '../components/questions_answers/Question.jsx';
import Answer from '../components/questions_answers/Answer.jsx';
import QModal from '../components/questions_answers/QModal.jsx';
import AModal from '../components/questions_answers/AModal.jsx';
import Search from '../components/questions_answers/Search.jsx';

describe('Testing to confirm test infrastructure is working', () => {
  it('should add 1 and 1', () => {
    expect(1 + 1).toEqual(2);
  });
});

describe('Questions and Answers', function () {
  it('should render the Questions component without crashing', function () {
    const wrapper = shallow(<QuestionsAnswers />);
    expect(wrapper.hasClass('QA')).toBeTruthy();
  });
  // if('should display more questions when display more questions is clicked', function() {
  //   const wrapper = shallow(<QuestionsAnswers />);
  //   // wrapper.find('button').simulate('click');
  //   // expect(wrapper.)
  // })
});

describe('Questions List', function () {
  it('should render the Questions component without crashing', function () {
    const wrapper = shallow(<QuestionList questions={[{ body: 'test', question_id: 8768 }, { body: 'test2', question_id: 3453 }]} key={34534} />);
    expect(wrapper.hasClass('QL')).toBeTruthy();
  });
});

describe('Question', function () {
  it('should render the Questions component without crashing', function () {
    const wrapper = shallow(<Question question={{ body: 'testing', answers: { body: 'testing2' }, question_id: 4564 }} key={345345} />);
    expect(wrapper.hasClass('Q')).toBeTruthy();
  });
});

describe('Answer', function () {
  it('should render the Answer component without crashing', function () {
    const wrapper = shallow(<Answer answer={{body: 'test', date: '234252323234345', photos: [1, 2, 3] }}/>);
    expect(wrapper.hasClass('A')).toBeTruthy();
  });
});

describe('Question Modal', function () {
  it('should render the Question Modal without crashing', function () {
    const wrapper = shallow(<QModal productName={'test'} />);
    expect(wrapper.hasClass('modalContainer')).toBeTruthy();
  });

  it('should display error on form submit if no information is entered', function () {
    const wrapper = shallow(<QModal productName={'test'} />);
    wrapper.find('input').at(2).simulate('click');
    expect(wrapper.find('qaError')).toBeTruthy();
  });
});

describe('Answer Modal', function () {
  it('should render the Answer Modal without crashing', function () {
    const wrapper = shallow(<AModal productName={'test'} />);
    expect(wrapper.hasClass('modalContainer')).toBeTruthy();
  });

  it('should display error on form submit if no information is entered', function () {
    const wrapper = shallow(<AModal productName={'test'} />);
    wrapper.find('input').at(2).simulate('click');
    expect(wrapper.find('qaError')).toBeTruthy();
  });
});

describe('Search', function () {
  it('should render the Search component without crashing', function () {
    const wrapper = shallow(<Search />);
    expect(wrapper.hasClass('Qsearch')).toBeTruthy();
  });
});
