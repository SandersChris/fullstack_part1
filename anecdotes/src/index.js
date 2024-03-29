import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdotes = ({anecdotes}) => <div>{anecdotes}</div>

const Button = ({text, onClick}) => 
    <button onClick={onClick}>{text}</button>

const Score = ({score}) => 
    <div>{score}</div>

const Header = ({header}) => <h1>{header}</h1>

const Top = ({top, name}) => {
    let largest = 0
    for (let t of top) 
        if (t > largest) largest = t;

    return (
        <div>
            <p>{name[top.indexOf(largest)]}</p>
            <p>has the most likes at: {largest}</p>
        </div>
        )
}
    
const App = () => {
  const [selected, setSelected] = useState(0)
  const [liked, setLiked] = useState(new Array(anecdotes.length).fill(0))

  const handleNext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleLike = (selected) => () => {
    const copy = [...liked]
    copy[selected]++;
    setLiked(copy)
  }

  return (
    <div>
        <Header header="Anecdote of the Day" />
            <Anecdotes anecdotes={anecdotes[selected]}/>
            <Score score={`has ${liked[selected]} votes`}/>
            <Button text="Next Anecdote" onClick={handleNext}/>
            <Button text="Like" onClick={handleLike(selected)} />
        <Header header="Top Anecdote" />
            <Top name={anecdotes} top={liked}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)


