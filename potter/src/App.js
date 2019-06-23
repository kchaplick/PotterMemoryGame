import React, { Component } from "react";
import GuessCard from "./components/GuessCard";
import Container from "./components/Container";
import Title from "./components/Title";
import Score from "./components/Score";
import CardContainer from "./components/CardContainer";
import icons from "./icons.json";


class App extends Component {
	state = {
		icons,
		currentScore: 0,
    highestScore: 0,
    isHidden: true
	}


	handleIconClick = (id) => {

    let newIconArray = this.shuffle(this.state.icons);
		for (let i = 0; i < newIconArray.length; i++) {
			if (newIconArray[i].id === id) {
					this.handleWrongGuess()
				}
				else {
					newIconArray[i].clicked = true;
					this.handleCorrentGuess(newIconArray)
				}

			}
		}


	handleWrongGuess = () => {
		this.setState({
			icons: icons,
      currentScore: 0,
      isHidden: false
    });
	}

	handleCorrentGuess = (iconArray) => {
		let newCurrentScore = this.state.currentScore + 1;

		let newHighScore = this.state.highestScore;

		if (newCurrentScore > this.state.highestScore) {
			newHighScore = newCurrentScore;
		}

		this.setState({
			icons: iconArray,
			currentScore: newCurrentScore,
			highestScore: newHighScore
		});
	}

	shuffle = (arr) => {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
	}


	render() {

		return (
      <Container>
        <Title></Title>
        <Score
        currentScore={this.state.currentScore}
        highestScore={this.state.highestScore}>
        </Score>
        <CardContainer>
          {console.log(icons)}
					{this.state.icons.map(icon => (
						<GuessCard
							id={icon.id}
							key={icon.id}
							name={icon.name}
							image={icon.image}
							handleIconClick={this.handleIconClick}
						/>
					))}
				</CardContainer>
        </Container>
		);
  }
 
}


export default App;
