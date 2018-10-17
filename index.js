/** @format */

import {AppRegistry} from 'react-native';
// import App from './App';
import App from './src/RootScreen';
// import App from './app/root';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
