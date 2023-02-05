import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Schedule } from './components/Schedule';
import { DatePicker } from './components/datePicker';
import { SelectedDate } from './components/SelectedDate';

const App = () => {
  const [date, setDate] = useState(new Date(Date.parse("")));
  const [schedule, setScheduele] = useState([]);

  return <> 
    <DatePicker setDate={setDate} setScheduele={setScheduele}/>
    <SelectedDate date={date} />
    <h2>Schedule</h2>
    <Schedule entries={schedule} />
  </>
}


ReactDOM.render(<App />, document.querySelector('#app'));
