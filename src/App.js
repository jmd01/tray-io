import React from 'react'
import EventEmitter from '@trayio/builder-squad-event-emitter'

import './App.css'

import Visualiser from './components/Visualiser'

function App() {
  return (
      <EventEmitter>
        <Visualiser />
      </EventEmitter>
  );
}

export default App
