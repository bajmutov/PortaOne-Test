import {
  averageNumber,
  digitNumbers,
  maxDecreasingSequence,
  maxIncreasingSequence,
  maxNumber,
  medianNumber,
  minNumber,
} from "./helpers/testFunction.js";

document.getElementById("test").addEventListener("change", function (e) {
  let file = this.files[0];
  const fileReader = new FileReader();
  if (file) {
    fileReader.addEventListener("loadend", function (e) {
      const array = e.target.result
        .split("\n")
        .filter((line) => line.trim() !== "")
        .map(Number);
      console.log("array", array);

      digitNumbers(array);
      maxNumber(array);
      minNumber(array);
      medianNumber(array);
      averageNumber(array);
      maxIncreasingSequence(array);
      maxDecreasingSequence(array);
    });

    fileReader.readAsText(file);
  }
});
