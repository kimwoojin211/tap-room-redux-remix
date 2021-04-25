import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegClicked(props.id)}>
        <h2>{props.name}</h2>
        <p><em>Made by: {props.brand}</em></p>
        <p><em>Pints remaining: {props.pints}</em></p>
        <hr />
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  price: PropTypes.string,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  pints: PropTypes.number
};

export default Keg;