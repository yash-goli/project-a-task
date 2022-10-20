import React from 'react';
import './App.css';
import { Header, Form } from './components';

function App() {
  return (
    <div className='container'>
      <Header />
      <main className='main'>
        <Form />
      </main>
    </div>
  );
}

export default App;
