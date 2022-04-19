import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)

// at line 6 we're creating a root element out of an empty div present in
// public/index.html (our only HTML file)

// at line 7, on that root we're rendering our first REACT component (App)

// at the end of the day, this js file is taking our first React Component
// and putting it inside an empty div present in the only HTML template of the project

// most of the times, you can leave this index.js file as is
// <App /> is our first React Component invocation
