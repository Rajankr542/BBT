import React from 'react';
import { View,Image,TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation'; 
import { Header } from 'react-native-elements';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CustomHeader = ({navigation,star,cart,style,backbutton}) => {
  {cart ? cart='false' : cart='true'}
  {backbutton ? backbutton='false' : backbutton='true'}
  return (
<Header transparent
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle="light-content"
  leftComponent={
    <View>
    { backbutton==='true' ?
    <TouchableOpacity 
    onPress={() => {navigation.openDrawer()}} >
  <Image source={require('../../assets/bread-header.png')} 
  style={{width:wp('6%'),resizeMode:"contain",
  height:wp("5%")}}
   />
   </TouchableOpacity>
    : <TouchableOpacity onPress={() => {navigation.goBack()}}>
    <Image source={require('../../assets/back.png')} style={{width:wp('6%'),resizeMode:"contain",height:wp('6%'),marginRight:wp('6%')}}/>
    </TouchableOpacity> 
    
  }
  </View>
   }
  rightComponent={
    <View style={{flexDirection:'row'}}>
       { cart==='true' ? null: <TouchableOpacity>
    <Image source={require('../../assets/cart.png')} style={{width:wp('6%'),resizeMode:"contain",height:wp('6%'),marginRight:wp('6%')}}/>
    </TouchableOpacity> }

    { star ? null: <TouchableOpacity onPress={() => {navigation.navigate('Wallpaperfavorite')}}>
    <Image source={require('../../assets/star-icon.png')} style={{width:wp('6%'),resizeMode:"contain",height:wp('6%'),marginRight:wp('6%')}}/>
    </TouchableOpacity> }
  <Image source={require('../../assets/user.png')} style={{width:wp('6%'),resizeMode:"contain",height:wp('6%')}}/>

  </View>
}
  containerStyle={{
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingHorizontal:wp("6%"),
    backgroundColor:'transparent',
    zIndex:99999999,
    ...style
  }}
/>
  );
};

export default withNavigation(CustomHeader);