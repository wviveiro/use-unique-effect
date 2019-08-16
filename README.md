# useUniqueEffect

Function based on React hook **useEffect** but without dependencies, which is run only once - as componentDidMount.

```jsx
import React, {useState} from 'react';
import useUniqueEffect from 'use-unique-effect';

function Playground() {
  const [a, setA] = useState('a');

  useUniqueEffect(() => {
    if (a === 'a') {
      console.log('a === a');
      setTimeout(() => {
        setA('b');
      }, 3000);
    } else {
        // Else will not happen, because this does not get executed twice
      console.log('a !== a');
    }
  });


  return (
    <div className="playground-area">
      <h1>Component Playgrond</h1>
      <hr />
      <p>{a}</p>
    </div>
  );
}

export default Playground;

```