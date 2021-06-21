import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {
  return (
    <React.Fragment>
      <h2>Click on a Keg to view its details</h2>
      <hr />
      {Object.values(props.kegList).map((keg) =>
        <Keg
          whenKegClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          alcoholContent={keg.alcoholContent}
          price={keg.price}
          id={keg.id}
          key={keg.id}
          pints={keg.pints} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelection: PropTypes.func
};

export default KegList;