function main() {

  let isOnEasy = false
  let easyVerbutton = document.querySelector("#eLink") ? document.querySelector("#eLink") : Array.from(document.querySelectorAll('a.pannelB2.rToAddp')).pop();;
  let easyVerButtonHtml = easyVerbutton.innerHTML;
  easyVerbutton.removeAttribute("onclick");;

  easyVerbutton.addEventListener(
    "click",
    function (event) {
      let easyVerLink = easyVerbutton.href;
      let easyVerTon = getAllUrlParams(easyVerLink).ton;
      let step = parseFloat(easyVerTon) * 2
      if (isOnEasy) {
        step = step * -1
        easyVerbutton.innerHTML = easyVerButtonHtml
      } else {
        easyVerbutton.innerText = "גרסה קלה - חזרה למקורית"
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
      isOnEasy = !isOnEasy
    },
    false
  );
}

main()
