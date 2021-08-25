import React from 'react';

export default function ComparisonModal (props) {
  const { toggleCompareProducts, productsToCompare } = props;
  const { thisProductDetails, masterProductDetails } = productsToCompare;

  const masterProductFeatures = {};
  masterProductDetails.features.forEach(feature => {
    const name = feature.feature;
    masterProductFeatures[name] = feature.value;
  });

  const thisProductFeatures = {};
  thisProductDetails.features.forEach(feature => {
    const name = feature.feature;
    thisProductFeatures[name] = feature.value;
  });

  const allFeatureNames = new Set([
    ...thisProductDetails.features.map(feature => feature.feature),
    ...masterProductDetails.features.map(feature => feature.feature)
  ]);

  const comparison = [...allFeatureNames].map((featureName, i) => {
    let masterProductFeature;
    let thisProductFeature;

    // compare masterproduct feature with current feature
    for (const [name, value] of Object.entries(masterProductFeatures)) {
      if (name === featureName) {
        masterProductFeature = value;
      }
    }

    // compare thisProductFeature with current feature
    for (const [name, value] of Object.entries(thisProductFeatures)) {
      if (name === featureName) {
        thisProductFeature = value;
      }
    }

    // compare matching features between products that are not null
    if (masterProductFeature) {
      if (masterProductFeature === thisProductFeature) {
        const copyFeatureName = featureName;
        featureName = `${masterProductFeature} ${copyFeatureName}`;
        masterProductFeature = '✔️';
        thisProductFeature = '✔️';
      }
    }

    if (!masterProductFeature) {
      masterProductFeature = <span className='empty'> x </span>;
    }

    if (!thisProductFeature) {
      thisProductFeature = <span className='empty'> x </span>;
    }

    return (
        <tr className='comparison-row' key={i}>
        <td className='feta-cheese-blue'> {masterProductFeature} </td>
        <td className='feature-name'> {featureName} </td>
        <td className='feta-cheese-blue'> {thisProductFeature} </td>
      </tr>
    );
  });

  return (
    <div className='comparison-modal'>
      <div className='modal-body'>
        <div className='comparison-modal-close' onClick={toggleCompareProducts}>❌</div>
        <div className='category-name'>Comparing..</div>
        <table className='modal-table'>
          <tbody>
            <tr>
              <th><h4>{masterProductDetails.name}</h4></th>
              <th className='feature-name'></th>
              <th><h4>{thisProductDetails.name}</h4></th>
            </tr>
            {comparison}
          </tbody>
        </table>
      </div>
    </div>
  );
}
