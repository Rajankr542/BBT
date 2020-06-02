// import React from 'react';
// import { 
// View, 
// StyleSheet,
// Text,
// TouchableOpacity
// } from 'react-native';
// import {Header} from 'react-native-elements';
// import { MaterialIcons } from '@expo/vector-icons'; 



// const PrivicyPolicy = ({navigation}) => {
// return (
// <View style={{flex:1}}>
// <Header
//   statusBarProps={{ barStyle: 'light-content' }}
//   barStyle="light-content"
//   leftComponent={
//   <TouchableOpacity onPress={() => {navigation.goBack()}}>
//       <MaterialIcons name="keyboard-backspace" size={30} color="black" />
//       </TouchableOpacity>}
//   containerStyle={{
//     backgroundColor: '#fff',
//     paddingTop: 0,
//     paddingHorizontal:30
//   }}
// />

// <Text>dfasdfasd</Text>
// </View>
//   );


// };

// const styles = StyleSheet.create({});

// export default PrivicyPolicy;


import React, { Component } from 'react';
import { View,Text } from 'react-native';

class PrivicyPolicy extends Component {
  render() {
    return (
    <View>
      <Text>Yes class Component is working on expo..!!</Text>
    </View>
    );
  }
}

export default PrivicyPolicy;
