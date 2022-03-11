import './App.scss';
import React from 'react';

//custom component
import AppBar from 'components/AppBar/AppBar';
import BoardBar from 'components/BoardBar/BoardBar';
import BoardContent from 'components/BoardContent/BoardContent';

function App() {
  return (
    <div className="managework-thanhnhadev-master">
      <AppBar/>
      <BoardBar/>
      <BoardContent/>
    </div>
  );
}

export default App;
