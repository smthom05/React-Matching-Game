import React, { Component } from "react";
import NavBar from "./components/Nav-Bar";
import Jumbotron from "./components/Jumbotron";
import ImagesContainer from "./components/Images-Container";
import Image from "./components/Image";
import Footer from "./components/Footer";
import images from "./images.json";

class App extends Component {
  state = {
    images: images,
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
          {this.state.images.map(image => (
            <Image
            id={image.id}
            name={image.name}
            image={image.image}
            />
          ))}
        </ImagesContainer>

        <Footer />
    </div>
  )
};
}

export default App;
