import React, {Component}from 'react';
import logo from './logo.svg';
import './App.css';
import player from "./playerpic.json";
import PlayerCard from "./components/PlayerCard"
import Wrapper from "./components/Wrapper"

class App extends Component{
  state = {
    message:"",
    topScore:0,
    score:0,
    player:player,
    clicked:[]
  }

  shufflArray = array =>{
    for(var i =array.length-1;i>0;i--){
      let j=Math.floor(Math.random()*(i+1));
      [array[i],array[j]]=[array[j],array[i]]
    }
    return array;
  }


selectPlayer = player=>{
  if(this.state.clicked.includes(player)){
    this.setState({
      score:0,
      clicked:[],
      message:"you lose"
    })
  }else{
    this.setState({
      clicked:this.state.clicked.concat([player]),
      score:this.state.score+1,
      message:"Next",
    })
  }

};

render(){
  return(
    <div className="App">
      <h1>Welcome to the game</h1>
      <h5>clicked on an image to win, you will lose if you clicked the same picture twice.</h5>
      <p>Score: {this.state.score}</p>
      <p>{this.state.message}</p>
      <Wrapper>
        {
          this.state.player.map(player=>(
            <PlayerCard
            selectPlayer={this.selectPlayer}
            player={player.player}
            image={player.image} />
          ))
        }
      </Wrapper>
    </div>
  )
      
}
}

export default App;
