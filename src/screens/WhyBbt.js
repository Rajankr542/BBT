import React from 'react';
import { 
  View, 
  StyleSheet,
  ScrollView,
  Dimensions,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import CustomHeader from '../Component/Header';
import { Feather } from '@expo/vector-icons'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const WhyBbt = () => {
return (
<View style={{flex:1,backgroundColor:'#f6f6f8'}}>
<CustomHeader 
star='false'
/>
<ScrollView showsVerticalScrollIndicator={false} >

<View style={{flex:1,flexDirection:'row'}}>

<View style={styles.watchleftcontainer}>

<View>
<Text style={styles.Tenstyle}>TEN</Text>
<Text 
style={{...styles.othertext,position:'absolute',bottom:-hp("1%"),left:wp("3.6%")}}
>REASONS</Text>
</View>

<View style={{position:'relative',paddingVertical:hp("1%"),paddingBottom:0,marginLeft:wp("3.6%")}}>
<View style={{width:1,height:hp("10%"),backgroundColor:'#000'}} />
</View>

<View style={{marginLeft:wp("3.6%")}}>
<Text style={styles.othertext}>To Buy @</Text>
<Text style={{...styles.othertext,lineHeight:30}}>Big Boy Toyz</Text>
</View>
    
<View style={{flex:1,flexDirection:'column',marginLeft:wp("3.6%"),marginTop:hp("14%")}}>

<View style={styles.iocnViewbox}>
<Image source={require('../../assets/getEmpowered.png')} style={styles.iconImage}/>
<Text style={styles.icontext}>Get Empowered</Text>
</View>

<View style={styles.iocnViewbox}>
<Image source={require('../../assets/umbrelaIcon.png')} style={styles.iconImage}/>
<Text style={styles.icontext}>Insurance History</Text>
</View>

<View style={styles.iocnViewbox}>
<Image source={require('../../assets/zeroTolrence.png')} style={styles.iconImage}/>
<Text style={styles.icontext}>Zero Tolerance Policy</Text>
</View>

<View style={{...styles.iocnViewbox,marginVertical:hp("4%")}}>
<TouchableOpacity 
style={{backgroundColor:'#fff',width:wp("9%"),height:wp("9%"),borderRadius:50,paddingVertical:wp("1.5%")}}
>
<Feather name="chevron-down" style={styles.buttonscrollbutton} />
</TouchableOpacity>
</View>

</View>

</View>


<View style={{position:'relative'}}>
<ImageBackground resizeMethod="resize" source={require('../../assets/whybbtbackWatch.png')} style={styles.backgroundimage} >
    <Text style={styles.BBTtext}>BBT</Text>
</ImageBackground>
</View>

</View>

<View style={styles.secondSectionofthepage}>

<View style={{alignSelf:'flex-start'}}>
<Text 
style={styles.textbackgroundtext}>10  Reasons</Text>
</View>

<View style={{marginTop:hp("1.2%")}}>
<Text 
style={{...styles.textbackgroundtext,color:'#000',backgroundColor:'transparent',lineHeight:hp("5%")}}
>Why it's always a smarter{"\n"}choice purchasing from us</Text>
</View>

</View>

<ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.bottomcontener}>

<View style={styles.bottomslider}>
    <View><Image source={require('../../assets/zeroTolDetail.png')} style={{width:wp("14%"),height:wp("14%"),resizeMode:'contain',marginBottom:hp("14.8%")}}/></View>
    <View><Text style={{fontFamily:'roboto-bold',fontSize:wp("7%")}}>Zero Tolerance {"\n"}Policy</Text></View>
    <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
        <Text style={{fontFamily:'roboto-regular',fontSize:wp("3.8%"),paddingTop:hp(".8%"),opacity:0.6}}>View More</Text>
        <View style={{width:wp("5%"),height:2,backgroundColor:'black',alignSelf:'center',marginTop:hp("1%"),marginLeft:wp("1%"),opacity:0.6}}/>
        </TouchableOpacity>

</View>

<View style={styles.bottomslider}>
    <View><Image source={require('../../assets/speddometer.png')} style={{width:wp("14%"),resizeMode:'contain',height:wp("14%"),marginBottom:hp("14.8%")}}/></View>
    <View><Text style={{fontFamily:'roboto-bold',fontSize:wp("7%")}}>{'>2015 & \n<25,000 kms'}</Text></View>
    <TouchableOpacity style={{flex:1,flexDirection:'row'}}>
        <Text style={{fontFamily:'roboto-regular',fontSize:wp("3.8%"),paddingTop:hp(".8%"),opacity:0.6}}>View More</Text>
        <View style={{width:wp("5%"),height:2,backgroundColor:'black',alignSelf:'center',marginTop:hp("1%"),marginLeft:wp("1%"),opacity:0.6}}/>
        </TouchableOpacity>

</View>


</ScrollView>

</ScrollView>
</View>
  );


};

const win = Dimensions.get('window');
const styles = StyleSheet.create({
bottomslider:{
backgroundColor:'#fff',
padding:wp("10%"),
borderRadius:wp("6%"),
width:wp("66%"),
marginRight:wp("4%"),
marginLeft:wp("4%")
},
secondSectionofthepage:{
marginLeft:wp("4%")
},
textbackgroundtext:{
fontFamily:'roboto-regular',
fontSize:wp("7.5%"),
backgroundColor:'black',
color:'#fff',
letterSpacing:-wp(".25%"),
lineHeight:wp("8.5%")
},
backgroundimage:{
resizeMode:'cover',
width:wp("47.5%"),
height:hp("90%"),
alignSelf:'flex-end',
marginTop:-hp("2%")
},
BBTtext:{
fontFamily:'roboto-bold',
position:'absolute',
right:wp("3%"),
fontSize:wp("17%"),
letterSpacing:-5,
top:hp("40%")
},
watchleftcontainer:{
    marginLeft:wp("5%"),
    flex:1,
    paddingVertical:hp("4%"),
    flexDirection:'column'
},
Tenstyle:{
fontFamily:'roboto-bold',
fontSize:wp("19%"),
letterSpacing:-wp("1%")
},
othertext:{
fontFamily:'roboto-medium',
fontSize:wp("6.4%"),
letterSpacing:0
},
iconImage:{
width:wp("6%"),
height:wp("6%"),
resizeMode:"contain",
marginRight:wp("2.5%")
},
icontext:{
alignSelf:'center',
fontFamily:'roboto-medium',
fontSize:wp("4.5%"),
letterSpacing:-1
},
iocnViewbox:
{
flexDirection:'row',
marginVertical:hp("1.5%")
},
buttonscrollbutton:{
    color:'#ff4343',
    fontSize:wp("6.3%"),
    alignSelf:"center"
},
bottomcontener:{
marginTop:hp("4%"),
marginBottom:hp("30%")
}
});

export default WhyBbt;