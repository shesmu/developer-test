import React, { useState } from 'react';
import { getScheduleData } from '../utils';

export const DatePicker: React.FC<{setDate: React.Dispatch<React.SetStateAction<Date>>, setScheduele: React.Dispatch<React.SetStateAction<Array<any>>>}> = ({setDate, setScheduele}) => {
    const [thisDate, setThisDate] = useState("");
    const castDate = (date: string) =>  new Date(Date.parse(date))

    const updateSchedule = () => {
        setDate(castDate(thisDate))
        getScheduleData(castDate(thisDate), setScheduele);
    }

    return <div>
        <label>
            Date:
            <input placeholder='04/02/2022' value={thisDate} onChange={(val) => {setThisDate(val.target.value)}} />
        </label>
        <button onClick={() => updateSchedule()}>Search</button>
    </div>
}