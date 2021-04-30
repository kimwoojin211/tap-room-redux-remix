import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingSellPint } = props;
  return (
    <React.Fragment>
      <hr />
      <h2>{keg.name}</h2>
      <p><em>{keg.brand}</em></p>
      <p><em>Alcohol Content: {keg.alcoholContent}%</em></p>
      <p><em>Price: ${keg.price}</em></p>
      <p><em>Pints remaining: {keg.pints}</em></p>
      <button onClick={props.onClickingEdit}>Update Keg</button>
      <button onClick={() => onClickingSellPint(keg.id)}>Sell Pint</button>
      <hr />
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingSellPint: PropTypes.func
};

export default KegDetail;