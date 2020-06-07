import React from 'react';
import { 
  View, 
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { withNavigation } from 'react-navigation'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const EstoreOneProduct = ({navigation,item,style}) => {
  return (
<TouchableOpacity onPress={() => { navigation.navigate('EstoreDetail',{item})}} style={{...styles.productcontainer,...style}}>
<View><Image source={{uri: item.Image}} style={styles.productImage} /></View>

<View style={{alignSelf:'center',paddingBottom:hp("4%"),paddingHorizontal:wp("6%")}}>
<View><Text style={{textAlign:'center',fontFamily:'roboto-medium',fontSize:wp("8%")}}>{item.name}</Text></View>
  <View style={{marginTop:hp("1%")}}><Text style={{textAlign:'center',fontFamily:'roboto-regular',fontSize:wp("4%")}}>{item.minidetail}</Text></View>
</View>
</TouchableOpacity>
  );

};

const styles = StyleSheet.create({
productcontainer:{
    width:wp("90%"),
    marginBottom:wp("5%"),
    marginHorizontal:wp("5%"),
    backgroundColor:'#fff',
    borderRadius:wp("7%")
},
productImage:{
    width:null,
    height:hp("40%"),
    borderRadius:wp("7%")
}

});

export default withNavigation(EstoreOneProduct);