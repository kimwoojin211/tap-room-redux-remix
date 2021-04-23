import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
  return (
    <React.Fragment>
      <hr />
      <h2>{keg.brand}</h2>
      <p><em>{keg.name}</em></p>
      <p><em>Alcohol Content: {keg.alcoholContent}%</em></p>
      <p><em>Price: ${keg.price}</em></p>
      <p><em>Pints remaining: {keg.pints}</em></p>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
};

export default KegDetail;