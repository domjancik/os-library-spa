import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Libraries from './features/libraries/Libraries';
import LibraryEdit from './features/library/LibraryEdit/LibraryEdit';
import Frame from './layout/Frame/Frame';
import Header from './layout/Header/Header';

function App() {
  return (
    <div className="App">
      <Frame header={<Header />}>
        <Switch>
          <Route path="/library/:uid" component={LibraryEdit} />
          <Route path="/" component={Libraries} />
        </Switch>
      </Frame>
    </div>
  );
}

export default App;
