**Table of Contents**

[TOC]

### What is this repository for? ###
Galb Front-End Development for cross-platform native mobile application.
### How to run? ###
At this stage, test on iOS emulator only.

1. Follow [this page](https://facebook.github.io/react-native/docs/getting-started.html) to install react-native for iOS development. Make sure you install watchman with brew and Xcode.
1. Clone the source
1. npm install
1. react-native run-ios

### Development ###
* **IDE**: [Atom ](https://atom.io/)

* **Atom Packages**

    * [language-babel](https://atom.io/packages/language-babel)  (Mandatory)
    * [standard-formatter](https://atom.io/packages/standard-formatter)  (Mandatory)
    * [atom-ternjs](https://atom.io/packages/atom-ternjs)  (Optional)
    * [linter-js-standard](https://atom.io/packages/linter-js-standard)  (Optional)
    * [platformio-ide-terminal](https://atom.io/packages/platformio-ide-terminal)  (Optional)


* **Development Tools**

    * React Native Debugger
        1. Follow instruction on [this page](https://github.com/jhen0409/react-native-debugger) to install the standalone React Native Debugger.
        1. Open the debugger and make sure the Chrome JS debugger is closed.


* **Code Checkin**:

    * During code checkin, run **npm run lint** for lint check and fix all reported issues before commit

### Touble shooting ###

* From time to time, if you see any import error when you run the react-native, try `npm run clean-start`. If it still didn't work, try running `npm run fresh-start`
* **setTimeout does not work** - there is a bug in react-native (at least up to 0.45.1) that the setTimeout won't work as expected when the **Remote JS Debug** is turned on. The behavior can be either the setTimeout is never fired or it will keep firing and ignore the delay parameter.
