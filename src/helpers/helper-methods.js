export function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

export function limitNumberWithinRange(num, min, max){
    const MIN = min || 0;
    const MAX = max || 100;
    const parsed = parseInt(num)
    return Math.min(Math.max(parsed, MIN), MAX)
  }

export function newAmount(curr,calc){
    if (calc === '+'){
      let calculation = curr + getRandomInt(20)
    return limitNumberWithinRange(calculation, 0, 100)
    } else if (calc === '-') {
    let calculation = curr - getRandomInt(20)
    return limitNumberWithinRange(calculation, 0, 100)
    }
  }