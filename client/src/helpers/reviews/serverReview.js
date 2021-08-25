import $ from 'jquery';

const getReviews = (productId, sort, cb) => {
  $.ajax({
    type: 'GET',
    url: '/atelier/reviews',
    data: {
      sort: sort,
      productId: productId
    },
    success: (results) => {
      cb(results);
    }
  });
};

export default getReviews;
