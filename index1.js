import React from 'react'
import ReactDOM from 'react-dom'


const Header = props => {
    return (
        <h1>{props.header}</h1>
    )
}

const Content = props => {
    return (
        <p>{props.name} {props.ex}</p>
    )

}

const Total = props => {
    return (
        <p>{props.total}</p>
    )

}

const App = () => {
    const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        }
      ]
    }
  
    return (
      <div>
            <Header header={course.name}/>
            <Content name ={course.parts[0].name} ex={course.parts[0].exercises}/>
            <Content name ={course.parts[1].name} ex={course.parts[1].exercises}/>
            <Content name ={course.parts[2].name} ex={course.parts[2].exercises}/>
            <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))
