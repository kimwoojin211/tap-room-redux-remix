import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name of Keg' />
        <input
          type='text'
          name='brand'
          placeholder='Brand Name' />
        <input
          type='text'
          name='price'
          placeholder='Price' />
        <input
          type='text'
          name='alcoholContent'
          placeholder='Alcohol Content' />
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