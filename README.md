# Angular Becky CMS

##Project No Longer Maintained
This project has been abandoned for a web api with more control. The project has been renamed to BeckyCore and is being buuilt with .net core. You can still use this repo to bootstrap a basic cms with simple text update functionality or expand it for your needs.

##Version 0.1.6
The shell is setup and working properly and you can start building apps on your local environment, but this version is not ready for production yet.

##Becky?
Becky CMS is a simple cms app built using angular. It is designed with simplicity and ease in mind. It allows users to update specific content in a database that you define and build inside of the angular app. The becky cms simply holds the admin panel and gives you a starting point for creating an angular app with cms option.

##Tooling
Becky CMS uses loopback node api with webpack front end. If you have never used loopback or angular you should still be able to find your way around the app. Becky cms takes care of all the setup and allows you to jump straight into building your site. It includes a number of other build tools that are not required in order to run becky cms, but were chosen to ease the build process. For example less and pug compilers are included, but you do not have to use them. Standard css and html will work as well.

##Getting Started

Open your terminal and go into the root of the app.
`cd becky`

Install the dependencies.
`npm install`

Start the node api server.
`npm run start`

Start the webpack dev server to watch and build your front end code.
`npm run watch`

Note: If you get an error on npm run start it is probably because you do not have mysql installed and configured properly. After installing mysql you can change your settings for the db inside of server/datasources.json. If you want to use a different db such as mongo you can reference the loopback documentation on how to set that up.
