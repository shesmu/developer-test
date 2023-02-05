const addLeadingZero = (period: number): string => {
    return (0 + period.toString()).slice(-2)
}

export const validateDate = (date: Date) => {
    return date.toString() === "Invalid Date" ? null : date
}

export const getScheduleData = (date: Date, setSchedule: React.Dispatch<React.SetStateAction<Array<any>>>) => {
    const parsedDate = ((date: Date) => {
        const [month, day, year] = [
            date.getMonth(),
            date.getDate(),
            date.getFullYear(),
          ];

        return `${year}-${addLeadingZero(month + 1)}-${addLeadingZero(day)}`
    })(date)

    fetch('http://localhost:3000/getFlightsByDate', {        
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({date: parsedDate})}
    )
    .then((res) => {
        res.text()
        .then((flights) => {
            setSchedule(JSON.parse(flights))
        })
    })
    .catch((err) => {
        console.log(err)
    })
}