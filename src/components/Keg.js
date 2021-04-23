import React from "react";

function Keg() {
  return (
    <React.Fragment>      
      <h3>{props.brand} - {props.name}</h3>
      <p><em>{props.alcoholContent}</em></p>
      <p><em>{props.price}</em></p>
      <hr />
    </React.Fragment>
  );
}

Ticket.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  alcoholContent: PropTypes.string.isRequired,
  price: PropTypes.string
};

export default Keg;