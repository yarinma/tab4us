x = [...document.querySelectorAll("td.chords span")].map(item => item.innerText)

for(i=0; i<y.length; i++) {
  let element = y[i]
  let transposed = transpose.shift(element.innerText, 3)
  element.innerText = transposed
}

document.querySelector("#eLink").href


easyVerLink = document.querySelector("#eLink").href
easyVerTon = getAllUrlParams(easyVerLink).ton
chordElements = [...document.querySelectorAll("td.chords span")]
for(i=0; i<chordElements.length; i++) {
  let element = chordElements[i]
  let transposed = transpose.shift(element.innerText, parseInt(easyVerTon))
  element.innerText = transposed
}

document.querySelector("#eLink").addEventListener("click", function(event) {
  easyVerLink = document.querySelector("#eLink").href
  easyVerTon = getAllUrlParams(easyVerLink).ton
  chordElements = [...document.querySelectorAll("td.chords span")]
  for(i=0; i<chordElements.length; i++) {
    let element = chordElements[i]
    let transposed = transpose.shift(element.innerText, parseInt(easyVerTon))
    element.innerText = transposed
  }
  event.preventDefault()
  document.querySelector("#loading").setAttribute("style", "display: hide;")
}, false)