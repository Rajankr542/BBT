import React from 'react';
import { 
  View, 
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-elements';
import { SimpleLineIcons,Entypo,AntDesign } from '@expo/vector-icons'; 
import {withNavigation} from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const FavoriteOneimage = ({carsrc,imagecaption,onShare,onCrossPress}) => {

 return (
    <View style={styles.parentcontainerforimage}>
    <View style={styles.containerStyleforimage}>
        <Image 
         source={{ uri: carsrc }} 
         style={styles.imagestyle}
        />
    <TouchableOpacity 
    onPress={onCrossPress}
    style={styles.crossButton}
    >
    <Entypo name="cross" size={wp("5%")} color="black" />
    </TouchableOpacity>

    </View>

    <View style={styles.daetilstex}>

<View  style={{alignSelf:"center",flex:1}}>
<Text style={{ fontFamily:'roboto-medium',fontSize:wp("6%"),lineHeight:wp("6%"),color:'#000',marginLeft:wp("7%")}}>{imagecaption}</Text>
</View>

<View style={{flex:1}}>

<View style={{flexDirection:'row',justifyContent:'space-between' , alignSelf:'flex-end'}}>
<View style={styles.customeiconcont}>
<TouchableOpacity onPress={onShare}>
<SimpleLineIcons name="share" size={wp("5%")} color="black"  />
</TouchableOpacity>
</View>
<View style={{...styles.customeiconcont, marginRight:wp("4%")}}><AntDesign name="download" size={wp("5%")} color="black" /></View>
</View>

</View>

</View>
</View>
  );

};
const win = Dimensions.get('window');
const styles = StyleSheet.create({
imagestyle:{
flex:1,
width:null,
height:hp("70%"),
alignSelf: 'stretch',
borderRadius:wp("6%")
},
containerStyleforimage:{
    flex:1,
width:null,
alignSelf: 'stretch',
marginBottom:hp("2.5%"),
color:'red',
position:'relative'
},
crossButton:{
position:'absolute',
backgroundColor:'#fff',
opacity:.7,
height:wp("7%"),
width:wp("7%"),
right:wp("7%"),
top:hp("3%"),
borderRadius:wp("10%"),
padding:wp("1%")
},
customeiconcont:{
padding:wp("2.5%"),
marginLeft:wp("2.5%"),
borderRadius:wp("2.5%"),
backgroundColor:'#fff',
alignSelf:"center"
},
daetilstex:{
flexDirection:'row',
flexWrap:'wrap',
justifyContent:'space-between',
marginBottom:hp("3%")
},
parentcontainerforimage:{
backgroundColor:'#f6f6f7',
marginTop:hp("5%"),
marginBottom:hp("2.5%"),
borderRadius:wp("5%"),
width:wp("80%"),
height:hp("62%"),
marginLeft:wp("3%"),
marginRight:wp("2%")
}
});

export default withNavigation(FavoriteOneimage);