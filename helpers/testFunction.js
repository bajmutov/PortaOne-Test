const list = document.querySelector(".list");

// 0. Кількість чисел в файлі
function digitNumbers(array) {
  list.insertAdjacentHTML(
    "beforeend",
    `<li class="list-item new">Number of digits in the file : ${array.length}</li>`
  );
}

//  1. Знаходження максимального числа в файлі:
// - порівнюємо перших два числа і більше записуємо до змінної max
// - порівнюємо записане максимальне число з кожним наступним елементом масиву array і якщо якесь число більше максимального, то перезаписуємо його в змінну max.
function maxNumber(array) {
  let max = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > max) max = array[i];
  }
  console.log("max", max);
  list.insertAdjacentHTML(
    "beforeend",
    `<li class="list-item new">Max number : ${max}</li>`
  );
}

//  2. Знаходження мінімального числа в файлі:
// - порівнюємо перших два числа і менше записуємо до змінної min
// - порівнюємо записане число з кожним наступним елементом масиву array і якщо якесь число менше мінімального, то перезаписуємо його в змінну min.
function minNumber(array) {
  let min = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] < min) min = array[i];
  }
  console.log("min", min);
  list.insertAdjacentHTML(
    "beforeend",
    `<li class="list-item new">Min number: ${min}</li>`
  );
}

//  3. Знаходження медіани в файлі:
// - сортуємо масив за зростанням array.sort();
// - якщо в наборі чисел парна кількість елементів, то для визначення медіани повинна використовуватися півсума двох сусідніх значень
// - якщо непарна, то медіана - середній елемент відсортованого массиву
function medianNumber(array) {
  [...array].sort();
  const middle = Math.floor(array.length / 2);
  if (array.length % 2 === 0) {
    const mediana = (array[middle - 1] + array[middle]) / 2;
    console.log("mediana", mediana);
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="list-item new">Mediana: ${mediana}</li>`
    );
  } else {
    const mediana = array[middle];
    console.log("mediana", mediana);
    list.insertAdjacentHTML(
      "beforeend",
      `<li class="list-item new">Mediana: ${mediana}</li>`
    );
  }
}

//  4. Знаходження середнього арифметичного значення:
// - знаходимо суму елементів масиву sum
// - знаходимо кількість елементів масиву  array.length
// - визначаємо середнє арифметичне average поділивши суму всіх чисел на кількість елементів в масиві
function averageNumber(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
  }
  const average = sum / array.length;
  console.log("average", average);
  list.insertAdjacentHTML(
    "beforeend",
    `<li class="list-item new">Average: ${average}</li>`
  );
}

//5. Пошук найбільшої послідовністі чисел в файлі, яка збільшується:
// - перевіряємо чи наступне число більше попереднього, якщо більше, то записуємо його в масив currentSequence
// - якщо послідовність обривається, то currentSequence записується в maxSequence, записується в currentSequence=[array[i]] нове число і продовжуємо шукати наступну послідовність чисел
// - якщо в після всіх ітерацій довжина масиву currentSequence більша за довжину масиву maxSequence, то записуємо currentSequence в maxSequence - це і є необхідна послідовність
function maxIncreasingSequence(array) {
  let currentSequence = [];
  let maxIncrSequence = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > array[i - 1]) {
      currentSequence.push(array[i]);
    } else {
      if (currentSequence.length > maxIncrSequence.length) {
        maxIncrSequence = currentSequence;
      }
      currentSequence = [array[i]];
    }
  }

  if (currentSequence.length > maxIncrSequence.length) {
    maxIncrSequence = currentSequence;
  }

  console.log("maxIncreasingSequence", maxIncrSequence);
  list.insertAdjacentHTML(
    "beforeend",
    `<li class="list-item new">Maximum increasing sequence: ${maxIncrSequence}</li>`
  );
}

//6. Пошук найбільшої послідовністі чисел в файлі, яка зменьшується:
// - перевіряємо чи наступне число більше попереднього, якщо більше, то записуємо його в масив currentSequence
// - якщо послідовність обривається, то currentSequence записується в maxSequence, записується в currentSequence=[array[i]] нове число і продовжуємо шукати наступну послідовність чисел
// - якщо в після всіх ітерацій довжина масиву currentSequence більша за довжину масиву maxSequence, то записуємо currentSequence в maxSequence - це і є необхідна послідовність
function maxDecreasingSequence(array) {
  let currentSequence = [];
  let maxDecrSequence = [];

  for (let i = 0; i < array.length; i += 1) {
    if (array[i] < array[i - 1]) {
      currentSequence.push(array[i]);
    } else {
      if (currentSequence.length > maxDecrSequence.length) {
        maxDecrSequence = currentSequence;
      }
      currentSequence = [array[i]];
    }
  }

  if (currentSequence.length > maxDecrSequence.length) {
    maxDecrSequence = currentSequence;
  }

  // if (currentSequence.length === maxDecrSequence.length) {
  //   maxDecrSequence = [maxDecrSequence, currentSequence];
  // }

  console.log("maxDecreasingSequence", maxDecrSequence);
  list.insertAdjacentHTML(
    "beforeend",
    `<li class="list-item new">Maximum decreasing sequence: ${maxDecrSequence}</li>`
  );
}

export {
  digitNumbers,
  maxNumber,
  minNumber,
  medianNumber,
  averageNumber,
  maxIncreasingSequence,
  maxDecreasingSequence,
};
