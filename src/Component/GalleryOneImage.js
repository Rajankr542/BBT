import React from 'react';
import { 
  View, 
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {Text} from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const GalleryOneImage = ({photographername,carpath,photographerphoto,imagecaption,item, navigation}) => {
  return (
        <View style={styles.wallpaperimagecontiner}>
          <View style={styles.firstcontaoner}>
            <Image source={photographerphoto} style={{width:wp('10%'),height:wp('10%')}}/>
            <Text style={{fontFamily: 'roboto-regular',alignSelf:"center",fontSize:wp('5%'),marginLeft:wp('2%')}}>{photographername}</Text>
            </View>
          <View style={styles.secondcontaoner}>
            <TouchableOpacity 
              onPress={
                () => {
                    navigation.navigate('wallpaperdetails', {carpath,imagecaption,item});
                }}
            >
            <Image source={carpath}  style={styles.imagestyle}/>
            </TouchableOpacity>
          </View>
          <View style={styles.thirdcontaoner}>
            <View style={{alignSelf:"center",width:wp("50%")}}><Text style={{fontFamily: 'roboto-medium',fontSize:wp('5%'),lineHeight:wp("5%")}}>{imagecaption}</Text></View>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
              <View style={styles.customeiconcont}><AntDesign name="staro" size={wp("5%")} color="black"/></View>
              <View style={styles.customeiconcont}><AntDesign name="download" size={wp("5%")} color="black"/></View>
            </View>
          </View>
        </View>
  );

};
const win = Dimensions.get('window');
const styles = StyleSheet.create({
  wallpaperimagecontiner:{
    marginVertical:hp("2%")
  },
  firstcontaoner:{
    flexDirection:'row',
    marginVertical:hp('2%')
  },
  thirdcontaoner:{
    marginVertical:hp("2%"),
    flexDirection:'row',
    justifyContent:'space-between'
  },
  imagestyle:{
    flex:1,
    width:null,
    alignSelf: 'stretch',
    height:hp("48%"),
    borderRadius:wp('7%')
      },
      customeiconcont:{
        borderColor: '#ddd',
        borderWidth: 1,
        padding:wp('2.5%'),
        marginLeft:wp("2%"),
        borderRadius:10,
        alignSelf:"center"
      }
});

export default withNavigation(GalleryOneImage);