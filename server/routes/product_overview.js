const axios = require('axios');
const router = require('express').Router();
const bodyParser = require('body-parser');
const { apiToken, apiURL, SDC_API_URL } = require('./../../config.js');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/productStyles', (req, res) => {
  // axios.get('http://localhost:3000/test')
  // .then(data => {
  //   console.log('Data received from API', data.data);
  // })
  // .catch(err => {
  //   console.log('Err received from API',err);
  // });
  axios.get(`${SDC_API_URL}products/${req.query.productId}/styles`, {
    // headers: {
    //   Authorization: apiToken
    // }
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      console.log('error in axios', error);
      res.status(400).send('error in server app.get axios');
    });
});

router.get('/product', (req, res) => {
  axios.get(`${SDC_API_URL}products/${req.query.productId}`, {
    // headers: {
    //   Authorization: apiToken
    // }
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('error in axios product', err);
      res.status(400).send('error in app.get product info', err);
    });
});

// single query endpoint
router.get('/productData', (req, res) => {
  console.log(req);
  axios.get(`${SDC_API_URL}products/${req.query.productId}`, {
    // headers: {
    //   Authorization: apiToken
    // }
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log('error in axios product', err);
      res.status(400).send('error in app.get product info', err);
    });
});






router.post('/cart', (req, res) => {
  req.body['sku_id'] = parseInt(req.body['sku_id']);
  console.log(req.body);
  axios.post(`${apiURL}cart`, req.body, {
    headers: {
      Authorization: apiToken
    }
  })
    .then((response) => {
      console.log(`Response: ${response}`);
      res.status(200).send(response.data);
    })
    .catch((err) => {
      console.log(`Errors: ${err}`);
      res.status(400).send(err);
    });
});



module.exports = router;
