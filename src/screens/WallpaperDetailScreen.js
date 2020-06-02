import React from 'react';
import { 
  View, 
  StyleSheet,
  Dimensions,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {Text} from 'react-native-elements';
import { AntDesign,SimpleLineIcons,MaterialIcons } from '@expo/vector-icons';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const WallpaperDetailScreen = ({ navigation }) => {
    const carpath = navigation.getParam('carpath');
    const imagecaption = navigation.getParam('imagecaption');
    const item = navigation.getParam('item');
 
    const share = () => { 
      FileSystem.downloadAsync(
      item.carsrc,
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
    <View style={{flex:1}}>
        <ImageBackground 
        source={carpath} 
        style={styles.imagefull}
        >
       <TouchableOpacity 
  	onPress={() => navigation.goBack()}
        style={styles.postionofrrow}>
        <MaterialIcons name="keyboard-backspace" style={styles.arrowback} />
        </TouchableOpacity>

        <View style={styles.daetilstex}>

            <View  style={{alignSelf:"center",flex:1}}>
            <Text style={{fontFamily: 'roboto-medium',fontSize:wp("5%"),width:wp("65%"),color:'#fff',letterSpacing:0}}>{imagecaption}</Text>
            </View>

            <View style={{flex:1}}>

            <View style={{flexDirection:'row',justifyContent:'space-between' , alignSelf:'flex-end'}}>
              <View style={styles.customeiconcont}>
                <TouchableOpacity onPress={ () => share()}>
                <SimpleLineIcons name="share" size={wp("5%")} color="black"  />
                </TouchableOpacity>
                </View>
              <View style={styles.customeiconcont}><AntDesign name="staro" size={wp("5%")} color="black" /></View>
              <View style={styles.customeiconcont}><AntDesign name="download" size={wp("5%")} color="black" /></View>
            </View>

            </View>

        </View>
    </ImageBackground>
    </View>
  );

};

const win = Dimensions.get('window');
const styles = StyleSheet.create({
    imagefull:{
        width:wp("100%"),
        height:hp("100%")+hp("6%")
    },
    arrowback:{
        fontSize:wp("7%"),
        color:'#fff'
    },
    postionofrrow:{
        position:'absolute',
        zIndex:99,
        left:wp("8%"),
        top:hp("7%")
    },
    daetilstex:{
        position:'absolute',
        bottom:hp("10%"),
        zIndex:99,
        left:wp("3%"),
        right:wp("3%"),
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    customeiconcont:{
        padding:wp("2%"),
        marginLeft:wp("1%"),
        marginRight:wp("1%"),
        borderRadius:wp("2%"),
        backgroundColor:'#fff',
        alignSelf:"center"
      }
});

export default WallpaperDetailScreen;