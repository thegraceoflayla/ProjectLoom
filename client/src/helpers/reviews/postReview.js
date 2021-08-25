import axios from 'axios';

const postReview = (results) => {
  console.log('results', results);
  return axios.post('/atelier/reviews', results);
};

export default postReview;
