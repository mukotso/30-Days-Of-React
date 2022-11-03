// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import profilePhoto from './Images/img.png'

const buttonStyles = {
    margin: 5, color: 'white',
    backgroundColor: 'rgb(56,207,206)'
    , border: 'none',
    borderRadius: 10,
    padding: 10,
    fontSize: 16
}
const card = (
    <div>
        <img style={{height: 200, width: 200, borderRadius: '50%'}} src={profilePhoto} alt={'image'}/>
        <h3 style={{padding: 10}}>Kelvin Mukotso</h3>
        <h4>Senior Fullstack Engineer</h4>
    </div>
)

const skills = (
    <div style={{padding: 10}}>
        <h2>SKILLS</h2>
        <button style={buttonStyles}>HTML</button>
        <button style={buttonStyles}>CSS</button>
        <button style={buttonStyles}>SASS</button>
        <button style={buttonStyles}>JS</button>
        <button style={buttonStyles}>REACT</button>
        <button style={buttonStyles}>REDUX</button>
        <button style={buttonStyles}>NODE JS</button>
        <button style={buttonStyles}>MONGODB</button>
        <button style={buttonStyles}>PYTHON</button>
        <button style={buttonStyles}>FLASK</button>
        <button style={buttonStyles}>DJANGO</button>
        <button style={buttonStyles}>NUMPY</button>
        <button style={buttonStyles}>PANDAS</button>
        <button style={buttonStyles}>DATA ANALYSIS</button>
        <button style={buttonStyles}>MYSQL</button>
        <button style={buttonStyles}>GRAPHQL</button>
        <button style={buttonStyles}>D3.JS</button>
        <button style={buttonStyles}>GATSBY</button>
        <button style={buttonStyles}>DOCKER</button>
        <button style={buttonStyles}>HEROKU</button>
        <button style={buttonStyles}>GIT</button>
        <br/>

        <p>Joined on Aug 30,2021</p>

    </div>
)


// JSX element, app
const app = (
    <div style={{backgroundColor: 'white', margin: 20, padding: 25, borderRadius: 15}} className='app'>
        {card}
        {skills}
    </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
