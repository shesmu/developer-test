import React from 'react';
import { validateDate } from '../utils';

export const SelectedDate: React.FC<{ date: Date }> = ({date}) => {
    const parseDate = (date: Date) => {
        return validateDate(date) 
        ? date.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })
        : ""
    }

    const parsedDate = parseDate(date);

    return <div>
        <p>{parsedDate}</p>
    </div> 
}