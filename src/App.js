import logo from './logo.svg'
import './App.css'
import DemoComponent from './components/DemoComponent'

// this is a React Component!
// this syntax HTML-like it's actually NOT HTML...
// it's called JSX

// App is our first React Component
// a React Component can be as easy as a function returning some JSX

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <DemoComponent
          color="green"
          h1Content="HELLO"
          h2Content="Welcome to my app!"
        />
        <img src={logo} className="App-logo" alt="logo" />
        <h1>DEMO APP!</h1>
        <p>Hello Feb-22!</p>
        <DemoComponent
          color="red"
          h1Content="GOODBYE"
          h2Content="See you next time!"
        />
      </header>
    </div>
  )
}

export default App

// camelCase --> thisIsACamelCaseWord
// PascalCase --> ThisIsAPascalCaseWord

// let myName = 'Stefano'
