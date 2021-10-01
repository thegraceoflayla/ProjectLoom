/* eslint-disable camelcase */
const axios = require('axios');
const { apiToken } = require('./../../config.js');
const api = `http://localhost:5000/`

const getMaster = (product, sort) => {
  return axios.get(api + `master`,
    {params: {
      sort: sort,
      count: 100,
      product_id: product
    }}
  ).then((results) => {
    return results.data;
  });
};

const getReviews = (product, sort) => {
  return axios.get(api + 'reviews',
    {params: {
      sort: sort,
      count: 100,
      product_id: product
    }}
  ).then((results) => {
    return results.data;
  });
};
const getMeta = (product) => {
  return axios.get(api + `meta`, 
    {params: {
      product_id: product
    }}).then((results) => {
    return results.data;
  });
};
const putHelp = (reviewID) => {
  return axios.put(api + `helpful`, {
    
      review_id: reviewID
    
  });
};

const postReview = (obj) => {
  const { product_id, rating, summary, body, recommend, name, email, characteristics } = obj;
  const data = { product_id: product_id, rating: rating, summary: summary, body: body, recommend: recommend, name: name, email: email, characteristics: characteristics, photos: [] };
  return axios.post(api + 'review', data);
};

const putReport = (reviewID) => {
  console.log('PUT REPORT')
  return axios.put(api + `report`, {
   review_id: reviewID
  }).catch((err) => {console.log(err)});
};

const postInteraction = (element) => {
  const time = new Date();
  //console.log('date', time);
  return axios.post('http://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/interactions', {
    element: element,
    widget: 'Rating & Reviews',
    time: time
  }, {
    headers: {
      Authorization: apiToken
    }
  })//.then((res) => console.log(res))
  //.catch((err) => console.log(err));
};

module.exports.getReviews = getReviews;
module.exports.getMeta = getMeta;
module.exports.putHelp = putHelp;
module.exports.postReview = postReview;
module.exports.putReport = putReport;
module.exports.postInteraction = postInteraction;
module.exports.getMaster = getMaster;