export function formatDate(date: Date): string {
  const now = new Date()
  const timeDifference = now.getTime() - date.getTime()
  const oneHour = 60 * 60 * 1000
  const oneDay = 24 * oneHour
  const oneWeek = 7 * oneDay

  if (timeDifference < oneHour) {
    // Less than 1 hour ago, format as hh:mm
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
  } else if (timeDifference < oneDay) {
    // Less than 24 hours ago, format as hh:mm
    return `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`
  } else if (timeDifference < oneWeek) {
    // Less than a week ago, format as day of the week
    const daysOfWeek = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    return daysOfWeek[date.getDay()]
  } else {
    // More than 7 days ago, format as dd:mm:yyyy
    const day = String(date.getDate()).padStart(2, '0')
    const month = String(date.getMonth() + 1).padStart(2, '0') // Months are 0-indexed
    const year = date.getFullYear()
    return `${day}:${month}:${year}`
  }
}
