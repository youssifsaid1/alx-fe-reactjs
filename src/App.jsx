import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile 
        name="Rowina Tamer Hemida" 
        age={25} 
        bio="A passionate React developer who loves coding and teaching." 
      />
      <Footer />
    </div>
  );
}

export default App;
