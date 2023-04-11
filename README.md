# Game Assement

This App aims to be a game assesment for react-native applications using Native Bridging. It provides a organized structure & also demonstrate the use of Native Bridging.

## Preview
![](https://github.com/saddam-ios/game-assesment/blob/main/assets/IM_3.jpeg?raw=true)


## Folder structure

This assingment follows a very simple project structure:

- `assets`: Asset folder to store all images, vectors, etc.

- `src`: This folder is the main container of all the code inside your application.
  - `components`: Folder to store any common component that you use through your app.
  - `constants`: Folder to store any kind of constant that you have.
  - `models`: Folder to store any kind of type/model to be used as 
  data model.
  - `navigators`: Folder to store the navigators.
  - `redux`: Folder to store state management (redux) related files.
    - `action-creators`: Folder to store All action creators.
    - `action-type`: Folder to enum of All type of actions.
    - `actions`: This folder contains all actions that can be dispatched to redux.
    - `reducers`: This folder should have all your reducers, and expose the combined result using its `index.ts`
 - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code and a separate one for the styles and tests.
      - `index.tsx`
      - `styles.js`

- `App.tsx`: Main component that starts your whole app.
- `index.js`: Entry point of your application as per React-Native standards.

## Usage

You can start by cloning this repository and using (https://github.com/saddam-ios/game-assesment). In the current state of this project, it should give you no issues at all.

## Steps To Run 

* yarn install
* npx expo run:android 