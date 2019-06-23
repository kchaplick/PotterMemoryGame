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
		clicked: [],
		currentScore: 0,
    highestScore: 0,
    isHidden: true
	}

	shuffleArr = (arr) => {
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr;
  }

	handleIconClick = (id) => {
		console.log(id)
		let shuffledIconArray = this.shuffleArr(this.state.icons);
		
		this.setState({ clicked: [...this.state.clicked, id] });

    if (this.state.clicked.includes(id)) {
					this.handleWrongGuess()
			}
			else {
					this.handleCorrentGuess(shuffledIconArray)
				}

			}



	handleWrongGuess = () => {
		this.setState({
			icons: icons,
			clicked: [],
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
