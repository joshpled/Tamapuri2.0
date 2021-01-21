# Tamapuri 2.0
> Pet keeper application similar to the popular keychain pets of the late 90’s.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Future Developments](#future-developments)
* [Status](#status)
* [Inspiration](#inspiration)
* [License](#license)
* [Contact](#contact)

## General Info
In the late 90s, Bandai released to the world the “Tamagotchi!” It was AWESOME! I was only 7 years old, but they were wildly popular, many iterations came after, and by the early 2000s, I got to play with one! I was hooked. I still love the concept of a virtual pet to take care of. Probably because I don’t trust myself with a real pet. Especially after I heard a weird sound coming from my Tamagotchi and saw my frog like creature in angel wings to signify that I had in fact killed my pet. It was… traumatizing.

This is the inspiration behind Tamapuri! According to wikipedia, Tamagotchi, “the name is a portmanteau combining the two Japanese words tamago (たまご), which means “egg”, and uotchi (ウオッチ) “watch”.

Well since my project isn’t on a handheld device, or at least not a watch, I created my own portmanteau of Tamago and Apuri (アプリ) which means “App”!

## Screenshots
<div align="center"><img src="https://i.imgur.com/cKhbDXH.png" width="450px"></div>
<div align="center"><img src="https://i.imgur.com/4vF97sH.png" width="450px"></div>
<div align="center"><img src="https://i.imgur.com/z4vSM3h.png" width="450px"></div>


## Technologies
* Ruby on Rails - Ruby version 2.6.1 and Rails version 6.0.3 as API
* React - with Redux and Thunk
* PostgreSQL - version 12.4
* Bootstrap - version 4.5.3
* Framer Motion - for animations

## Setup
Fork and Clone then run:
```
rails db:create
rails db:migrate
// optional: rails db:seed
rails s
```

## Code Examples
```
const prod = {
	url: {
		BASE_URL: 'https://my-heroku-app.herokuapp.com/api/v1/',
		AUTH_URL: 'https://my-heroku-app.herokuapp.com/',
	},
};

const dev = {
	url: {
		BASE_URL: 'http://localhost:3090/api/v1/',
		AUTH_URL: 'http://localhost:3090/',
	},
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
```
```
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
	let data = {};
	console.log(data);
	switch (attribute) {
		case 'fun':
			return (data = {
				fun: newAmount(pet.fun, itemValue),
				hunger: effectAmount(pet.hunger, itemValue),
				energy: effectAmount(pet.energy, itemValue),
				hygiene: effectAmount(pet.hygiene, itemValue),
			});
		case 'hunger':
			return (data = {
				hunger: newAmount(pet.hunger, itemValue),
				fun: effectAmount(pet.fun, itemValue),
				energy: effectAmount(pet.energy, itemValue),
			});
		case 'health':
			return (data = {
				health: newAmount(pet.health, itemValue),
				hunger: effectAmount(pet.hunger, itemValue),
			});
		default:
			return (data = { ...pet });
	}
}
```
## Features
* Create multiple pets
* User Authentication

## Future Developments
* Mobile Application (Progressive Web App | React Native)
* Firebase implementation
* Get items from a store
* Play gambling games for money
* Change colors and styles of pets

## Status
IN DEVELOPMENT

## Inspiration
I loved tamagotchis! I had one frog I killed and I'll never forget it. Pet games became a personal iterest to me then. I want to create an alien like one where the items and mini games can be unique.

## License
Copyright (c) 2020 Joshua Perez Leduc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact
Created by Joshua Perez Leduc

 Tamapuri 2.0

Tamapuri 2.0 is the reincarnation of Tamapuri that was built with only Rails now built with React frontend and Rails backend. 

## Installation

After forking and cloning, you will need the backend as well: [https://github.com/joshpled/my-app-backend](https://github.com/joshpled/my-app-backend)

start the server for React with: 
```
npm install
npm start
```

The backend should use port 3090

```
bundle install

rails db:create 
rails db:seed

rails s -p=3090
```

## Usage

The app has user authentication via HTTP Cookies and Rails Sessions.
Simply create an account and via the Dashboard, Create a monster!


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)