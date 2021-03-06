const getColor = () => {
  const n = Math.floor(Math.random() * 256)

  return n.toString(16).toUpperCase().padStart(2, '0')
}
const changeColor = () => {
  document.body.style.backgroundColor = `#${getColor()}${getColor()}${getColor()}`
}
const changeProgress = () => {
  const n = Math.floor(Math.random() * 100)

  document.getElementById('progress').value = n
}
const changePien = () => {
  const top = Math.floor(Math.random() * window.innerHeight)
  const left = Math.floor(Math.random() * window.innerWidth)
  const fontSize = Math.floor(Math.random() * 1000) + 16
  const elem = document.getElementById('pien')

  elem.style.fontSize = `${fontSize}px`
  elem.style.top = `${top}px`
  elem.style.left = `${left}px`
}

setInterval(changeColor, 50)
setInterval(changeProgress, 50)
setInterval(changePien, 50)
