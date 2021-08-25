import $ from 'jquery';

const getMeta = (productId, cb) => {
  $.ajax({
    type: 'GET',
    url: '/atelier/reviews/meta',
    data: {
      product_id: productId
    },
    success: (data) => {
      cb(data);
    }
  });
};

export default getMeta;
