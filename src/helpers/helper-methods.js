
export function limitNumberWithinRange(num, min, max){
    const MIN = min || 0;
    const MAX = max || 100;
    const parsed = parseInt(num)
    return Math.min(Math.max(parsed, MIN), MAX)
  }

export function newAmount(curr,value){
      let calc = curr + value
    return limitNumberWithinRange(calc, 0, 100)
  }

  export function nameCapitalized(name){
  return name.charAt(0).toUpperCase() + name.slice(1)
  } 