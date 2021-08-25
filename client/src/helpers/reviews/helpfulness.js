import axios from 'axios';

const increaseHelp = (reviewId) => {
  console.log(reviewId);
  axios.put('/atelier/reviews/helpful', {
    review_Id: reviewId
  });
};

export default increaseHelp;
