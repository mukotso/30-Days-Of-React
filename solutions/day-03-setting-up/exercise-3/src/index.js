// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import technologies from './Images/img.png'

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'

const imageStyles = {width: 450, height: 400}
const author = {
    firstName: 'kelvin',
    lastName: 'Mukotso',
}
const date = 'Oct 2, 2024'

// JSX element, header
const header = (
    <header>
        <div className='header-wrapper'>
            <h1>{welcome}</h1>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>
                Instructor: {author.firstName} {author.lastName}
            </p>
            <small>Date: {date}</small>
        </div>
    </header>
)

const numOne = 3
const numTwo = 2

const result = (
    <p>
        {numOne} + {numTwo} = {numOne + numTwo}
    </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
    <p>
        {' '}
        {author.firstName} {author.lastName} is {age} years old
    </p>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const user = (
    <div>
        {/*<img src={asabenehImage} alt='asabeneh image' />*/}
    </div>
)

// JSX element, main
const main = (
    <main>
        <div className='main-wrapper'>
            <p>
                Prerequisite to get started{' '}
                <strong>
                    <em>react.js</em>
                </strong>
                :
            </p>
            <ul>{techsFormatted}</ul>
            {result}
            {personAge}
            {user}
        </div>
    </main>
)

const copyRight = 'Copyright 2020'

// JSX element, footer
const footer = (
    <footer>
        <div className='footer-wrapper'>
            <p>{copyRight}</p>
        </div>
    </footer>
)



const inputClassStyles= {background:'white', border:'none', padding:10, margin:10 , borderRadius:10}
const subscription = (
    <div style={{backgroundColor: 'rgb(192,230,243)', padding: 40}}>

        <center>
            <h1>SUBSCRIBE</h1>
            <p>Sign up with your email address to receive news and updates</p>
            <input style={inputClassStyles} placeholder={'firstname'}/>
            <input style={inputClassStyles} placeholder={'lastname'}/>
            <input style={inputClassStyles} placeholder={'email'}/>
            <br/>
            <button style={{backgroundColor: 'rgb(241,117,119)', margin:30, border:'none' , borderRadius:10, fontWeight:'bold', paddingLeft:90 , paddingRight:90, paddingTop:10, paddingBottom:10, color:'white'}}>Subscribe</button>
        </center>
    </div>
)

// JSX element, app
const app = (
    <div className='app'>
        {header}
        {main}
        {subscription}
        {footer}
        <h1>Exercise level-1</h1>
        <img src={technologies} alt={'frontend technologies'}/>
    </div>
)

const rootElement = document.getElementById('root')
// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
