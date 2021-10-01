import $ from 'jquery';

const getReviews = (productId, sort, cb) => {
  $.ajax({
    type: 'GET',
    url: '/atelier/master',
    data: {
      sort: sort,
      productId: productId
    },
    success: (results) => {
      console.log('fontback', results)
      cb(results);
    }
  });
};

export default getReviews;
