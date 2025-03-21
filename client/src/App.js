import './App.css';
// import BucketList from './components/BucketList';
import React from 'react';
import HomePage from './components/homePage';
import AppRouter from './Router';

function App() {
  return (
    <div className="Magic-App">
      <AppRouter />
    </div>
  );
}

export default App;
