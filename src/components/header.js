// Import libraries for making a component
/*
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
     const {textStyle, viewStyle} = styles;
     return (
     <View style={viewStyle}>
          <Text style={textStyle}>{props.headerText}</Text>
     </View>
     )
};

const styles = {
     viewStyle:{
           backgroundColor : '#F8F8F8',
           justifyContent : 'center',
           alignItems : 'center',
           height : 60,
           paddingTop : 20,
           shadowColor : '#000',
           shadowOffset : {width : 2,height : 2},
           shadowOpacity : 0.5,
           elevation : 2,
           position : 'relative'
     },
     textStyle:{
          fontSize:20
     }
};

// Make the component available to other parts of the app
export default Header;
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