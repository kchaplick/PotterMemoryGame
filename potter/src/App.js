import React, { Component } from "react";
import GuessCard from "./components/GuessCard";
import Container from "./components/Container";
import Title from "./components/Title";
import Score from "./components/Score";


class App extends Component {
  // Setting this.state.friends to the friends json array
  // state = {
  //   clicked
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Container>
        <Title></Title>
        <Score></Score>
        {/* {this.state.friends.map(friend => (
          <GuessCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))} */}
      </Container>
    );
  }
}

export default App;
