import React, { Component } from "react";
import HeroCard from "./components/HeroCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import heroes from "./heroes.json";
import "./App.css";

class App extends Component {
  // Setting this.state.heroes to the heroes json array
  state = {
    heroes
  };

  // Map over this.state.heroes and render a HeroCard component for each hero object
  render() {
    return (
      <Wrapper>
        <Title>Heroes List</Title>
        {this.state.heroes.map(hero => (
          <HeroCard
            id={hero.id}
            key={hero.id}
            name={hero.name}
            image={require(`${hero.image}`)}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
