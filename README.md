# CommandK Assignment Task

This amazing and user-friendly application provides a comprehensive keyboard shortcut library with a plethora of features that enable users to easily and efficiently navigate through different sections and perform various actions with just a few keystrokes.

With this application, any component can effortlessly bind and unbind shortcuts as per its requirements. Furthermore, it provides the flexibility for any component to specify a key combination and a callback function that is triggered when the specified key is pressed.

One of the most advantageous features of this application is its ability to store all the active shortcuts. This allows users to easily view and navigate through the various keyboard shortcuts available for each component. This invaluable feature can be accessed through the application's help section, which provides users with a comprehensive guide to all the available keyboard shortcuts, thereby increasing their productivity and enhancing their overall user experience.

You can access the application [here](https://firehudson.github.io/Commandk-Assignment/)

## Requirements for Running the Application

You must have installed Node Package Manager (npm) to manage your Node.js packages and dependencies

## Running the Application: A Step-by-Step Guide

In the root directory of the project, you can get started by executing the following steps:

Firstly, run the command `npm install` to install all the necessary packages required for the project.
Once the installation is complete, run the command `npm start` to launch the application in the development mode. This command will start a development server and your application will be available at [http://localhost:3000](http://localhost:3000) on your web browser.

## Beyond the Basics: Discovering Valuable Insights with Additional Information

1. To efficiently store and manage the keyboard shortcut combinations during the mounting of the component, we save the value of `combo` as an object. This approach allows us to carry additional information, such as a description and component name, which can be used solely for presentation purposes. By doing so, we are able to ensure that the keyboard shortcuts are easily accessible and clearly visible to the user.

2. If we need to unregister a keyboard shortcut combination, we can easily access the `combo-keys` from the store by using the `Object.keys(shortcuts)` method. This allows us to quickly and efficiently retrieve the necessary information and remove the shortcut combo as needed.

## Unlocking the Potential: Overcoming the Limitations Holding You Back

We attempted to install the `keypress.js` module using both the file and GitHub methods. While it did install successfully, we encountered an error when attempting to access it within our code. Specifically, we received the following error message:

```
Uncaught TypeError: Cannot read properties of undefined (reading 'Listener')
```

While we could have resolved this error with additional troubleshooting, we were pressed for time. As a result, we opted to import keypress.js using a script tag within our index.html file. This allowed us to continue working on our project without further delay.
