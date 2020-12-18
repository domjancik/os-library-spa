import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import { Libraries } from './features/libraries/Libraries';
import { BaseScene } from './shared/components/layout/BaseScene/BaseScene';

function App() {
  return (
    <BaseScene>
      <Route path={["/library/:uid", "/"]}>
        <Libraries />
      </Route>
    </BaseScene>
  );
}

export default App;
