import React from 'react';
import './App.css';
import FormInput from "./Forms/Form";
import Config from "./Config/Config";

function App() {
  return (
    <div className='App'>
        <Config />
        <div className='block1'>
            <FormInput type={'text'} inputName={'ppp'} placeholder={'kkk'} />
        </div>
        <div className='block2'>
            block
        </div>
    </div>
  );
}

export default App;
