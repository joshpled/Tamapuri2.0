export function limitNumberWithinRange(num, min, max) {
	const MIN = min || 0;
	const MAX = max || 100;
	const parsed = parseInt(num);
	return Math.min(Math.max(parsed, MIN), MAX);
}

export function newAmount(curr, value) {
	let calc = curr + value;
	return limitNumberWithinRange(calc, 0, 100);
}

export function changeAttribute(attribute, itemValue, pet) {
  let data = {};
  console.log(data)
	switch (attribute) {
		case 'boredom':
			return (data = {
				boredom: newAmount(pet.boredom, itemValue),
				hunger: newAmount(pet.hunger, itemValue),
			});
		case 'hunger':
			return (data = {
				hunger: newAmount(pet.hunger, itemValue),
				boredom: newAmount(pet.boredom, itemValue),
			});
		case 'health':
			return (data = {
				health: newAmount(pet.health, itemValue),
				hunger: newAmount(pet.hunger, itemValue),
			});
		default:
			return (data = { ...pet });
	}
}
