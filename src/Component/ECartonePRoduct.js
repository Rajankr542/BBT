
import React from 'react';
import { 
  View, 
  StyleSheet,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ECartonePRoduct = ({image,count,typeofpro,price}) => {
    return (
<View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp("5%"),marginBottom:wp("6%")}}>
   
   <View style={{flexDirection:'row'}}>
    <View style={{backgroundColor:'#f6f6f7'}}>
        <Image source={{uri: image}} style={styles.cartElementImage}/>
    </View>
    
    <View style={{alignSelf:'center'}}>
        <View><Text style={{fontFamily:'roboto-bold',fontSize:wp("4.5%")}}>{typeofpro}</Text></View>
<View><Text style={{fontFamily:'roboto-medium',opacity:.6,fontSize:wp("4%")}}>{count}x {'\u20B9'} {price}</Text></View>
        
        <TouchableOpacity 
        style={{backgroundColor:'#f6f6f7',height:wp("9%"),padding:wp("2.2%"),marginTop:wp("3%"),borderRadius:wp("2%"),width:wp("9%")}}>
            <Image source={require('../../assets/delete.png')} style={{width:wp("4.5%"),height:wp("4.5%"),resizeMode:'contain'}}/></TouchableOpacity>
    </View>
    </View>

    <View style={{alignSelf:'center'}}>

    <View style={{
flexDirection:"column",
borderWidth:1,
borderColor:'#ddd',
width:wp("10%"),
height:wp("25%"),
padding:wp("2%"),
borderRadius:wp("3%"),
justifyContent:'space-between',
alignItems:'center'
}}>
<TouchableOpacity><Image source={require('../../assets/price.png')} style={styles.plusminus}/></TouchableOpacity>
<Text style={{fontFamily:'roboto-medium',fontSize:wp("5%")}}>{count}</Text>
<TouchableOpacity><Image source={require('../../assets/price_minus.png')} style={{...styles.plusminus,marginVertical:wp("2%")}} /></TouchableOpacity>
</View>

    </View>
</View>
)
}

const styles = StyleSheet.create({
    plusminus:{
      width:wp("3.5%"),
      resizeMode:'contain',
    },
    cartElementImage:{
        width:wp("30%"),
        height:wp("30%"),
        resizeMode:'cover'
    }
   });
  
  export default ECartonePRoduct;