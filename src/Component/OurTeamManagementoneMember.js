import React from 'react';
import { 
  View, 
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Text
} from 'react-native';
import { withNavigation } from 'react-navigation'; 
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const OurTeamoneMember = ({item,style,navigation}) => {
  return (
        <View style={styles.wallpaperimagecontiner}>
          <View style={styles.secondcontaoner}>
            <TouchableOpacity 
              onPress={
                () => {
                    navigation.navigate('OurTeamDetailmessage', {item});
                }}
            >
            <Image source={{uri: item.imagepath}}  style={styles.imagestyle}/>
            </TouchableOpacity>
            <View style={{marginLeft:wp("2%"),marginVertical:hp("1.5%"),flexWrap:'wrap'}}>
            <Text style={styles.namestyle}>{item.name}</Text>
            <Text style={{...styles.positionstyle , ...style}}>{item.position}</Text>
            </View>
          </View>
        </View>
  );

};
const win = Dimensions.get('window');
const styles = StyleSheet.create({
wallpaperimagecontiner:{
marginVertical:hp("2.5%"),
marginLeft:wp("4%"),
marginRight:wp("2%"),
flex:1,

},
imagestyle:{
resizeMode:"cover",
width:wp("70%"),
height:hp("53%"),
borderRadius:wp("6%")
},
namestyle:{
    width:wp("70%"),
    fontFamily:'roboto-medium',
    fontSize:wp("7.5%"),
    flexWrap:'wrap'
},
positionstyle:{
    fontFamily:'roboto-regular',
    fontSize:wp("4%"),
    color:'#000',
    flexWrap:'wrap'
}
});

export default withNavigation(OurTeamoneMember);