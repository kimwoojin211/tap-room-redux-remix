import React from 'react';
import NewKegForm from './NewKegForm';
import KegList from './KegList';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const { name, brand, alcoholContent, price, id, pints } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      alcoholContent: alcoholContent,
      price: price,
      id: id,
      pints: pints
    }
    dispatch(action);
    this.setState({ formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({ selectedKeg: selectedKeg });
  }

  
  handleEditClick = () => {
    this.setState({ editing: true });
  }
  
  handleEditingKegInList = (kegToEdit) => {
    const { dispatch } = this.props;
    const { name, brand, alcoholContent, price, id, pints } = kegToEdit;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      alcoholContent: alcoholContent,
      price: price,
      id: id,
      pints: pints
    }
    dispatch(action);
    this.setState({ 
      editing: false,
      selectedKeg: null 
    });
  }
  
  handleSellingPint = (kegToEdit) => {
    if (kegToEdit.pints > 0){
      const { dispatch } = this.props;
      const { name, brand, alcoholContent, price, id, pints } = kegToEdit;
      const action = {
        type: 'ADD_KEG',
        name: name,
        brand: brand,
        alcoholContent: alcoholContent,
        price: price,
        id: id,
        pints: pints-1
      };
      dispatch(action);
      this.setState({ 
        selectedKeg: { ...kegToEdit, pints: kegToEdit.pints - 1 }
      });
    }
  }
  
  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_KEG',
      id: id
    }
    dispatch(action);
    this.setState({ selectedKeg: null });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.editing){
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    }
    else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail 
        keg={this.state.selectedKeg} 
        onClickingSellPint={this.handleSellingPint}
        onClickingEdit={this.handleEditClick}
        onClickingDelete={this.handleDeletingKeg}
        />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    masterKegList: state
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object
};

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;