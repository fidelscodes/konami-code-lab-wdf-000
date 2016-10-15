const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  var documentBody = document.body;
  var index = 0;

  documentBody.addEventListener('keydown', onKeyDownHandler);

  // unattached event handler
  // Will serve as the second argument to addEventListener
  function onKeyDownHandler(e) {
    const key = parseInt(e.detail || e.which);

    if (key === code[index]) {
      index++;

      if (index === code.length - 1) {
        alert("YOU ENTERED THE SUPER SECRET KONAMI CODE!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
}
