import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";

function App() {
  const myStyledComponentStyles = {
    backgroundColor: '#d3d3d3',
    width: '100%',
    height: '100%',
    position: 'absolute'
    // fontFamily: 'sans-serif',
  };
  return (
    <div style={myStyledComponentStyles}>
    <React.Fragment>
      <Header />
      <KegControl />
    </React.Fragment>
    </div>
  );
}

export default App;