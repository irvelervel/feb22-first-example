const SecondComponent = () => (
  <ul>
    {/* for every value for an attribute that is NOT a string,
      you have to wrap it in a pair of {} */}
    {/* style values in JSX are OBJECTS */}
    <li
      style={{
        color: 'red',
        // fontSize: '5em',
        // minHeight: '20px',
        // 'font-size': '5em',
      }}
    >
      First
    </li>
    <li>Second</li>
    <li>Third</li>
  </ul>
)

export default SecondComponent

// const stefano = {
//     my-name: 'Stefano'
// }
