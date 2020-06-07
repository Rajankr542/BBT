import React,{useState} from 'react';
import { 
  View, 
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
  Modal,
  Platform,
  UIManager,
  LayoutAnimation
} from 'react-native';
import CustomHeader from '../Component/Header';
import { Feather } from '@expo/vector-icons'; 
import OneShowroomView from '../Component/OneShowroomView';
import dataofshowroom from '../bbtshowroom.json';
import CallbackPopup from '../Component/CallbackPopup';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const OurShowroomLisiting = () => {
  const [activeshowroomdata,SetActiveshowroomdata]=useState(dataofshowroom.GurgaonShowroom);
  const [activeshworoom,setActiveshowRomm]=useState('Gurgaon-Showroom');
  const [seescroll,SetSeescroll]=useState(false);
  const [popupform,setPopupform]=useState(false);

  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
          {seescroll
    ?
<CustomHeader 
      star='false'
      style={{backgroundColor:'#f6f6f6'}}
      />
    :
  null

    }

      <ScrollView showsVerticalScrollIndicator={false} scrollEnabled={seescroll}>
    {seescroll
    ?
 null
    :
    <ImageBackground source={require('../../assets/showroombackground.jpg')} style={styles.backgroundimage} >
      
    <CustomHeader 
      star='false'
      />

      <View style={styles.textcontainer}>
          <Text style={styles.text}>We Believe In Nothing{"\n"}But Extraordinary</Text>
      </View>
      <TouchableOpacity style={styles.buttonscroll} onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); SetSeescroll(true)}}>
        <Text 
        style={{color:'#fff',fontFamily:'roboto-light',fontSize:wp("7%"),letterSpacing:wp("1%")}}>
            BBT SHOWROOM
            </Text>
            <Feather name="chevron-down" style={styles.buttonscrollbutton} />
      </TouchableOpacity>
     </ImageBackground>

    }

<View style={{backgroundColor:'#f6f6f7'}}>

     <View style={{paddingVertical:hp("2.5%"),paddingHorizontal:wp("5%")}}>
       <Text style={{paddingVertical:hp("2.5%"),fontFamily:'roboto-medium',fontSize:wp("7%")}}>Our Belief</Text>
       <View>
         <Text style={styles.ourbelifcontent}>
           At Big Boy Toyz the aim has always been to dream big and achieve great. 
           Welcome to our showroom's tour. Hope that you will enjoy your time cruising through. 
           A little warning before you scroll ahead <Text style={{color:'#000'}}>
              "You can check out anytime you want but you can never leave"
             </Text>
             </Text>
        </View>
     </View>



<View 
style={{
flex:1,
flexDirection:"row",
flexWrap:'wrap',
justifyContent:'space-between',
marginHorizontal:wp("6%"),
marginVertical:hp("2.5%")}}>

     <View style={styles.oneitemcontaienr}>

       <View >
       <Image source={require('../../assets/brandstar.png')} style={styles.imagecontaianerforiteam}/>
       </View>

       <View style={styles.textcontainerfoticon}>
       <Text style={{textAlign:'center'}}>
  <Text style={styles.teaxtstylewithbold}>30 </Text><Text style={styles.teaxtstylewithoutbold}>Luxury Car Brands</Text>
  </Text>
       </View>

      </View>

      <View style={styles.oneitemcontaienr}>

<View >
<Image source={require('../../assets/brandcaricon.png')} style={{...styles.imagecontaianerforiteam,width:wp("18%")}}/>
</View>

<View style={styles.textcontainerfoticon}>
<Text style={{textAlign:'center'}}>
  <Text style={styles.teaxtstylewithbold}>150+ </Text><Text style={styles.teaxtstylewithoutbold}>Exotic Cars</Text>
  </Text>
</View>

</View>

<View style={styles.oneitemcontaienr}>

<View>
<Image source={require('../../assets/brandhappyface.png')} style={styles.imagecontaianerforiteam}/>
</View>

<View style={styles.textcontainerfoticon}>
<Text style={{textAlign:'center'}}>
  <Text style={styles.teaxtstylewithbold}>7600+ </Text><Text style={styles.teaxtstylewithoutbold}>Happy Customers</Text>
  </Text>
</View>

</View>



<View style={styles.oneitemcontaienr}>

<View >
<Image source={require('../../assets/brandlanguage.png')} style={styles.imagecontaianerforiteam}/>
</View>

<View style={styles.textcontainerfoticon}>
<Text style={{textAlign:'center'}}>
<Text style={styles.teaxtstylewithoutbold}>Experience in</Text>
  <Text style={styles.teaxtstylewithbold}> 10+ </Text><Text style={styles.teaxtstylewithoutbold}>Regional
Languages</Text>
  </Text>
</View>

</View>

</View>


<View >
<Text style={{fontFamily:'roboto-medium',fontSize:wp("6.5%"),paddingHorizontal:wp("7%")}}>BBT Showroom's Virtual Tour</Text>

<View style={{marginVertical:hp("4%")}}>
<ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal:wp("7%")}}>
  
