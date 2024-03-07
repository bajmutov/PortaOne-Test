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
      const result = e.target.result
        .split("\n")
        .filter((line) => line.trim() !== "")
        .map(Number);
      console.log("result", result);

      digitNumbers(result);
      maxNumber(result);
      minNumber(result);
      medianNumber(result);
      averageNumber(result);
      maxIncreasingSequence(result);
      maxDecreasingSequence(result);
    });

    fileReader.readAsText(file);
  }
});
