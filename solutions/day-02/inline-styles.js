// Exercises: Inline Style
// Create a style object for the main JSX
const main_styles = {color:'red',backgroundColor:'white',fontSize:12}
// Create a style object for the footer and app JSX
const footer_styles = {backgroundColor:'green',fontSize:12}
const app_styles = {backgroundColor:'green',fontSize:12, margin:10}

// Add more styles to the JSX elements

const details = <div style={main_styles}>
    <h1> Name : James Bond</h1>
    <p> County : Kenya</p>
    <p> Title : Professor of politics</p>
    <p> Gender : Male</p>
    <p> Email : william@gmail.com</p>
    <p> Phone number : +254890765432</p>
</div>

// Write a footer JSX element

const footer = <div style={footer_styles}>
    <p> All rights reserved</p>
    <p> @2022 Alojzia technologies</p>
</div>