import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <label>
          Name of Keg: 
        </label>
        <input
          type='text'
          name='name'
          placeholder='Name of Keg' />
          <br/>

        <label>
          Brand name:
        </label>
        <input
          type='text'
          name='brand'
          placeholder='Brand Name' />
        <br />

        <label>
          Price of Keg:
        </label>
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <br />

        <label>
          Alcohol Percentage:
        </label>
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content' />
        <br />
        
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  onNewKegCreation: PropTypes.func,
  formSubmissionHandler: PropTypes.func,
  buttonText:PropTypes.string
};

export default ReusableForm;