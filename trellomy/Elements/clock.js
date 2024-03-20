
export const Clock = setInterval(() => {
const date = new Date()
const hours = date.getHours().toString().padStart(2, 0)
const mins = date.getMinutes().toString().padStart(2, 0)
const secs = date.getSeconds().toString().padStart(2, 0)
document.getElementById('clock').innerHTML = `${hours}:${mins}:${secs}`
}, 1000)