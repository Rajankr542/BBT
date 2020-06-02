import React, { useState } from 'react';
import { 
  View, 
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Modal,
  Image
} from 'react-native';
import {Text,Header} from 'react-native-elements';
import { MaterialIcons,Entypo } from '@expo/vector-icons'; 
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import FavoriteOneimage from '../Component/FavoriteOneImage';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



const Wallpaperfavorite = ({navigation}) => {

    const [visible, setVisible] = useState(false);
    const toggleOverlay = () => {
        setVisible(!visible);
      };

    const stateImage=[
          {   id:'2',
          photosrc:'../../assets/kartik.png',
          carsrc:'https://www.bigboytoyz.com/images/wallpapers/Enviable-power-Thumbnail.jpg',
          photographername:'Karthik Reddy',
          imagecaption:'Enviable Power'
        },
        {   id:'3',
        photosrc:'../../assets/bbt.png',
        carsrc:'https://www.bigboytoyz.com/images/wallpapers/Astonishing-Garage-Thumbnail.jpg',
        photographername:'Big Boy Toyz',
        imagecaption:'Astonishing Garage'
      },
      {   id:'4',
      photosrc:'../../assets/jaidev.menon.png',
      carsrc:'https://www.bigboytoyz.com/images/wallpapers/thumb-Lamborghini.jpg',
      photographername:'Kartik Sadekar',
      imagecaption:'Lamborghini Aventador'
    },
    {   id:'5',
    photosrc:'../../assets/jaidev.menon.png',
    carsrc:'https://www.bigboytoyz.com/images/wallpapers/King-of-Mountain-Thumbnail.jpg',
    photographername:'Jaydev Menon',
    imagecaption:'King of Mountain'
    },
    {   id:'6',
    photosrc:'../../assets/kartik.png',
    carsrc:'https://www.bigboytoyz.com/images/wallpapers/Enviable-power-Thumbnail.jpg',
    photographername:'Karthik Reddy',
    imagecaption:'Enviable Power'
    }
        ];

const share = (shareurl) => { 
FileSystem.downloadAsync(
shareurl,
FileSystem.documentDirectory  + '.jpeg'
)
.then(({ uri }) => { 
    Sharing.shareAsync(uri); 
})
.catch(error => {
    console.error(error); 
});
}

  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
        <Header
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle="light-content"
  leftComponent={
  <TouchableOpacity onPress={() => {navigation.goBack()}}>
      <MaterialIcons name="keyboard-backspace" size={wp("8%")} color="black" />
      </TouchableOpacity>}
  containerStyle={{
    backgroundColor: '#fff',
    paddingTop: 0,
    paddingHorizontal:wp("6%")
  }}
/>
<View style={styles.customcontainer}>

<View style={styles.headertext}>
    <Text 
    style={{fontFamily: 'roboto-medium',fontSize:wp("8%")}}
    >Favourite</Text>
        <Text style={{fontSize:wp("4.4%"),fontFamily:'roboto-regular',color:'#666666'}}>
            To save this Favourite, you have to <Text style={{fontSize:wp("4.4%"),fontFamily:'roboto-regular',color:'#000'}}>login</Text>
        </Text>
</View>
</View>

<FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
      data={stateImage}
      keyExtractor={(testext) => testext.id}
      renderItem={({item}) => {
    return (
     <FavoriteOneimage
     carsrc={item.carsrc}
        carpath={item.car}
        imagecaption={item.imagecaption}
        onShare={() => {share(item.carsrc)}}
        onCrossPress={() => {toggleOverlay()}}
        />
     )
  }}
  />

<Modal visible={visible}>
      <View style={styles.modacrossparent}>
      <TouchableOpacity 
      onPress={toggleOverlay} 
      style={{...styles.crossbuttoncontinaer,zIndex:111111}}
      >
      <Entypo name="cross" color="black" size={wp("7%")}/>
      </TouchableOpacity>
      </View>

      <View style={{flexDirection:'column',flex:1,justifyContent:'center'}}>

    <View style={{alignSelf:'center',marginVertical:hp("2%")}}>
          <Image source={require('../../assets/deletDusbin.png')} style={styles.modalImage}/>
    </View>

    <View style={{flexDirection:'column',paddingHorizontal:wp("10%")}}>

    <View style={{alignSelf:'center',marginVertical:hp("1%")}}>
        <Text style={{fontFamily:'roboto-regular',fontSize:wp("9%")}}>Are you sure?</Text>
    </View>
    <View style={{alignSelf:'center',marginVertical:hp('1%')}}>
        <Text style={{fontFamily:'roboto-regular',alignSelf:'center',textAlign:'center',fontSize:wp("4.5%"),color:'#000',lineHeight:hp("3%")}}>Do you really want to delete this Wallpaper?</Text>
        <Text style={{fontFamily:'roboto-regular',alignSelf:'center',textAlign:'center',fontSize:wp("4.5%"),color:'#000',lineHeight:hp("3%")}}>This process cannot be undone.</Text>
    </View>
    </View>
          
    <View style={{flexDirection:'row',justifyContent:'center',alignSelf:'center',marginVertical:hp("3%")}}>
    <TouchableOpacity  onPress={toggleOverlay} >
            <View style={styles.buttonmodal}>
            <Text style={styles.modalText}>Cancel</Text>
            </View>
    </TouchableOpacity>

        <TouchableOpacity  onPress={toggleOverlay} >
            <View style={{...styles.buttonmodal,marginRight:0,backgroundColor:'black'}}>
                <Text style={{...styles.modalText,color:'#fff'}}>Delete</Text>
                </View>
        </TouchableOpacity>
    </View>

     </View>
     
</Modal>

    </View>
  );

};


const win = Dimensions.get('window');
const styles = StyleSheet.create({
headertext:{
marginTop:hp("2.5%")
},
customcontainer:{
marginHorizontal:wp("5%")
},
modacrossparent:{
    position:'absolute',
    right:wp("8%"),
    top:hp("5%")
},
modalImage:{
justifyContent:'center',
width:wp("19%"),
height:wp("19%"),
borderWidth:1,
borderColor:'#f6f6f6',
borderRadius:100
},
buttonmodal:{
height:hp("8%"),
width:wp("40%"),
backgroundColor:'#f6f6f6',
marginRight:wp("5%"),
justifyContent:"center",
borderRadius:wp("3%")
},
modalText:{
    alignSelf:'center',
    fontSize:wp("4%"),
    fontFamily:'roboto-medium'
}
});

export default Wallpaperfavorite;