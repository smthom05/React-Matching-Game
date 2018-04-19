import React, { Component } from "react";
import NavBar from "./components/Nav-Bar";
import Jumbotron from "./components/Jumbotron";
import ImagesContainer from "./components/Images-Container";
// import Image from "./components/Image";
import Footer from "./components/Footer";

class App extends Component {
  state = {
  pics: (shuffleArr(pics)),
  chosenIds: [],
  score: 0,
  highScore: 0,
  correctChoice: null
}
  render() {
    return (
      <div>
        <NavBar />
        <Jumbotron />
        <ImagesContainer>
        <Image />
        <ImagesContainer />
        <Footer />
    </div>
  )
};
}

export default App;
