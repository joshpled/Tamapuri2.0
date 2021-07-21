export function limitNumberWithinRange(num, min, max) {
  const MIN = min || 0;
  const MAX = max || 100;
  const parsed = parseInt(num);
  return Math.min(Math.max(parsed, MIN), MAX);
}

let arr = Array(6000).fill(3).concat(Array(3000).fill(2), Array(100).fill(1), Array(5000).fill(0));

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}

export function newAmount(curr, value) {
  const calc = curr + value;
  return limitNumberWithinRange(calc, 0, 100);
}

export function effectAmount(curr, value) {
  let randArr = shuffle(arr);
  let number = Math.floor(Math.random() * randArr.length);
  let index = randArr[number];
  let calc = curr;
  if (index !== 0) {
    calc = curr - value / randArr[number];
  }
  return limitNumberWithinRange(calc, 0, 100);
}

export function changeAttribute(attribute, itemValue, pet) {
  /* eslint-disable */
  let data = {};
  switch (attribute) {
    case "fun":
      return (data = {
        fun: newAmount(pet.fun, itemValue),
        hunger: effectAmount(pet.hunger, itemValue),
        energy: effectAmount(pet.energy, itemValue),
        hygiene: effectAmount(pet.hygiene, itemValue),
      });
    case "hunger":
      return (data = {
        hunger: newAmount(pet.hunger, itemValue),
        fun: effectAmount(pet.fun, itemValue),
        energy: effectAmount(pet.energy, itemValue),
      });
    case "health":
      return (data = {
        health: newAmount(pet.health, itemValue),
        hunger: effectAmount(pet.hunger, itemValue),
      });
    default:
      return (data = { ...pet });
  }
}
