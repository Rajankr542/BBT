import React,{useState} from 'react';
import { 
  View, 
  StyleSheet,
  Text,
  Image,
  FlatList,
  Switch,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { SliderBox } from "react-native-image-slider-box";
import CustomHeader from '../Component/Header';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import products from '../Estore.json';
import EstoreOneProduct from '../Component/EstoreOneProduct';

const EstoreDetailscreen = ({navigation}) => {
  const item = navigation.getParam('item');
  const images = item.Images.map(a => a.image);
  const [isEnabled, setIsEnabled] = useState(false);
  const [pincode,setPincode]=useState('');
  const [count,setCount]=useState(1);
  const [activeshTab,setActiveshTab]=useState('Product-descrition');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const increment = () => {
    setCount(count+1);
   }

  const decrement = () => {
    {
      count>1 ?
      setCount(count-1)
    :
  null
    }
}

  const filterResultById = (id) => {
    return products.filter(product => {
             return product.id != id;
    });
   };


  return (
<View style={{flex:1,backgroundColor:'#fff'}}>
<CustomHeader
cart='true'
star='false'
backbutton='true'
style={{backgroundColor:'#f6f6f7'}}
/>
<ScrollView showsVerticalScrollIndicator={false}>
<View style={{marginBottom:hp("2%")}}>
<SliderBox
  images={images}
  sliderBoxHeight={ hp("48%")}
  dotColor="#000"
  inactiveDotColor="#ddd"
  resizeMethod={'resize'}
  resizeMode={'cover'}
  dotStyle={{
    width: 8,
    height: 5,
    borderRadius: 10
  }}
/>
  </View>
<View style={{marginHorizontal:wp("5%")}}>

  <View>
<Text style={{fontFamily:'roboto-bold',fontSize:wp("9%")}}>{item.productname}</Text>
<Text style={{fontFamily:'roboto-regular',fontSize:wp("4%"),letterSpacing:-wp("0.1%"),opacity:0.6}}>{item.subname}</Text>
  </View>


<View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:wp("10%")}}>
<View style={{
flexDirection:"row",
borderWidth:1,
borderColor:'#ddd',
width:wp("30%"),
padding:wp("2%"),
borderRadius:wp("3%"),
justifyContent:'space-around',
alignItems:'center'
}}>
<TouchableOpacity onPress={() => {decrement()}}><Image source={require('../../assets/price_minus.png')} style={styles.plusminus}/></TouchableOpacity>
<Text style={{fontFamily:'roboto-medium',fontSize:wp("5%")}}>{count}</Text>
<TouchableOpacity onPress={() => {increment()}}><Image source={require('../../assets/price.png')} style={styles.plusminus} /></TouchableOpacity>
</View>

<View><Text style={{fontFamily:'roboto-medium',fontSize:wp("8%")}}>{'\u20B9'}{isEnabled && item.name === 'Perfume'?item.price*count+300 :item.price*count}</Text></View>
</View>

{item.addname === true?
<View 
style={{
  flexDirection:'row',
  marginBottom:wp("8%")
}}>
  <View>
<Switch
trackColor={{ false: "#ddd", true: "red" }}
thumbColor={isEnabled ? "#fff" : "#fff"}
ios_backgroundColor="#f6f6f7"
onValueChange={toggleSwitch}
style={{
transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
width:wp("12%")
}}
value={isEnabled}
/>
</View>
<View style={{
  alignSelf:'center'
}}>
  <Text style={{fontFamily:'roboto-regular',fontSize:wp("4%"),marginLeft:wp("1%")}}>Engrave your name on bottle (+{'\u20B9'}300) </Text>
</View>

</View>
:null

}
<View>
  <Text style={{fontFamily:'roboto-bold',fontSize:wp("5%")}}>Check COD Service</Text>
</View>

<View 
style={{
marginTop:wp("5%"),
flexDirection:'row',
justifyContent:'space-between'

}}>

<View >
<TextInput 
placeholder="Enter your pin" 
  keyboardType={"number-pad"} 
  maxLength={10} 
  placeholderTextColor = "#050505" 
  style={styles.inputstyle}
  value={pincode}
  onChangeText={(num) => {setPincode(num)} }
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

</View>
<View style={{backgroundColor:'#f6f6f7',marginTop:hp("6%")}}>
<View style={{
  flexDirection:'row',
  justifyContent:'space-between',
  paddingHorizontal:wp("10%"),
  paddingTop:hp("6%")}}>
<TouchableOpacity onPress={() => {setActiveshTab('Product-descrition')}}>
  {activeshTab === 'Product-descrition' ?
  <Text style={{fontFamily:'roboto-medium',fontSize:wp("4.3%"),marginRight:wp("6%")}}>Product Description</Text>
  : <Text style={{fontFamily:'roboto-medium',fontSize:wp("4.3%"),opacity:0.6,marginRight:wp("6%")}}>Product Description</Text>
}
{activeshTab === 'Product-descrition' ?
  <View>
  <View style={{height:wp("1.5%"),width:wp("1.5%"),backgroundColor:'#000',borderRadius:30,marginTop:hp("3.5%"),alignSelf:'center'}} />
  </View>
  : null
}
</TouchableOpacity>

<TouchableOpacity onPress={() => {setActiveshTab('product-details')}}>
  {activeshTab === 'product-details' ?
  <Text style={{fontFamily:'roboto-medium',fontSize:wp("4.3%")}}>Product Details</Text>
  : <Text style={{fontFamily:'roboto-medium',fontSize:wp("4.3%"),opacity:0.6}}>Product Details</Text>
}
{activeshTab === 'product-details' ?
  <View>
  <View style={{height:wp("1.5%"),width:wp("1.5%"),backgroundColor:'#000',borderRadius:30,marginTop:hp("3.5%"),alignSelf:'center'}} />
  </View>
  : null
}
</TouchableOpacity>

</View>

<View style={{paddingHorizontal:wp("5%"),paddingTop:wp("8%")}}>
{activeshTab === 'Product-descrition' ? 
<Text style={{fontFamily:'roboto-regular',opacity:0.6,fontSize:wp("4%"),lineHeight:wp("6%")}}>{item.productDescription}</Text>
:
<View style={{flex:1}}>
<FlatList
data={item.ProductDetails}
keyExtractor={(testext) => testext.id}
renderItem={({item}) => {
return (
<View style={{flex:1,flexDirection:'row',justifyContent:'space-between',marginVertical:hp("2%")}}>
    <Text style={{fontFamily:'roboto-medium',width:wp("20%"),flexWrap:'wrap',fontSize:wp("3.5%")}}>{item.title}</Text>
    <Text style={{
      width:wp("60%"),
      fontFamily:'roboto-regular',
      fontSize:wp("3.5%"),
      opacity:.6,
      textAlign:'right',
      flexWrap:'wrap',
      }}>{item.description}</Text>
</View>
)
}}
/>
</View>
}

<TouchableOpacity style={{backgroundColor:'#000',paddingVertical:hp("2.5%"),borderRadius:13,marginTop:hp("4%")}}>
<Text style={{textAlign:'center',fontFamily:'roboto-medium',fontSize:wp("4.5%"),color:'#fff'}}>Buy Now</Text>
</TouchableOpacity>

<View style={{marginVertical:hp("5%")}}>
  <Text style={{fontFamily:'roboto-medium',fontSize:wp("5%"),textAlign:'center'}}>BBT Merchandise</Text>
</View>


<FlatList
horizontal
showsHorizontalScrollIndicator={false}
data={filterResultById(`${item.id}`)}
keyExtractor={(testext) => testext.id}
renderItem={({item}) => {
return (
<EstoreOneProduct 
item={item}
style={{
    width:wp('80%'),
    marginHorizontal:wp("0"),
    marginLeft:wp("3%"),
    marginRight:wp("3%")
    }}
/>
)
}}
/>

<View style={{marginVertical:hp("5%")}}>
  <Text style={{fontFamily:'roboto-medium',fontSize:wp("5%")}}>Terms & Conditions</Text>
  <Text style={{fontFamily:'roboto-regular',fontSize:wp("4%"),lineHeight:wp("5%"),marginTop:wp("2%"),opacity:.6}}>
    {item.termsandcodition}
    </Text>
</View>

</View>

</View>

<TouchableOpacity style={{backgroundColor:'#000',paddingVertical:hp("2.5%")}}>
<Text style={{textAlign:'center',fontFamily:'roboto-medium',fontSize:wp("4.5%"),color:'#fff'}}>Add To Cart</Text>
</TouchableOpacity>

</ScrollView>

</View>
 
  );

};

const styles = StyleSheet.create({
  plusminus:{
    width:wp("3.5%"),
    resizeMode:'contain',
  },
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
    }
 });

export default EstoreDetailscreen;