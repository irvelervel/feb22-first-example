// conventional rules for a new React component:
// 1) write its name in PascalCase
// 2) use .jsx an the extension
// 3) the name of the function should be the name of the component itself

// a React Component can be as easy as a function returning JSX

// SHORTHAND WAY:
// const DemoComponent = () => (
//     <>
//       {/* <></> <-- this is called a REACT FRAGMENT */}
//       <h1 className="first-heading">HELLO</h1>
//       <h2>BELOW</h2>
//     </>
//   )

import SecondComponent from './SecondComponent'

// object destructuring in action:
// const DemoComponent = ({ color, h1Content, h2Content }) => {

const DemoComponent = (props) => {
  // props is ALWAYS an object, if you're not passing any prop
  // it will be an empty object
  // but if you ARE passing props, like h1Content, it will be found
  // as a property of that props object
  console.log('PROPS IS', props)
  return (
    <>
      {/* <></> <-- this is called a REACT FRAGMENT */}
      {/* I want to put here the value of h1Content */}
      <h1
        style={{
          color: props.color,
        }}
      >
        {props.h1Content}
      </h1>
      <h2>{props.h2Content}</h2>
      <SecondComponent />
    </>
  )
}

export default DemoComponent
// you can get just ONE default export per file

// props are the dynamic parts of React Components
// you can define them just like attributes on HTML tags
// their values can be retrieved from the first argument of the function
