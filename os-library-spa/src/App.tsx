import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Libraries } from './features/libraries/Libraries';
import { LibraryEdit } from './features/library/LibraryEdit/LibraryEdit';
import Search from './features/search/Search';
import { Frame } from './layout/Frame/Frame';

function App() {
  return (
    <div className="App">
      <Frame header={<Search />}>
        <Switch>
          <Route path="/library/:uid" component={LibraryEdit} />
          <Route path="/" component={Libraries} />
        </Switch>
      </Frame>
    </div>
  );
}

export default App;
