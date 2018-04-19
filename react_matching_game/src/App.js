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
    topScore: 0,
    correctChoice: null
}

  userGuess = id => {
    if(this.state.chosenIds.indexOf(id) < 0) {
      this.setState({
        images: images,
        score: this.state.score + 1,
        correctChoice: true,
        chosenIds: [...this.state.chosenIds, id]
      });
    }
  };

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
            correctChoice={this.state.correctChoice}
            userGuess={this.state.userGuess}
            />
          ))}
        </ImagesContainer>
        <Footer />
    </div>
  )
};
}

export default App;
