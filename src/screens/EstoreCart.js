import React,{useState} from 'react';
import { 
  View, 
  StyleSheet,
  Text,
  Image,
  Modal,
  TextInput,
  TouchableOpacity
} from 'react-native';
import CustomHeader from '../Component/Header';
import ECartonePRoduct from '../Component/ECartonePRoduct';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-gesture-handler';

const EstoreCart = ({navigation}) => {
    const [popup,setPoup]=useState(true);
    const [coupoun,setCoupoun]=useState('');
  return (
<View style={{flex:1,backgroundColor:'#fff'}}>
<CustomHeader
cart='true'
star='false'
backbutton='true'
cartdot='true'
style={{backgroundColor:'#fff'}}
/>
<Modal visible={popup} transparent>
<View style={{ backgroundColor:'#000',opacity:.3,height:hp("25%") }}/>
<View showsVerticalScrollIndicator={false} 
style={{
flex:1,
backgroundColor:'#fff',
borderTopRightRadius:wp("20%"),
borderTopLeftRadius:wp("20%"),
marginTop:-wp("20%"),
backfaceVisibility:'hidden'
}}>
<View> 
    <Text style={{textAlign:'center',marginVertical:hp("5%"),fontFamily:'roboto-medium',fontSize:wp("8%")}}>My Cart</Text>
   <TouchableOpacity onPress={() => {setPoup(false),navigation.goBack()}} style={{position:'absolute',right:wp("10%"),top:hp("4%"),opacity:.8}}>
   <Image source={require('../../assets/closeicon.png')} style={{width:wp("6%"),resizeMode:'contain'}}/>
   </TouchableOpacity>
</View>

<ScrollView showsVerticalScrollIndicator={false}>
<View>
    <ECartonePRoduct 
image='https://www.bigboytoyz.com/estore/image/catalog/products/perfume-detail-2.jpg'
count={2}
price={1499}
typeofpro='BBT Gold Edition'
/>

<ECartonePRoduct 
image='https://www.bigboytoyz.com/estore/image/catalog/products/pen-detail-3.jpg'
count={1}
price={1850}
typeofpro='BBT Gold Edition'
/>
</View>


<View 
style={{
marginTop:wp("5%"),
marginHorizontal:wp("5%"),
flexDirection:'row',
justifyContent:'space-between'

}}>

<View >
<TextInput 
placeholder="Enter your coupon here" 
  placeholderTextColor = "#050505" 
  style={styles.inputstyle}
  value={coupoun}
  onChangeText={(num) => {setCoupoun(num)} }
  />
</View>

  <TouchableOpacity 
  style={{
    backgroundColor:'#000',
    alignSelf:'center',
    height:wp("18%"),
    paddingVertical:wp("4%"),
   marginLeft:wp("3%"),
    borderRadius:15,
    width:wp("20%"),
    alignItems:'center',
    alignSelf:'flex-start'
    }}>
  <Image source={require('../../assets/cod_cta.png')} 
  style={{
    width:wp("5%"),
    resizeMode:'contain'
    }}/> 
  </TouchableOpacity>
</View>


<View style={{marginHorizontal:wp("5%"),marginTop:hp("5%"),borderBottomWidth:1,paddingBottom:hp("2%"),borderColor:'#ddd'}}>

<View style={styles.individualconatienr}>
<Text style={styles.bottomtextstyle}>Sub Total</Text>
<Text style={styles.bottomtextstyle}>{'\u20B9'}4848</Text>
</View>

<View style={styles.individualconatienr}>
<Text style={styles.bottomtextstyle}>Coupon Code</Text>
<Text style={styles.bottomtextstyle}>- {'\u20B9'}400</Text>
</View>

<View style={styles.individualconatienr}>
<Text style={styles.bottomtextstyle}>Shipping Cost</Text>
<Text style={styles.bottomtextstyle}>{'\u20B9'}4448</Text>
</View>

</View>

<View style={{marginHorizontal:wp("5%"),marginVertical:hp("3%"),flexDirection:'row',justifyContent:'space-between'}}>
    <Text style={{fontFamily:'roboto-bold',fontSize:wp("7%")}}>Total</Text>
    <Text style={{fontFamily:'roboto-bold',fontSize:wp("7%")}}>{'\u20B9'}4748</Text>
</View>

<View style={{marginHorizontal:wp("5%"),marginBottom:hp("5%")}}>
<TouchableOpacity style={{backgroundColor:'#000',paddingVertical:hp("2.5%"),borderRadius:13}}>
<Text style={{textAlign:'center',fontFamily:'roboto-medium',fontSize:wp("4.5%"),color:'#fff'}}>Checkout</Text>
</TouchableOpacity>
</View>

</ScrollView>

</View>

</Modal>

</View>
 
  );

};

const styles = StyleSheet.create({
  inputstyle:{
    borderWidth:1,
    borderColor:'#ddd',
    width:wp("70%"),
    height:wp("18%"),
    paddingHorizontal:wp("5%"),
    paddingVertical:hp("2.5%"),
    marginBottom:hp("1%"),
    borderRadius:15,
    color:'#000',
    fontFamily:'roboto-regular',
    fontSize:wp("4.2%")
    },
    individualconatienr:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    bottomtextstyle:{
        fontSize:wp("4%"),
        fontFamily:'roboto-medium',
        opacity:.6,
        marginBottom:hp("2%")
    }
 });

export default EstoreCart;