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
<div align="center"><img src="" width="450px"></div>
<div align="center"><img src="" width="450px"></div>
<div align="center"><img src="" width="450px"></div>


## Technologies
* Ruby on Rails - Ruby version 2.6.1 and Rails version 6.0.3 as API
* Javacscript - Node.js version 14.13.0
* PostgreSQL - version 12.4
* Bootstrap - version 4.5.3
* Ruby Gems: fast_jsonapi, faker, awesomeprint, puma, byebug, rack-cors, and bootsnap

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
const BASE_URL = "http://localhost:3000/api/v1/";
```

Inside index.js is the `BASE_URL` variable if you need to change it

```
document.addEventListener("DOMContentLoaded", () => {
```
```
  getAllCommunities(); //auto populates the list. If you didn't seed it, there should be nothing. Check console. 
```
```
  document.querySelector("#modal").innerHTML = createCommunityModal; // required for modal of create community to work. See communities.js
});
```
## Features
* User accounts and associations
* Create Events
* Comments

## Future Developments
* Mobile Application (Progressive Web App | React Native)
* Firebase implementation
* Location Based (Implement GPS local group search)

## Status
Project is: _in progress_, because it started as a school project and it's still in development.

## Inspiration
Meetup and Facebook Groups are wonderful tools for meeting people. However, since all of our phones can now show us the closest restaurants and stores, why not the closests gather of minds? I want to meet people who knit and want to have a knit party. I want to meet people in real life that share my interests. If "eyes are the window to your soul" then our phones are the window to our world.

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