<TouchableOpacity onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActiveshowRomm('Gurgaon-Showroom'),SetActiveshowroomdata(dataofshowroom.GurgaonShowroom)}}>
  {activeshworoom === 'Gurgaon-Showroom' ?
  <Text style={{fontFamily:'roboto-medium',fontSize:wp("4.3%"),marginRight:wp("6%")}}>Gurgaon - Showroom</Text>
  : <Text style={{fontFamily:'roboto-medium',fontSize:wp("4.3%"),opacity:0.6,marginRight:wp("6%")}}>Gurgaon - Showroom</Text>
}
{activeshworoom === 'Gurgaon-Showroom' ?
  <View>
  <View style={{height:wp("1.5%"),width:wp("1.5%"),backgroundColor:'#000',borderRadius:30,marginTop:hp("3.5%"),alignSelf:'center'}} />
  </View>
  : null
}
</TouchableOpacity>

<TouchableOpacity onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActiveshowRomm('Mumbai-Studio'),SetActiveshowroomdata(dataofshowroom.MumbaiStudio)}}>
  {activeshworoom === 'Mumbai-Studio' ?
  <Text style={{fontFamily:'roboto-medium',fontSize:wp("4.3%"),marginRight:wp("6%")}}>Mumbai - Studio</Text>
  : <Text style={{fontFamily:'roboto-medium',fontSize:wp("4.3%"),opacity:0.6,marginRight:wp("6%")}}>Mumbai - Studio</Text>
}
{activeshworoom === 'Mumbai-Studio' ?
  <View>
  <View style={{height:wp("1.5%"),width:wp("1.5%"),backgroundColor:'#000',borderRadius:30,marginTop:hp("3.5%"),alignSelf:'center'}} />
  </View>
  : null
}
</TouchableOpacity>

<TouchableOpacity onPress={() => {LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut); setActiveshowRomm('Hyderabad-Studio'),SetActiveshowroomdata(dataofshowroom.HyderabadStudio)}}>
  {activeshworoom === 'Hyderabad-Studio' ?
  <Text style={{fontFamily:'roboto-medium',fontSize:wp("4.3%"),marginRight:wp("13%")}}>Hyderabad - Studio</Text>
  : <Text style={{fontFamily:'roboto-medium',fontSize:wp("4.3%"),opacity:0.6,marginRight:wp("13%")}}>Hyderabad - Studio</Text>
}
{activeshworoom === 'Hyderabad-Studio' ?
  <View>
  <View style={{height:wp("1.5%"),width:wp("1.5%"),backgroundColor:'#000',borderRadius:30,marginTop:hp("3.5%"),alignSelf:'center'}} />
  </View>
  : null
}
</TouchableOpacity>

  </ScrollView>
</View>
</View>

<View>
    <OneShowroomView data={activeshowroomdata}/>
</View>

<View style={{marginHorizontal:wp("7%"),marginTop:hp('4%'),marginBottom:hp("6%")}}>

<TouchableOpacity style={styles.vistitbutton} onPress={() => {setPopupform(true)}}>
  <Text style={styles.vistitbuttontext}>I Want to Plan a Visit</Text>
</TouchableOpacity>

<Modal visible={popupform} animationIn>
<CallbackPopup crossbutton={() => {setPopupform(false)}}/>
</Modal>

</View>

</View>

     </ScrollView>
    </View>
  );


};
const win = Dimensions.get('window');

const styles = StyleSheet.create({
  vistitbutton:{
    backgroundColor:'#000',
    paddingHorizontal:wp("7%"),
    paddingVertical:wp("5%"),
    borderRadius:wp("3%")
  },
  vistitbuttontext:{
    textAlign:'center',
    fontSize:wp("4.3%"),
    fontFamily:'roboto-medium',
    color:'#fff'
  },
oneitemcontaienr:{
  width:wp("43%"),
  borderColor:'#ddd',
  borderWidth:1,
  paddingVertical:hp("4%"),
  paddingHorizontal:wp("8%"),
  alignItems:'center',
  marginBottom:hp("1%"),
  borderRadius:wp("3%")
},
imagecontaianerforiteam:{
width:wp("9%"),
height:wp("9%"),
resizeMode:"contain",
marginBottom:hp("4%")
},
teaxtstylewithbold:{
color:'#000',
fontFamily:'roboto-bold',
textAlign:'center',
lineHeight:wp("6%"),
fontSize:wp("4.5%")
},
teaxtstylewithoutbold:{
textAlign:'center',
lineHeight:wp("6%"),
fontSize:wp("4.5%"),
fontFamily:'roboto-regular',
color:'#4d5156'
},
backgroundimage:{
width:wp("100%"),
height:hp("100%")
},
textcontainer:{
paddingVertical:hp("9%")
},
text:{
textAlign:'center',
fontFamily:'roboto-medium',
fontSize:wp("7.2%"),
lineHeight:wp("8.5%")
},
buttonscroll:{
    position:'absolute',
    bottom:hp("4%"),
    alignSelf:'center'
},
buttonscrollbutton:{
    color:'#fff',
    fontSize:wp("8%"),
    alignSelf:"center",
    paddingVertical:hp("1%")
},
ourbelifcontent:{
fontFamily:'roboto-regular',
color:'#4d5156',
fontSize:wp("4.5%"),
lineHeight:wp("7%")
}
});

export default OurShowroomLisiting;