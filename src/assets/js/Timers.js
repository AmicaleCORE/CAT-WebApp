/*
 * Format:
 * YYYY: Years
 * MM: Months
 * DD: Days
 * hh: Hours
 * mm: Minutes
 * ss: Seconds
 * ms: Milliseconds
 */
export function parseTimeGap (current, target) {
  const distance = target.getTime() - current.getTime()
  if (distance <= 0) return null

  const years = Math.floor(distance / (1000 * 60 * 60 * 24 * 30.4375 * 12))
  const months = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.4375 * 12)) / (1000 * 60 * 60 * 24 * 30.4375))
  const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30.4375)) / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
  const milliseconds = Math.floor(distance % 1000)

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
    milliseconds
  }
}

export function timeParse (time, displays) {
  const yearDisplay = `${time.years} année${time.years > 1 ? 's' : ''}`
  const monthDisplay = `${time.months} mois${time.months > 1 ? 's' : ''}`
  const dayDisplay = `${time.days} jour${time.days > 1 ? 's' : ''}`
  const hourDisplay = `${time.hours} heure${time.hours > 1 ? 's' : ''}`
  const minuteDisplay = `${time.minutes} minute${time.minutes > 1 ? 's' : ''}`
  const secondDisplay = `${time.seconds} seconde${time.seconds > 1 ? 's' : ''}`
  const millisecondDisplay = `${time.milliseconds} milliseconde${time.milliseconds > 1 ? 's' : ''}`

  return `${displays.years ? yearDisplay + ' ' : ''}${displays.months ? monthDisplay + ' ' : ''}${displays.days ? dayDisplay + ' ' : ''}${displays.hours ? hourDisplay + ' ' : ''}${displays.minutes ? minuteDisplay + ' ' : ''}${displays.seconds ? secondDisplay + ' ' : ''}${displays.milliseconds ? millisecondDisplay + ' ' : ''}`
}
