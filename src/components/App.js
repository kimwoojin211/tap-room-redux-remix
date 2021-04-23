import React from "react";
import Header from "./Header";
import KegList from "./KegList";

function App(){
  return (
    <React.Fragment>
      <Header />
      <KegControl />
    </React.Fragment>
  );
}

export default App;