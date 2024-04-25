# Austin Coding Academy

## JavaScript 211 Project: Hackathon

Today's challenge is to work as a team, divide the work, share a repo and get a working prototype up by the end of class.

### Today's Checklist

1. First build this project in the terminal
1. Then attach it to the DOM
1. Work through the challenge together
1. As always whiteboard it and make a code plan
1. Translate from English to pseudo code then to JavaScript
1. Write tests and test with `npm test main.js`
1. Convert the pseudo code to real JavaScript Code
1. Use `node main.js` to run the game
1. Once the terminal app works, build a GUI for your
1. Present to class
1. Turn in the URL to your repo and to your github.io, once for each person in your group


******

### Setup

1. From your project directory, run `npm i` to tell NPM to install all the
node modules we use in this class (see `package.json`)
1. Use your textEditor (VS Code) to change your files.
1. When you're finished `git status`, stage your file `git add .`, commit your changes `git commit -m "functions working"`, and push to
GitHub `git push`
    ```bash
    git status
    git add .
    git commit -m "Initial Commit"
    git push origin gh-pages
    ```

1. Now go to your forked repository on GitHub (at
  https://github.com/your-username/javascript-workbook). A little yellow box
  should have popped up asking you to make a Pull Request. Click to review.

1. Click "Create Pull Request"

1. Every time you make a change *and push to GitHub*, this PR will automatically
update. No need to do it more than once.


### Running the apps

Simply run `node path/to/file.js`

example `node 01week/rockPaperScissors.js`

### Running Tests

Tests are a great way to make sure your code works the way you planned it would,
and to make sure you don't break something in the future. We will be using them
to test our understanding of the lesson. It's also our main way to assign grades
for an assignment.

To run the tests on a file run `npm test path/to/file.js`, etc.

### Running the Linter

Simply run `npm run lint`

#### Running the Server

1. Run `npm start`
1. To break out of the server, press `ctrl` + `c`
