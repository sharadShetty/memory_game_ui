## Memory Game UI

### About

#### Beginning of the game: The player receives two sets of identical cards in random order.

#### Game round: Each round the player lifts two cards from the table. If both cards match - the cards disappear from the table. The player continues to guess card matches until the table is clear.

#### End of the game: The player is rated by the time elapsed from the beginning of the game and the error score.

#

### Getting started

#### 1. (Optional) Add the env variables by exporting it from your terminal in project directory (or) install [direnv](https://direnv.net/) or your preferred method for env variable management. Create a `.envrc` file and place the following environment variables (may need to run `direnv allow` after changes):

export REACT_APP_API_BASEURL="http://localhost:3001/"

#### 2. Run `yarn` to install dependencies

#### 3. Run `yarn start` and open [http://localhost:3000](http://localhost:3000) in your browser.

**Note: This project requires the [memory_game_api](https://github.com/sharadShetty/memory_game_api) for the api and is not independent.**

#

### Available Scripts

In the project directory, you can run:

#### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
