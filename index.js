import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// initializes generic buttons
const Button = ({ onClick, text}) => 
    <button onClick={onClick}>{text}</button>;

// creates generic h2 headers
const Header = ({text}) => <h2>{text}</h2>;

// creates generic stat type
const StatType = ({type, num}) => {
    if (isNaN(num) && type === "Average") 
        return <div>No feedback given</div>;
    else if ((num === 0 || isNaN(num)) && type !== "Average") 
        return <div></div>
    return <p>{type}: {num}</p>;
}

const Statistics = ({ good, neutral, bad, all, average, pos }) => {
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><StatType type="Good" num={good} /></td>
                    </tr>
                    <tr>
                        <td><StatType type="Neutral" num={neutral} /></td>
                    </tr>
                    <tr>
                        <td><StatType type="Bad" num={bad} /></td>
                    </tr>
                    <tr>
                        <td><StatType type="All" num={all} /></td>
                    </tr>
                    <tr>
                    <td><StatType type="Average" num={average} /></td>
                    </tr>
                    <tr>
                        <td><StatType type="Positive Percentage" num={pos} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const Buttons = ({handleGood, handleNeutral, handleBad}) => {
    return (
        <div>
            <Button text="Good" onClick={handleGood} />
            <Button text="Neutral" onClick={handleNeutral} />
            <Button text="Bad" onClick={handleBad} />
        </div>
    )
}
 
const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [average, setAverage] = useState(0)

    // handle all button clicks
    const handleGood = () => {
        setGood(good + 1);
        setAverage(average + 1);
    }

    const handleNeutral = () => {
        setNeutral(neutral + 1);
        setAverage(average);
    }

    const handleBad = () => {
        setBad(bad + 1);
        setAverage(average - 1);
    }

    const all = (good, neutral, bad) => { 
        return good + neutral + bad;
    }

    const positive = (good, neutral, bad) => {
        let total = good + neutral + bad;
        let positivePercent = (good / total) * 100

        return `${positivePercent.toFixed(2)}`
    }

    return (
      <div>
        <Header text="Give Feedback" />
            <Buttons handleGood={handleGood} 
                     handleNeutral={handleNeutral} 
                     handleBad={handleBad}/>

        <Header text="Statistics" />    
            <Statistics good={good} 
                        bad={bad} 
                        neutral={neutral} 
                        all={all(good, neutral, bad)} 
                        average={average / all(good,neutral, bad)}
                        pos={positive(good,neutral, bad)}/>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'));

