/* eslint-disable react/prop-types */

import React from 'react';
import axios from 'axios';
import RelatedProduct from './RelatedProduct.jsx';
import YourOutfit from './YourOutfit.jsx';

class RelatedLists extends React.Component {
  constructor (props) {
    super(props);
    const cachedOutfits = JSON.parse(window.localStorage.getItem('outfits'));
    this.state = {
      masterProductId: null,
      masterProductDetails: null,
      relatedProducts: [],
      userOutfits: cachedOutfits || [],
      hasError: null,
      errorMessage: null
    };

    this.addToUserOutfits = this.addToUserOutfits.bind(this);
    this.removeFromUserOutfits = this.removeFromUserOutfits.bind(this);
  }

  componentDidMount () {
    if (this.state.masterProductId !== null) {
      this.fetchRelatedProducts();
    // console.log('COMPONENT DID MOUNT ======= ', this.state);
    }
  }

  componentDidUpdate (prevState) {
    // console.log('COMPONENT DID UPDATE ======= ');
    const { productId } = this.props;
    if (this.state.masterProductId !== productId) {
      this.setState(prevstate => ({
        masterProductId: productId
      }));
      // console.log('COMPONENT UPDATE INNER ===== ', this.state);
      this.fetchRelatedProducts();
    }
  }

  fetchRelatedProducts () {
    const { productId } = this.props;
    axios.get('/atelier/related-products', {
      method: 'GET',
      params: {
        product_id: productId
      }
    })
      .then((relatedProducts) => {
        const masterProduct = relatedProducts.data.length - 1;
        const masterProductDetails = relatedProducts.data.splice(masterProduct);
        this.setState({
          relatedProducts: relatedProducts.data,
          masterProductDetails: masterProductDetails
        });
        console.log('🛍️   FETCH RELATED LISTS STATE =================  ', this.state);
      })
      .catch((err) => {
        this.setState({
          hasError: true,
          errorMessage: err
        }, () => console.log('RELATED LISTS ', err));
      })
  }

  addToUserOutfits (e, index, list) {
    const outfit = this.state.[list][index];
    let newOutfitItem = true;
    this.state.userOutfits.forEach((existingOutfit, i) => {
      if (existingOutfit.id === outfit.id) {
        newOutfitItem = false;
      }
    });

    if (newOutfitItem) {
      this.state.userOutfits.push(outfit);
      this.setState({
        userOutfits: this.state.userOutfits
      }, () => window.localStorage.setItem('outfits', JSON.stringify(this.state.userOutfits))
      );
    } else {
      alert(`Ew, don't wear the same thing twice. Get something new. This item is already in your outfit`)
    }
  }

  removeFromUserOutfits (e, index) {
    const { userOutfits } = this.state;
    userOutfits.splice(index, 1);
    this.setState({
      userOutfits: this.state.userOutfits
    }, () => window.localStorage.setItem('outfits', JSON.stringify(this.state.userOutfits))
    );
  }

  render () {
    const { relatedProducts, userOutfits, masterProductDetails, hasError, errorMessage } = this.state;
    const { selectProduct } = this.props;

    if (hasError) {
      return (
        <div>
          <div className='error-boundary-related-lists'>
            <h2>🤖 Uh oh, wardrobe malfuction</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
                {errorMessage.toString()}
                <br />
              </details>
          </div>
          <section className='suggested-products'>
            <YourOutfit
            userOutfits={userOutfits}
            selectProduct={selectProduct}
            masterProductDetails={masterProductDetails}
            addToUserOutfits={this.addToUserOutfits}
            removeFromUserOutfits={this.removeFromUserOutfits}
            type={'userOutfit'}
            />
          </section>
        </div>
      )
    }

    return (

      <section className='suggested-products'>
        <RelatedProduct
          masterProductDetails={masterProductDetails}
          relatedProducts={relatedProducts}
          addToUserOutfits={this.addToUserOutfits}
          selectProduct={selectProduct}
          type={'relatedProduct'}
          />

        <YourOutfit
          masterProductDetails={masterProductDetails}
          userOutfits={userOutfits}
          addToUserOutfits={this.addToUserOutfits}
          selectProduct={selectProduct}
          removeFromUserOutfits={this.removeFromUserOutfits}
          type={'userOutfit'}
          />
      </section>
    );
  }
}

export default RelatedLists;
