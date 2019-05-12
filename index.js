/**
 * @format
 */

/*import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
*/
/*

//Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//Create a component
const App = () => (
        <Header headerText={'Albums'}/>
    );

//Render it to device 
AppRegistry.registerComponent('albums',() => App);
*/

import React, { Component } from 'react'
import {
   Text,
   View
} from 'react-native'

export default class reactApp extends Component {
   constructor() {
      super()
      this.state = {
         myText: 'My Original Text'
      }
   }
   updateText = () => {
      this.setState({myText: 'My Changed Text'})
   }
   render() {
      return (
         <View>
            <Text onPress = {this.updateText}>
               {this.state.myText}
            </Text>
         </View>
      );
   }
}