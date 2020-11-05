function main() {

  let isOnEasy = false
  let easyVerButtonHtml = document.querySelector("#eLink").innerHTML

  document.querySelector("#eLink").addEventListener(
    "click",
    function (event) {
      let easyVerLink = document.querySelector("#eLink").href;
      let easyVerTon = getAllUrlParams(easyVerLink).ton;
      let step = parseInt(easyVerTon) * 2
      if (isOnEasy) {
        step = step * -1
        document.querySelector("#eLink").innerHTML = easyVerButtonHtml
      } else {
        document.querySelector("#eLink").innerText = "גרסה קלה - חזרה למקורית"
      }
      
      let chordElements = [...document.querySelectorAll("td.chords span")];
      
      for (i = 0; i < chordElements.length; i++) {
        let element = chordElements[i];
        let transposed = transpose.shift(
          element.innerText,
          step
        );
        element.innerText = transposed;
      }
      event.preventDefault();
      document
        .querySelector("#loading")
        .setAttribute("style", "display: hide;");
      isOnEasy = !isOnEasy
    },
    false
  );
}

main()