import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Canvas } from 'react-three-fiber';
import './App.css';
import { Libraries } from './features/libraries/Libraries';
import { LibraryEdit } from './features/library/LibraryEdit/LibraryEdit';
import { Box } from './shared/components/Box/Box';
import { BaseScene } from './shared/components/layout/BaseScene/BaseScene';

function App() {
  return (
    <BaseScene>
      <Libraries />
    </BaseScene>
  );
}

export default App;
