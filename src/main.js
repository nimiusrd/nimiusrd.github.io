const getColor = () => {
  const n = Math.floor(Math.random() * 256)

  return n.toString(16).toUpperCase().padStart(2, '0')
}
const changeColor = () => {
  document.body.style.backgroundColor = `#${getColor()}${getColor()}${getColor()}`
}

setInterval(changeColor, 50)
