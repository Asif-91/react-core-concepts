import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks = ['First', 'Second','Third']

  return (
    <div className="App">
      <MovieCounter></MovieCounter>
      <Nayok name={nayoks[1]} age="56"></Nayok>
      <Nayok name={nayoks[2]}></Nayok>
      <Nayok name={nayoks[0]}></Nayok>
      <Nayok name="Four"></Nayok>
      <header className="App-header">
        
      </header>
    </div>
  );
}
function MovieCounter(){
  const [count, setCount] = useState(0);

  let handleClick = () => setCount(count + 1);

  console.log(count, setCount)
  return (
    <div>
      <button onClick={handleClick}>Add Movie</button>
      <h3>Number of movies: {count} </h3>
      <MovieDisplay movies={count + 5}></MovieDisplay>
      
      <MovieDisplay movies={count}></MovieDisplay>
      <MovieDisplay movies={count + 2}></MovieDisplay>
      <MovieDisplay movies={count}></MovieDisplay>
    </div>
  )
}
function MovieDisplay(props){
return <h4>Movies I have acted: {props.movies}</h4>
}
function Nayok(props){
  //console.log(props.name)
  const nayokStyle = {
    border: '2px solid purple',
    margin: '20px'
  }

  return (
    <div style={nayokStyle}>
      <h1 >Learning-{props.name}</h1>
  <h3>I have done 5 movies in {props.age || 30} years</h3>
    </div>
  )
  
}

export default App;
