import React from 'react';
import ReactDOM from 'react-dom';
import { Schedule } from './components/Schedule';

const App = () => (
  <>
    <h2>Schedule</h2>
    <Schedule entries={[]} />
  </>
);

ReactDOM.render(<App />, document.querySelector('#app'));
