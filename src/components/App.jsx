import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Notes from "./Notes";

function App() {
  return (
    <div>
      <Header title="Note Taking App"/>
      <div className="Note-Container">
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
        <Notes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
