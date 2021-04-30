import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingSellPint, onClickingDelete } = props;
  return (
    <React.Fragment>
      <hr />
      <h2>{keg.name}</h2>
      <p><em>{keg.brand}</em></p>
      <p><em>Alcohol Content: {keg.alcoholContent}%</em></p>
      <p><em>Price: ${keg.price}</em></p>
      <p><em>Pints remaining: {keg.pints}</em><button onClick={() => onClickingSellPint(keg)}>Sell Pint</button></p>

      <button onClick={props.onClickingEdit}>Update Keg</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
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