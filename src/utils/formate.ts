export function formatDate(isoString: string | Date = '') {
  const date = new Date(isoString)

  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  return { date: `${day}/${month}/${year}`, time: `${hours}:${minutes}` }
}
