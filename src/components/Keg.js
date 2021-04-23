import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>      
      <h3>{props.brand} - {props.name}</h3>
      <p><em>{props.alcoholContent}</em></p>
      <p><em>{props.price}</em></p>
      <hr />
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  price: PropTypes.string
};

export default Keg;