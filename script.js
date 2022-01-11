const horse = document.getElementById('horse')

document.onkeydown = (e) => {
  if (e.code === 'KeyU' && horse.innerText !== '🦄') {
    horse.innerText = '🦄'
  }
}

document.onkeyup = (e) => {
  if (e.code === 'KeyU' && horse.innerText !== '🐴') {
    horse.innerText = '🐴'
  }
}