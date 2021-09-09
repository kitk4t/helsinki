import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ course }) => {
  return (
    <h1>{course.name}</h1>
  )
}

const Total = ({ course }) => {
  const sum = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
  return(
    <p>Number of exercises {sum}</p>
  ) 
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>    
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Part part={course.parts[0]} />
      <Part part={course.parts[1]} />
      <Part part={course.parts[2]} />
    </div>
  )
}

const Course = (props) => {
  const courses = props.course.parts
  const exercises = courses.map(course => course.exercises)
  // const totalExercises = exercises.reduce(
  //   (previousValue, currentValue) => previousValue + currentValue
  //   , 0)
  
  console.log(exercises)

return (
  <div>
    <h1>{props.course.name}</h1>
    
    {courses.map(course => <p key={course.id}>{course.name} {course.exercises}</p>)}

    <p>Total of {exercises.reduce(
    (previousValue, currentValue) => previousValue + currentValue
    , 0)} exercises</p>
  </div>
)
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

ReactDOM.render(<App />, document.getElementById('root'))