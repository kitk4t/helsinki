import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0,0,0,0,0,0,0])
  // const [most, setMost] = useState()

  const randomAssign = () => {
    const randomNum = Math.floor(Math.random() * 6);
    setSelected(randomNum)
  }

  const increaseVote = () => {
    const copy = [...points]
    copy[selected] +=1
    setPoints(copy)
  } 

  const DisplayMost = () => {
    const copy = [...points]
    const highest = Math.max(...copy);
    let phrase = '';
    let secondPhrase = '';

    if (highest === 0) {
      phrase = 'No votes yet.' }
    else {
      for (let i=0; i<7; i++ ) {
      if (copy[i] === highest) {
      phrase = anecdotes[i]
      secondPhrase = 'This has ' + highest + ' votes.'
      }}
    }

    return (
      <>
      <p>{phrase}</p>
      <p>{secondPhrase}</p>
      </>
    )
  }


  return (
    <div>
    <h1>Anecdote of the day</h1>
    <p>{anecdotes[selected]}</p>
    <p>This anecdote has {points[selected]} votes.</p>

    <Button handleClick={() => increaseVote()} text="vote"/>
    <Button handleClick={() => randomAssign()} text="next anecdote"/>

    <h1>Anecdote with most votes</h1>
    <DisplayMost/>
    
    </div>
  )
}

export default App