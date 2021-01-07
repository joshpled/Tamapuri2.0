# Tamapuri 2.0

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