import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
)

const StatisticLine = (props) => (
  <tr>
    <td>{props.text}</td>
    <td>{props.displayNum}</td>
  </tr>
)

const Statistics = (props) => {
  let total = (props.good +props.neutral+ props.bad);
  let average = (props.good - props.bad)/total;
  let positive = (props.good/total)*100;

  if (total === 0) {
    return (
      <p>No feedback given.</p>
    )
  }

  return (
    <div>
      <h1>Statistics</h1>
      <table>
      <StatisticLine text="Good" displayNum={props.good}/>
      <StatisticLine text="Neutral" displayNum={props.neutral}/>
      <StatisticLine text="Bad" displayNum={props.bad}/>
      <StatisticLine text="Total" displayNum={total}/>
      <StatisticLine text="Average" displayNum={average}/>
      <StatisticLine text="Positive Percentage" displayNum={positive}/>
      </table>

    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="Good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="Bad"/>

      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App