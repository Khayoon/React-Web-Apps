import { useState } from 'react'


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increment = (state, setState) => () => setState(state+ 1)
  return (
    <div>
      <h1> give feedback</h1>
      <Button onClick={increment(good, setGood) }
      text="good"
      />
      
      <Button onClick={increment(neutral, setNeutral) }
      text="neutral"
      /> 

      <Button onClick={increment(bad, setBad) }
      text="bad"
      />
      
      <Statistics bad={bad} neutral={neutral} good={good}/>
      
    </div>
  )
}
const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>
const StatisticLine = ({text, value}) => {
  <tr> 
    <td>{text}</td>
    <td>{value}</td>
  </tr>
}
const Statistics = ({good, bad, neutral}) => {
  const sum =  good + bad + neutral
  const averageClick = (good - bad) / sum
  const positiveSum = `${(good/sum)*100} % `

  return sum > 0 ? (
    <> 
      <h2>statistics</h2>
      <table>
        <tbody>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={sum}/>
        <StatisticLine text="average" value={averageClick}/>
        <StatisticLine text="positive" value={positiveSum}/>
        </tbody>
      </table>
     </>
  ) : 
    (
    <p> No feedback given</p>
    )
  }
    
  
export default App
