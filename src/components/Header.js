import React from "react";
import kegDJ from '../img/KegDJ.jpg';

function Header() {
  const myStyledComponentStyles = {
    backgroundColor: '#3F0C03',
    textAlign: 'center',
    fontSize: '28px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: 'white'
    // paddingTop: '50px'
  };
  const ReduxTitleStyles = {
    color: 'red',
    fontSize: '24px',
    fontFamily: 'Granite',
    position: 'absolute'
  };
  return (
    <div style={myStyledComponentStyles}>
      <img src={kegDJ} width="400px"></img>
      <h1>Tap Room <span style={ReduxTitleStyles}>REDUX REMIX</span></h1>
      <img src={kegDJ} width="400px"></img>
    </div>
  );
}

export default Header;