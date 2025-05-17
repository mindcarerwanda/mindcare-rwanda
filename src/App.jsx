import React from 'react';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem', color: '#1c3d2f' }}>
        <h1>Welcome to MindCare Rwanda</h1>
        <p>Access mental health resources, book therapy, and contact support.</p>
        <p>Shyira serivisi zita ku mutekano w'ubwonko, utegure inama n’abaganga, cyangwa twandikire.</p>
      </main>
    </div>
  );
};

export default App;