import { useState, useEffect } from "react";

// function App() {
//   const [items, setItems] = useState([])
//   const [resourceType, setResourceType] = useState('posts')

//   //Everything inside this function is going to be executed every single time when app renders
//   useEffect(() => {
//     fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//       .then(response => response.json())
//       .then(json => setItems(json))
//   }, [resourceType])
//   //Whatever we pass into this array[] if it will change useEffect will run

//   return (
//     <>
//       <div>
//         <button onClick={() => setResourceType('posts')}>Posts</button>
//         <button onClick={() => setResourceType('users')}>Users</button>
//         <button onClick={() => setResourceType('comments')}>Comments</button>
//       </div>
//       <h1>{resourceType}</h1>
//       {items.map(item => {
//         return <pre>{JSON.stringify(item)}</pre>
//       })}
//     </>
//   );
// }

function App() {
  const [resourceType, setResourceType] = useState('posts')
  const [items, setItems] = useState([])

  useEffect(() => {
    console.log('resource changed')

    //it's like clean up before rerendering
    return () => {
      console.log('return from resource change')
    }
  }, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;
