TO CREATE A NEW REACT PROJECT
1. install Node.js
2. run "npx create-vite"


General file guidelines

eslint = a tool to highlight problem in our javascript code (need to download the extension with the same name if you don't have it before)
index.html = all the html code of our project, which is just a div for React to use
package.json = list of all the packages used in the project and some overall information about the project , when new package is imported, a new line will automatically be added by "npm install" here
package-lock.json = save the version number of all packages in the project
vite.config.js = configures the build tool "Vite"
Vite is a build tool, it automatically "build" our code contained in every corner of the app to be runnable, it also comes with built-in web server so we can test our work

with nodeJS, to load external libraries, we use "import" keyword instead of using <script> tag
main.jsx = set up React to display the app onto the website (insert App component to the root div)
<StrictMode> = give us some additional checks and warnings when developing our app
index.css = css for the overall website
App.css = css for the App Components
in our App.css, the body style was not a style for the App component, it style the overall website, so we moved it into index.css


By default, any function we define in a file will only exist in that file, mean it cannot be used outside the file where it is defined
To use it outside of the file, we need to put "export" at the beginning of the function definition (see ChatInput component)

practice: import package at the top of the file, then js-file/components, finally other files (media, hooks, router,..)

Default export: useful if we want to export one thing from a file (ChatMessages), React encourages each components do only one thing (one module) so many developers prefer to write default export
