import React, {useState} from 'react';
import useUniqueEffect from './lib';
import './playgrond.scss';
import './styles/index.scss';

function Playground() {
  const [a, setA] = useState('a');

  useUniqueEffect(() => {
    if (a === 'a') {
      console.log('a === a');
      setTimeout(() => {
        setA('b');
      }, 3000);
    } else {
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
