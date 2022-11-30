import React from 'react';
import logo from './logo.svg';
import './App.styles.sass';

import { Header, Sidebar, ProjectTable } from 'components';

function App() {
  return (
    <div className="App">
        <Header />
      <div className="root-wrapper">
        <Sidebar />
        <ProjectTable />
      </div>
    </div>
  );
}

export default App;
